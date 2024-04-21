import { KeyIndex, StreamDeckWeb } from '@reelase-please-test/webhid'

export interface Demo {
	start(device: StreamDeckWeb): Promise<void>
	stop(device: StreamDeckWeb): Promise<void>

	keyDown(device: StreamDeckWeb, keyIndex: KeyIndex): Promise<void>
	keyUp(device: StreamDeckWeb, keyIndex: KeyIndex): Promise<void>
}
