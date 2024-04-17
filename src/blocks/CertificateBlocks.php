<?php

namespace CertifyYourAudience\Blocks;

use CertifyYourAudience\Admin\CertifyYourAudienceAdmin;
use chillerlan\QRCode\Output\QRGdImageJPEG;
use chillerlan\QRCode\QRCode;
use chillerlan\QRCode\QROptions;
use WP_Block_Type_Registry;

class CertificateBlocks
{
	private $block_types = [];

	public function __construct() {
		add_action('init', [$this, 'cya_block_init']);
		add_filter('allowed_block_types_all', [$this, 'restrict_blocks'], 10, 2);
		add_filter('query_vars', function ($vars) {
			$vars[] = 'cya_code';
			return $vars;
		});
	}

	public function cya_block_init() {
		$this->block_types[] = $cya_block =  register_block_type(__DIR__ . "/build/certificate", array(
			'title' => __('CYA Certificate', 'certify-your-audience'),
			'description' => __('The actual certificate block that holds the content.', 'certify-your-audience')
		));

		$this->block_types[] = register_block_type(__DIR__ . "/build/certificate-participant-name", array(
			'render_callback' => [$this, 'cya_participant_name_render'],
			'title' => __('CYA Participant Name', 'certify-your-audience'),
			'description' => __('The name of the person awarded with the certificate.', 'certify-your-audience')
		));
		$this->block_types[] = register_block_type(__DIR__ . "/build/certificate-qrcode", array(
			'render_callback' => [$this, 'cya_qrcode_render'],
			'title' => __('CYA QrCode', 'certify-your-audience'),
			'description' => __('The QrCode that identifies the certificate.', 'certify-your-audience')
		));
		$this->block_types[] = register_block_type(__DIR__ . "/build/certificate-url", array(
			'render_callback' => [$this, 'cerficate_url_render'],
			'title' => __('CYA URL', 'certify-your-audience'),
			'description' => __('The URL path that guides to the unique certificate.', 'certify-your-audience')
		));

		/*
		Conversão de PO para JSON https://www.wpeform.io/tools/make-po-to-json/
		A abordagem a seguir utiliza um bloco como envelope e registra a tradução pelo script desse bloco.
		Assim um único aquivo de tradução serve para todos os blocos incluídos no envelope.
		Uma alternativa é criar um arquivo de tradução para cada bloco por meio de um laço de repetição.
		*/
		wp_set_script_translations(
			$cya_block->editor_script,
			'certify-your-audience',
			CERTIFY_YOUR_AUDIENCE_PATH . '/languages'
		);

	}

	public function get_script_src_by_handle($handle) {
		global $wp_scripts;
		if(in_array($handle, $wp_scripts->queue)) {
			return $wp_scripts->registered[$handle]->src;
		}
	}

	public function cya_participant_name_render($block_attributes, $content) {
		global $post;

		$closing_position = strpos($content, '</');
		$opening_position = strrpos(substr($content, 0, $closing_position), '>') + 1;

		$cya_code = get_query_var('cya_code');
		$cya_meta = CertifyYourAudienceAdmin::get_meta_from_code($post->ID, $cya_code);

		return (
			$cya_meta
			? substr($content, 0, $opening_position) .
			$cya_meta['name'] .
			substr($content, $closing_position)
			: $content
		);
	}

	public function cya_qrcode_render() {
		global $post;
		$cya_code = get_query_var('cya_code');
		$img_src = self::get_cya_qrcode_img_src($post->ID, $cya_code);

		return "
			<figure class='wp-block-image'>
				$img_src
			</figure>
		";
	}

	public static function get_cya_qrcode_img_src($post_id, $cya_code) {
		$cya_meta = CertifyYourAudienceAdmin::get_meta_from_code($post_id, $cya_code);

		if (!$cya_meta) return "
			<img
				src='" . CERTIFY_YOUR_AUDIENCE_URL . "src/assets/img/qrcode-placeholder.jpg'
				title='". esc_html__('QR Code', 'certify-your-audience') ."'
				alt='". esc_html__('QR Code', 'certify-your-audience') ."'
			/>
		";

		$cya_url = add_query_arg('cya_code', $cya_meta['id'], get_permalink());

		$qr_options = new QROptions([
			'version' => 5,
			'outputInterface' => QRGdImageJPEG::class,
			'outputBase64' => false
		]);

		$cya_qrcode = (new QRCode($qr_options))->render($cya_url);

		return $cya_qrcode;
	}

	public function cerficate_url_render() {
		global $post;
		$cya_code = get_query_var('cya_code');
		$cya_url = CertifyYourAudienceAdmin::get_certificate_url($post->ID, $cya_code);

		if (!$cya_url) return sprintf(
			'<p><small>' . esc_html__('***Here comes the certificate URL***', 'certify-your-audience') . '</small></p>'
		);

		return sprintf("<p><small><a href='" . $cya_url . "'>" . $cya_url . "</a></small></p>");
	}

	public function restrict_blocks($allowed_block_types, $editor_context) {
		if ($editor_context->post->post_type != 'cya_certificate') {
			$registered_blocks = is_array($allowed_block_types) ? $allowed_block_types : array_map(
				function ($rbt) {
					return $rbt->name;
				},
				WP_Block_Type_Registry::get_instance()->get_all_registered()
			);

			$custom_block_types = array_map(
				function ($cbt) {
					return $cbt->name;
				},
				$this->block_types
			);

			return array_values(array_diff($registered_blocks, $custom_block_types));
		}

		return $allowed_block_types;
	}
}
