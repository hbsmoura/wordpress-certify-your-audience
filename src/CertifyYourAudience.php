<?php

namespace CertifyYourAudience;

use CertifyYourAudience\Admin\CertifyYourAudienceAdmin;
use CertifyYourAudience\Blocks\CertificateBlocks;
use CertifyYourAudience\Public\CertifyYourAudiencePublic;

class CertifyYourAudience {
    public function __construct() {
		$cya_admin = new CertifyYourAudienceAdmin();
		$cya_public = new CertifyYourAudiencePublic();

		$certificate_block = new CertificateBlocks();
	}
}