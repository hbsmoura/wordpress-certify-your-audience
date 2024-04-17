<?php

namespace CertifyYourAudience\Admin;

class CertifyYourAudienceAdmin {

	public function __construct() {
		add_action('init', [$this, 'register_certificate_post_type']);
		add_filter('manage_cya_certificate_posts_columns', [$this, 'cya_certificate_posts_columns']);
		add_action('manage_cya_certificate_posts_custom_column', [$this, 'cya_certificate_costum_column'], 10, 2);
	}

	public function register_certificate_post_type() {
		if(post_type_exists('cya_certificate')) return;

		$args = [
			'labels' => [
				'name' => esc_html__('Certificates', 'certify-your-audience'),
				'singular_name' => esc_html__('Certificate', 'certify-your-audience'),
				'add_new' => esc_html__('Add New Certificate', 'certify-your-audience'),
				'add_new_item' => esc_html__('Add New Certificate', 'certify-your-audience'),
				'edit_item' => esc_html__('Edit Certificate', 'certify-your-audience'),
				'new_item' => esc_html__('New Certificate', 'certify-your-audience'),
				'view_item' => esc_html__('View Certificate', 'certify-your-audience'),
				'view_items' => esc_html__('View Certificates', 'certify-your-audience'),
				'search_items' => esc_html__('Search Certificates', 'certify-your-audience'),
				'not_found' => esc_html__('No certificates found', 'certify-your-audience'),
				'not_found_in_trash' => esc_html__('No certificates found in trash', 'certify-your-audience'),
				'all_items' => esc_html__('All Certificates', 'certify-your-audience'),
				'archives' => esc_html__('Certificate Archives', 'certify-your-audience'),
				'attributes' => esc_html__('Certificate Attributes', 'certify-your-audience'),
				'insert_into_item' => esc_html__('Insert into Certificate', 'certify-your-audience'),
				'uploaded_to_this_item' => esc_html__('Uploaded to this Certificate', 'certify-your-audience'),
				'featured_image' => esc_html__('Background Image'),
				'filter_items_list' => esc_html__('Filter certificates list', 'certify-your-audience'),
				'items_list_navigation' => esc_html__('Certificates list navigation', 'certify-your-audience'),
				'items_list' => esc_html__('Certificates list', 'certify-your-audience'),
				'item_published' => esc_html__('Certificate published', 'certify-your-audience'),
				'item_published_privately' => esc_html__('Certificate published privately', 'certify-your-audience'),
				'item_reverted_to_draft' => esc_html__('Certificate reverted to draft', 'certify-your-audience'),
				'item_trashed' => esc_html__('Certificate trashed', 'certify-your-audience'),
				'item_scheduled' => esc_html__('Certificate scheduled', 'certify-your-audience'),
				'item_updated' => esc_html__('Certificate updated', 'certify-your-audience'),
				'item_link' => esc_html__('Certificate Link', 'certify-your-audience'),
				'item_link_description' => esc_html__('A link to a certificate', 'certify-your-audience'),
			],
			'description' => esc_html__('An academic certificate is a document that certifies that a person has received specific education or has passed a test or series of tests.', 'certify-your-audience'),
			'public' => true,
			'exclude_from_search' => true,
			'show_in_rest' => true,
			'menu_icon' => 'dashicons-awards',
			'supports' => ['editor', 'title', 'custom-fields'],
			'template' => [
				array('cya/certificate', array('lock' => ['remove' => true]))
			]
		];

		register_post_type('cya_certificate', $args);

		$this->register_meta_participant_list();
	}

	public function cya_certificate_posts_columns($columns) {
		$columns['certificates'] =  esc_html__('Certificates', 'certify-your-audience');
		return $columns;
	}

	public function cya_certificate_costum_column($column, $post_id) {
		if($column != 'certificates') return;
		$certified_list = get_post_meta($post_id, '_cya_participant_list', true);
		if(empty($certified_list)) return;
		echo '<ol>';
		foreach($certified_list as $certified) {
			$name = $certified['name'];
			$url = self::get_certificate_url($post_id, $certified['id']);
			echo "<li><a href='$url' target='_blank'>$name</a></li>";
		}
		echo '</ol>';
	}

	public static function get_certificate_url($post_id, $cya_code) {
		$cya_meta = self::get_meta_from_code($post_id, $cya_code);

		if (!$cya_meta) return false;

		return add_query_arg('cya_code', $cya_meta['id'], get_permalink());
	}

	public static function get_meta_from_code($post_id, $cya_code) {
		$cya_list = get_post_meta($post_id, '_cya_participant_list', true);

		if(!$cya_list) return false;

		$cya_meta = false;
		foreach($cya_list as $cya) {
			if ($cya['id'] == $cya_code) $cya_meta = $cya;
		}

		return $cya_meta;
	}

	public function register_meta_participant_list() {

		$args = [
			'type' => 'array',
			'single' => true,
			'show_in_rest' => array(
				'schema' => array(
					'type' => 'array',
					'items' => array(
						'type' => 'object',
						'properties' => array(
							'name' => array(
								'type' => 'string'
							),
							'email' => array(
								'type' => 'string'
							),
							'id' => array(
								'type' => 'string'
							)
						)
					)
				)
			),
			// Sem auth_callback o acesso é negado			
			'auth_callback' => function() {
				return current_user_can( 'edit_posts' );
			},
			'sanitize_callback' => [$this, 'sanitize_meta_participant_list']
		];

		register_post_meta('cya_certificate', '_cya_participant_list', $args);
		
	}

	public function sanitize_meta_participant_list($content) {
		return array_filter($content, function($item) {
			return $item['name'] && $item['email'] && $item['id'];
		});
	}
	
}
