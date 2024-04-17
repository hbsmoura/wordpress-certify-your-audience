<?php

/**
 *
 * Plugin Name:       Certify Your Audience
 * Description:       Teaching is your passion? With this plugin you can certify your audience.
 * Version:           1.0.0
 * Requires at least: 5.6
 * Requires PHP: 	  7.4
 * Author:            hbsmoura
 * Author URI:        https://github.com/hbsmoura
 * License:           GPL-2.0+
 * License URI:       http://www.gnu.org/licenses/gpl-2.0.txt
 * Text Domain:       certify-your-audience
 * Domain Path:       /languages
 */

// Aborta quando chamado diretamente.
if ( ! defined( 'ABSPATH' ) ) exit;

/**
 * Define as constantes do plugin
 */
define ( 'CERTIFY_YOUR_AUDIENCE_PATH', plugin_dir_path( __FILE__ ) );
define ( 'CERTIFY_YOUR_AUDIENCE_URL', plugin_dir_url( __FILE__ ) );
define ( 'CERTIFY_YOUR_AUDIENCE_BASENAME', plugin_basename( __FILE__ ) );
define( 'CERTIFY_YOUR_AUDIENCE_VERSION', get_file_data(__FILE__, ['Version'], 'plugin') );

// Carrega o textdomain
load_plugin_textdomain('certify-your-audience', false, dirname(CERTIFY_YOUR_AUDIENCE_BASENAME) . '/languages');

// Registra a função para o hook de ativação do plugin
register_activation_hook(__FILE__, 'certify_your_audience_activate');
function certify_your_audience_activate() {
    update_option('rewrite_rules', '' );
}

// Registra a função para o hook de desativação do plugin
register_deactivation_hook(__FILE__, 'certify_your_audience_deactivate');
function certify_your_audience_deactivate() {
    flush_rewrite_rules();
}

// Chama o autoload.php
require_once CERTIFY_YOUR_AUDIENCE_PATH . 'vendor/autoload.php';

// Cria o objeto principal
// O root namespace deve ser alterado no autoloader
$pluguin = new CertifyYourAudience\CertifyYourAudience();
