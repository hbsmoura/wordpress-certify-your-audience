/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#useblockprops
 */
import { useBlockProps } from '@wordpress/block-editor';
import { ResponsiveWrapper } from '@wordpress/components';
import { __ } from '@wordpress/i18n';

import qrCodePlaceholder from '../assets/img/qrcode-placeholder.jpg';

/**
 * The save function defines the way in which the different attributes should
 * be combined into the final markup, which is then serialized by the block
 * editor into `post_content`.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#save
 *
 * @return {Element} Element to render.
 */
export default function save() {
	const text = __('QR Code placeholder', 'certify-your-audience')
	return (
		<ResponsiveWrapper {...useBlockProps.save()}>
			<img
				src={qrCodePlaceholder}
				title={text}
				alt={text}
			/>
		</ResponsiveWrapper>
	);
}
