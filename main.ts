import { Plugin } from 'obsidian';

export default class CopyResultData extends Plugin {

	async onload() {
		// Register the URL event handler
		this.registerObsidianProtocolHandler('copy-result-data', async (params) => {
			// `params` contains the parsed query parameters
			if (params['result-data']) {
				// Use the Clipboard API to copy data
				try {
					await navigator.clipboard.writeText(params['result-data']);
					console.log('Data copied to clipboard:', params['result-data']);
				} catch (error) {
					console.error('Failed to copy text to clipboard:', error);
				}
			}
		});
	}

	onunload() {

	}
}

