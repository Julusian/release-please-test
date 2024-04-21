# @reelase-please-test/core

![Node CI](https://github.com/Julusian/node-elgato-stream-deck/workflows/Node%20CI/badge.svg)
[![codecov](https://codecov.io/gh/Julusian/node-elgato-stream-deck/branch/master/graph/badge.svg?token=Hl4QXGZJMF)](https://codecov.io/gh/Julusian/node-elgato-stream-deck)

[![npm version](https://img.shields.io/npm/v/@reelase-please-test/core.svg)](https://npm.im/@reelase-please-test/core)
[![license](https://img.shields.io/npm/l/@reelase-please-test/core.svg)](https://npm.im/@reelase-please-test/core)

[`@reelase-please-test/core`](https://github.com/julusian/node-elgato-stream-deck) is a shared library for interfacing
with the various models of the [Elgato Stream Deck](https://www.elgato.com/en/gaming/stream-deck).

You should not be importing this package directly, instead you will want to do so via one of the wrapper libraries to provide the appropriate HID bindings for your target platform:

-   [`@reelase-please-test/node`](https://npm.im/@reelase-please-test/node)
-   [`@reelase-please-test/webhid`](https://npm.im/@reelase-please-test/webhid)
