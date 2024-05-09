import { Notice, Plugin } from 'obsidian';

export default class CopyResultData extends Plugin {

	async onload() {
		// Register the URL event handler
		this.registerObsidianProtocolHandler('copy-result-data', async (params) => {
			// `params` contains the parsed query parameters
			if (params['result-data']) {
				// Use the Clipboard API to copy data
				try {
					await navigator.clipboard.writeText(params['result-data']);
					new Notice('Data copied to clipboard:' + params['result-data']);
				} catch (error) {
					new Notice(`Failed to copy text to clipboard: ${error}`);
				}
			}
		});
	}

	onunload() {

	}
}

