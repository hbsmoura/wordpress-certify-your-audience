/**
 * Use this file for JavaScript code that you want to run in the front-end
 * on posts/pages that contain this block.
 *
 * When this file is defined as the value of the `viewScript` property
 * in `block.json` it will be enqueued on the front end of the site.
 *
 * Example:
 *
 * ```js
 * {
 *   "viewScript": "file:./view.js"
 * }
 * ```
 *
 * If you're not making any changes to this file because your project doesn't need any
 * JavaScript running in the front-end, then you should delete this file and remove
 * the `viewScript` property from `block.json`.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-metadata/#view-script
 */

/* eslint-disable no-console */
/* eslint-enable no-console */

import html2canvas from 'html2canvas'
import jsPDF from 'jspdf'

Array.from(document.getElementsByClassName('cya_certificate')).forEach(certificate => {
	html2canvas(certificate.parentElement, {windowWidth: 1280, windowHeight: 720}).then(canvas => {
		const jpgBtn = document.createElement('button')
		const pdfBtn = document.createElement('button')

		jpgBtn.innerHTML = '<span class="dashicons dashicons-format-image"></span>'
		pdfBtn.innerHTML = '<span class="dashicons dashicons-pdf"></span>'

		const buttons = [jpgBtn, pdfBtn]
		buttons.forEach(bt => bt.className = 'certificate-save-button')

		jpgBtn.onclick = () => {
			let aDownloadLink = document.createElement('a')
			aDownloadLink.download = 'certificate.jpg'
			aDownloadLink.href = canvas.toDataURL('jpg')
			aDownloadLink.click()
			aDownloadLink.remove()
		}

		pdfBtn.onclick = () => {
			const pdf = new jsPDF({ orientation: 'l', unit: 'mm', format: 'a4' })

			pdf.addImage(
				canvas, 'canvas', 0, 0,
				pdf.internal.pageSize.getWidth(),
				pdf.internal.pageSize.getHeight()
			)

			pdf.save('certificate.pdf')
		}

		certificate.parentElement.parentElement.appendChild(jpgBtn)
		certificate.parentElement.parentElement.appendChild(pdfBtn)
	})
})




