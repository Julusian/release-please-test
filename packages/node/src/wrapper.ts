import { StreamDeck, StreamDeckProxy } from '@reelase-please-test/core'

export class StreamDeckNode extends StreamDeckProxy {
	constructor(device: StreamDeck, private readonly resetToLogoOnClose: boolean) {
		super(device)
	}

	public async close(): Promise<void> {
		if (this.resetToLogoOnClose) {
			await this.resetToLogo()
		}
		await super.close()
	}
}
