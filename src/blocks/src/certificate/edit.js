/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-i18n/
 */
import { __ } from '@wordpress/i18n';

/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#useblockprops
 */
import { AlignmentToolbar, BlockControls, InnerBlocks, InspectorControls, useBlockProps } from '@wordpress/block-editor'
import { useSelect } from '@wordpress/data'
import { useEntityProp } from '@wordpress/core-data'
import { Button, Dashicon, Modal, PanelBody, PanelRow, __experimentalSpacer as Spacer, TextControl } from '@wordpress/components'

import { useState } from 'react'
import { v4 as uuidv4 } from 'uuid'
/**
 * See https://github.com/humanmade/block-editor-components/tree/main/src/components/ImageControl
 */
import { ImageControl } from '@humanmade/block-editor-components';

/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * Those files can contain any CSS code that gets applied to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */
import './editor.scss';

import fakeSignatureImg from '../assets/img/fake-signature.png'

/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#edit
 *
 * @return {Element} Element to render.
 */
export default function Edit({ attributes, setAttributes }) {
	const { backgroundImage, textAlign } = attributes

	const postId = useSelect(select => select('core/editor').getCurrentPostId())

	const [meta, setMeta] = useEntityProp('postType', 'cya_certificate', 'meta', postId)

	const [currentCertified, setCurrentCertified] = useState({ name: '', email: '', id: '' })

	const [controls, setControls] = useState({
		modalOpen: false, addButtonDisabled: true, saveEditButtonDisabled: true
	})

	const clearFields = () => {
		setCurrentCertified({ name: '', email: '', id: '' })
	}

	const addCertified = () => {
		setMeta({
			...meta, _cya_participant_list: [
				...meta['_cya_participant_list'],
				{ ...currentCertified, id: uuidv4() }
			]
		})
		clearFields()
	}

	const openModal = index => {
		setCurrentCertified(meta['_cya_participant_list'][index])
		setControls({ ...controls, modalOpen: true })
	}

	const closeModal = () => {
		setControls({ ...controls, modalOpen: false })
		clearFields()
	}

	const saveEdit = () => {
		const indexOfCertified = meta['_cya_participant_list']
			.findIndex(certified => certified.id === currentCertified.id)

		const modifiedList = meta['_cya_participant_list'].map((certified, index) => {
			if (index === indexOfCertified) return currentCertified
			return certified
		})

		setMeta({ ...meta, _cya_participant_list: modifiedList })

		closeModal()
	}

	const removeCertified = () => {
		const indexOfCertified = meta['_cya_participant_list']
			.findIndex(certified => certified.id === currentCertified.id)

		const modifiedList = [...meta['_cya_participant_list']]
		modifiedList.splice(indexOfCertified, 1)

		setMeta({ ...meta, _cya_participant_list: modifiedList })

		closeModal()
	}

	return (
		<div {...useBlockProps({
			style: {
				textAlign: textAlign,
				backgroundImage: `url(${backgroundImage.url})`,
				backgroundSize: '100% 100%'
			}
		})} className='alignwide'>
			<InspectorControls>
				<PanelBody
					title={__('Choose background image', 'certify-your-audience')}
					initialOpen={false}
				>
					<ImageControl
						buttonText={__('Select Image', 'certify-your-audience')}
						modalTitle={__('Select Image', 'certify-your-audience')}
						removeButtonText={__('Remove Image', 'certify-your-audience')}
						replaceButtonText={__('Replace Image', 'certify-your-audience')}

						value={backgroundImage.id}
						onChange={(image) => setAttributes(
							{ backgroundImage: { id: image?.id, url: image?.url } }
						)}
					/>
				</PanelBody>
				<PanelBody title={__('Certified List', 'certify-your-audience')} initialOpen={true} >
					<PanelRow>
						<ol>
							{meta['_cya_participant_list'].map((certified, index) => {
								return (
									<li style={{ display: 'grid', gridTemplateColumns: '4fr 2fr' }}>
										<span>{certified.name + ' - ' + certified.email}</span>
										<Button variant="secondary" onClick={() => openModal(index)}>
											<Dashicon icon='admin-generic' />
										</Button>
									</li>
								)
							})}
						</ol>
					</PanelRow>
					<PanelRow>
						<p>{__('Update/Publish the post for saving the list.', 'certify-your-audience')}</p>
					</PanelRow>
					{controls['modalOpen'] && (
						<Modal title={__("Edit participant data", 'certify-your-audience')} onRequestClose={closeModal}>
							<TextControl
								label={__("Name", 'certify-your-audience')}
								value={currentCertified.name}
								onChange={value => {
										setControls({ ...controls, saveEditButtonDisabled: !(value && currentCertified.email) })
										setCurrentCertified({ ...currentCertified, name: value })
									}
								}
							/>
							<TextControl
								type='email'
								label={__("Email", 'certify-your-audience')}
								value={currentCertified.email}
								onChange={value => {
									setControls({ ...controls, saveEditButtonDisabled: !(value && currentCertified.name) })
									setCurrentCertified({ ...currentCertified, email: value })
								}
								}
							/>
							<Button variant="secondary" onClick={saveEdit} disabled={controls['saveEditButtonDisabled']}>
								{__('Save Edit', 'certify-your-audience')}
							</Button>
							<Button variant="tertiary" onClick={removeCertified}>
								{__('Remove', 'certify-your-audience')}
							</Button>
							<p style={{ color: 'red' }}>
								{__("Warning! Participants removed from this list won't possesses a certificate", 'certify-your-audience')}
							</p>
						</Modal>
					)}
				</PanelBody>
				<PanelBody title={__('Add Certified Individual', 'certify-your-audience')} initialOpen={false}>
					<PanelRow>
						<TextControl
							label={__("Name", 'certify-your-audience')}
							value={currentCertified.name}
							onChange={value => {
								setCurrentCertified({ ...currentCertified, name: value })
								setControls(
									{ ...controls, addButtonDisabled: !(value && currentCertified.email) }
								)
							}}
						/>
					</PanelRow>
					<PanelRow>
						<TextControl
							type='email'
							label={__("Email", 'certify-your-audience')}
							value={currentCertified.email}
							onChange={value => {
								setCurrentCertified({ ...currentCertified, email: value })
								setControls(
									{ ...controls, addButtonDisabled: !(value && currentCertified.name) }
								)
							}}
						/>
					</PanelRow>
					<PanelRow>
						<Button
							variant='primary'
							onClick={addCertified}
							disabled={controls['addButtonDisabled']}
						>{__('Add', 'certify-your-audience')}</Button>
						<Button variant='secondary' onClick={clearFields}>{__('Clear Fields', 'certify-your-audience')}</Button>
					</PanelRow>
				</PanelBody>
			</InspectorControls>
			<BlockControls>
				<AlignmentToolbar
					value={textAlign}
					onChange={(nextAlign) => setAttributes({ textAlign: nextAlign })}
				/>
			</BlockControls>
			<Spacer paddingX={'2em'} paddingY={'1em'}>
				<InnerBlocks
					template={[
						['core/heading', { content: __('Certificate', 'certify-your-audience'), level: 1 }],
						['core/paragraph', { content: __('Our institution have the pleasure of award', 'certify-your-audience') }],
						['cya/certificate-participant-name', { lock: { remove: true } }],
						['core/paragraph', { content: __('with this certificate for the event occurred here.', 'certify-your-audience') }],
						['core/columns', {}, [
							['core/column', { verticalAlignment: 'center' }, [
								['core/image', { url: fakeSignatureImg }],
								['core/paragraph', { content: __('Random Person', 'certify-your-audience') }]
							]],
							['core/column', { verticalAlignment: 'center' }, [
								['cya/certificate-qrcode']
							]],
							['core/column', { verticalAlignment: 'center' }, [
								['core/image', { url: fakeSignatureImg }],
								['core/paragraph', { content: __('Random Person', 'certify-your-audience') }]
							]]
						]],
						['cya/certificate-url']
					]}
				/>
			</Spacer>
		</div>
	);
}
