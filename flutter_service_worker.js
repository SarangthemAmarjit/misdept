'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "83d043db4fdfe6882fb7f01a09d92b11",
".git/config": "5cf00c284b09943789de5bdb05869d2c",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "19da75f94ce1a898cc0ad3c327e23b4c",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "da7a15bade72af116a17116cb0c26fce",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "9f471d833f28413d0bcd0d27c789da88",
".git/logs/refs/heads/master": "9f471d833f28413d0bcd0d27c789da88",
".git/logs/refs/remotes/origin/master": "2d818864e902086770ee9325152fbb04",
".git/objects/01/95920b40b16f32764ad36484287a320c4c97d6": "a30ce6d67d887e8515ae712c81e81db9",
".git/objects/02/e837f438ad46c3c172bd486dbb36d8f14b7a7b": "6ec0ec1ef4dd0592e0583b9d3d9840d6",
".git/objects/03/2fe904174b32b7135766696dd37e9a95c1b4fd": "80ba3eb567ab1b2327a13096a62dd17e",
".git/objects/04/25f86f5e5347197fae698feee00ace8b92659c": "088ab0faaf29d275cb053a5b69e6cc10",
".git/objects/04/b8f86d4b6b8379da35f0c9390663bb5ea68e9b": "ce225daec3c7f5ca631f5f28d27cb34b",
".git/objects/07/97abd9c50eeff82ee5c32994fe10ef5446d184": "5fe0597561986e2f663a1b98e97ac69a",
".git/objects/09/5a40a5c71603232049755ef86837eaa06443cc": "191e5db28aecccfa3a5c5eaba9d18b6c",
".git/objects/09/626404612f6252db8124f3646d293940e9e2b4": "70ba69f6c58293fa6cf5725306df71c7",
".git/objects/0c/c1082e70abafa45369bbcccf95005ccd345e27": "f808a9052db04b51f2b18fca655d4989",
".git/objects/0d/c053e65574ad012bb696f44fa8993ae04e7f05": "c7a42d740df2ee4e4861a5adef7508a0",
".git/objects/0e/996092ca2cdee8c8709c56446275b821af0b90": "a2b2bba6de23f5413e0dcce144d24130",
".git/objects/10/aae5633d76e75ed43bf58ee5dd013daff11cb2": "d572a9fad8d3b161bee5d5b6d17334b3",
".git/objects/11/8fd4d252c71d3679d4d372e2bf1b00255f239a": "658baf57182c3ea4abd5eae55186850b",
".git/objects/11/9960f777c0e79d11ffca4de80c11c5b73dcfd9": "0ec55f8937b3a8fda588924413b9a592",
".git/objects/12/24c3c2065268a372416720402ebd226d3e74c5": "6f33e01f385804ff3ab221c2dc081f94",
".git/objects/13/90b1288045a2556f4df33059817f5d6f40d82d": "5cf6e2f157cdc73720143918863ca04c",
".git/objects/15/3742fa4a963e136460e913fdf309fa3bcfeedb": "13b3a9c54ab7a9e73ce77b9e389c8840",
".git/objects/15/382ed5722e378c3a4a05ff430298c89544a505": "0b89bf790c2ecbde7c3e5f1f04c9bb42",
".git/objects/16/225c8c73d453cc2fdeb4782a4b0ce61bda8e6c": "fc3ed28158f895a85b5cafc6d6b4539a",
".git/objects/16/5e736f202d62207558c37df1d664de6eda83c5": "d340032200bd13dae5f370f57855bbb2",
".git/objects/16/de9c8697a057aceac5ab93002ed42c2de30400": "8012a173bf28d00dc1826826337c1271",
".git/objects/17/39c578c428714b5fb65bf9d46a87e7de0eb9cf": "b256ce4ec799934e484409b80fa08b15",
".git/objects/17/96c113fd5f8cf2e9b48abbfad80cd0d3658cc7": "2bfe08b00b7dfcb787c29e8fe7e0b6c9",
".git/objects/18/feb2db4fce14bc87db451a6f82315f36983072": "ab1b2fde54268ac09730607a96d99bd2",
".git/objects/19/56951d9733a0fd99b8c56300fdd10ab9e905e0": "bab91bcc24fc581fd2e9ec365ff7866a",
".git/objects/19/65075b0227e198892b9dbd581e8e39f9f717f0": "9739348f8808294defd928692502c4d3",
".git/objects/1c/d067225adbe30301c583fc0ee1d15aaeee40b7": "936f85ece3b8365451b3716cefc2207e",
".git/objects/1d/4415e82fad02a345856335dbeda1b9f49987ff": "77d66fb296e62efe87a24222a32819d5",
".git/objects/1e/2bfc93fe8ee7179b99561f4fa52966407906fa": "63b717244e74bcfab007c0859644062f",
".git/objects/1e/bbe664a6b3ab70c516caba05860bf7a6b25283": "67f1f185f450a36294705c48a4fd4850",
".git/objects/1e/e471741f98cacc0c4cc05c52595b62aafd7f7a": "d6fcae764494f9ac854274a7f0cb0bee",
".git/objects/20/98e97b6c089ff1a850057f0299c239d54935a5": "2f3327f1812087090d88f3c4f122788c",
".git/objects/21/8c2eb029afc94c151ee1fa5a58471e4517ccad": "59f82b9afa29a2adc13b2534a433b61f",
".git/objects/22/533009345c6b70ae84ca2d99505a90830bdeb9": "e13b4ca83ee20ed9fbfb24374c1d6035",
".git/objects/22/960b96613880f9efb9f05b018c5f794d2b32ac": "f8f1888408aecbf6b51425162abc5095",
".git/objects/23/cbe83e191d3bb1c59cc36dbdd4d5c2eb787e24": "51dd8e87929416559a912577c946de43",
".git/objects/27/0cc326e21149e503a3aad38cd3a493c9f7c36d": "a345505acb54c83a1bdbb73ea795b0e8",
".git/objects/28/d81e6ac010b1256df3bcbf195e100054a66403": "3576152c84e491b48ea90deac54d3017",
".git/objects/29/2843788cc4920041cde6e3e4546a763b4b75cc": "14f0136b4ca11b944701de59b924fa75",
".git/objects/2a/b7877d48141a43d34606b7c5dfde5823dfe7f9": "89b1d640fe54806e593bc015a595a067",
".git/objects/2b/7dc0eadde329aa3c3cb8ebc2823328c07f93ee": "cc004f90e8e180ec42260b8c248e3e10",
".git/objects/2b/f3cca7e23cfa06c5d14435dace9cf45fb00e7f": "c41e48dbc587f12893642e1b6ae61275",
".git/objects/2d/bcdf6cb7f606d10dc615bf761166ae192eb06a": "e55173388ad70694e3c2e8e9dbea47be",
".git/objects/31/2e4c2f0d48650be54dff3f79a266cb4a6976ab": "d4957b34cd9025fa15d33278871a60b9",
".git/objects/31/b8c9c0390d1a0cec9da49ac81bcb374ed07541": "a42c8a45151f18a142c52386a77f900a",
".git/objects/32/1bca468cbfa3bcfe8fd362162497e79e23231d": "30efb4b5881119099772fa56afcba1ba",
".git/objects/32/8ebada4b61ccfeb077b3ffa0d21637fc2d2cad": "f6136c248160ec2aab41fc223d6736d8",
".git/objects/33/31d9290f04df89cea3fb794306a371fcca1cd9": "e54527b2478950463abbc6b22442144e",
".git/objects/34/6aba68c5f278228d620533a4aec7e7b507f611": "98a1cde59a5d84ef057b5f950495d1f4",
".git/objects/35/96d08a5b8c249a9ff1eb36682aee2a23e61bac": "e931dda039902c600d4ba7d954ff090f",
".git/objects/37/9ea606624530966d34293643269173174ebc8a": "0128c66e686ac74bd201f30306c6a583",
".git/objects/38/f72c3b661274731c0dca4263c6147292c3313e": "06ec909689545717240ec77454003efe",
".git/objects/3a/a972b4743deedae43460c3598286c3c4278d5b": "c59ca59cb085b22bf3a7c594b87688dc",
".git/objects/3c/1ec7d5a0fe48fafccb30fe165b15bf2d5cf6b3": "b9ec6997fd4ea3a73cb8ce8136a4983d",
".git/objects/3d/4b35b52e670f52909c8d1d124bf48aee77009d": "ddc5b78e7a313dc68ceb363e6c22029e",
".git/objects/3f/35c315ec940a8f22f2bf8251623b16bd8be376": "ef44622fa36ae962bac17d464818fc52",
".git/objects/3f/c1ed58fcf1122a8468283ec08bb7348932cdbc": "b5570de8c822f17709508c69cc89a036",
".git/objects/40/1184f2840fcfb39ffde5f2f82fe5957c37d6fa": "1ea653b99fd29cd15fcc068857a1dbb2",
".git/objects/40/a685f2a329be648d0165db36a691a8b3f1b1d2": "62cd7b4e87b07e511b16c235fab50757",
".git/objects/41/e170eab1c4a0c0f4b969f02b057f92d69664fd": "f854ecb8eb98dfb856baa5733106e3db",
".git/objects/42/5a630284feca5dd98611e601f2489ad88b5c75": "6ff9128d79ca8d6ce947a7c09f0b0679",
".git/objects/43/0e894136df77d9e10e39a3315705856a43d275": "7d5b4c34f995b9bcbcc7987af7ad49f0",
".git/objects/44/f481db48676470a21051466283044fbc369ab1": "77ac2d005fccd2df207951444d560be7",
".git/objects/45/d0613a3d374f093d8aec273faa67a38b8a8bfe": "d9c65d13ca316193fed83030cf6d169c",
".git/objects/46/c2e79dd8db47500b2b7bbbe68a4c4e6e7b1593": "ef74b1731f7c86c47653d481a312004e",
".git/objects/47/ebad33245567f834300ebb9e392de0680365a5": "95eefabbca12b8126ed1fc245cc33e4e",
".git/objects/48/56c9057dec76b96541a235882bb92ed274ac7f": "a9cf803e09688b77c441d9572484430e",
".git/objects/48/660e793dabcfe9f90650c7d48e6f142935bf33": "8248909124464e56621c739d601a401a",
".git/objects/49/ad38ca67bd023f9b98ef954977e987e108984d": "caf2fc7371c3cc13a3a69d027b077cdc",
".git/objects/4d/6d2ba319e9001454949b8227ef0f1292bdb7f0": "bfb7b4f5a8d6e522489c1973925391a2",
".git/objects/4e/74702465b55bdf2f0c023f9d15e9db4945ea80": "8a8f3d421a75d3186c6716cd4e792ffd",
".git/objects/4f/02e9875cb698379e68a23ba5d25625e0e2e4bc": "254bc336602c9480c293f5f1c64bb4c7",
".git/objects/53/3402c75429e6feaa7b8f92878ae2313dbdf2de": "63ab067b0b447b461fa3e8f58a1f23a9",
".git/objects/53/e46baba815516351640840ae3bdea9df3db62b": "8d39de62e60b3837d5de7b2ca8378f11",
".git/objects/55/2d517e2017752d42ac6bb1888a96b51b16beae": "82f3c20afd2a94ffa43058868493816d",
".git/objects/57/7946daf6467a3f0a883583abfb8f1e57c86b54": "846aff8094feabe0db132052fd10f62a",
".git/objects/57/abd80b880e625a37f734763a2239da1ced5bfc": "175b79ee9e22cd6709daf602d4302cff",
".git/objects/58/d92625757f98eb297218b1a45f45f557d0b3eb": "d91d2f3d52a770419868238d657e4747",
".git/objects/59/5c2de11654c44890d4c8a5898f1804e1e410bb": "a53fe3b9bbf361f7173a66e9ef7b97b4",
".git/objects/5a/84e8768563f3af41774ab7ece53fc10fa27c48": "9322b13f6f9044fda7b4fe46b4f359fe",
".git/objects/5b/0bff65cf0742f3ce3de4a2ae4b62d571b2c1b5": "48ac6c013ad3ef2acc08fc45e9a573de",
".git/objects/5b/274aa31c832f1948292ad13abb9b2c72d07486": "e7d94c4f9b0b937b8267ccb87b2a50a1",
".git/objects/5b/2cac1f036c9c1955f0fe9d980e35039298d320": "eaf14940d3f7269f5e965a59761899a2",
".git/objects/5d/133a6e7774384cb53f1ecbea2c6d101597ede9": "bcf47465070e94dfc07d31645dd1e50a",
".git/objects/5d/5aefb92a0419d8d5a5127771758e5a2ae9d3a1": "2a7c9d8cb38229e045027e2aae6ee1f3",
".git/objects/5d/d9fc3dd9e0ec3ccadb39026fe93bb3a37398b7": "1543b1b3dba9f07729b5a10bada3dae0",
".git/objects/5f/3f270369c9f301ed56e31627c0814aad05edbf": "e4641e84229f78ce9aec61f0de4b9700",
".git/objects/5f/bf1f5ee49ba64ffa8e24e19c0231e22add1631": "f19d414bb2afb15ab9eb762fd11311d6",
".git/objects/63/9bf7d145b2a12dcb80d59b0d350b0e9c0e6830": "6490294a50e32e83deecc890c8d1f7b1",
".git/objects/63/b6f3f9e887a50850c8f7773d6db33126cf6d68": "0128bd4d3179fa0c25358e7711d5bb96",
".git/objects/64/5116c20530a7bd227658a3c51e004a3f0aefab": "f10b5403684ce7848d8165b3d1d5bbbe",
".git/objects/65/3f9f2bdc8a7e6e3728f68b0cead3c585b9958a": "0679b47aca73df79e57d111ad72bf567",
".git/objects/65/ff1e2cf8d998882dae395a3b5f3dea15e9cd3d": "4bc06ed001ac878a877cd48f9afd1a6d",
".git/objects/66/3622c4588a350646bdbf58992ffd6ea34a5bfb": "3221acc1a0630258f471e9594825fa27",
".git/objects/66/4130774cef12cae257cdfe2fb642d5dc85da5d": "aec95ee6c70b7df1662e1bef9f66e7c9",
".git/objects/66/48e632b363b434d79a94e95c60b0e78e1afbc8": "4ebd282741882d9da26f932c80b17f66",
".git/objects/66/732f0952c9472ec25fc57818554e559c29ccd4": "a1a75ff6b97fdfa8c0fbfed69ffa7481",
".git/objects/66/7cce21c306ca5aa58924303297c65cd053de1f": "d4904b445461cfdf06566093dc04377b",
".git/objects/6b/0dc65dba56a8854c862a3868704f4ab553f0f9": "0dd23047ded9310e5db4cca57e4af083",
".git/objects/6b/7162b643ae65866d042a71c985af59dbad1eec": "4ebfb66b1e5e827561ecb88e0e0d8464",
".git/objects/6b/9862a1351012dc0f337c9ee5067ed3dbfbb439": "85896cd5fba127825eb58df13dfac82b",
".git/objects/6e/d96d3964633c18606f38859e5cab6974257528": "03396f0e8be726ef3b6909c0b887a155",
".git/objects/6f/884b14c4d02c9f6499e1c3620e8a87a1c99583": "fd199e32011db22cb956625b0f1ace3f",
".git/objects/70/01f52ad6578c87067e549053b52495d4dfe130": "06c47fdefc0db6c7b8cd58c25e98e3ec",
".git/objects/71/daeb731a2fa91798c9e6e6a48f5c1f8126a349": "8e765b1c59995837facf9441b195a840",
".git/objects/75/25b80c4c66eb310d35f606c787088f9be396c6": "41112106a4b9f26ee86a6321c37fa24e",
".git/objects/75/8a1c653ac804821a4882e6fa832da7c98b3402": "ec57a90f08d76b434d7639f3f29754f4",
".git/objects/78/005f86dccace652a2669988857ffb919b5af32": "e2fc85326e197c4d844bb7acfe825788",
".git/objects/78/724c6de0756570438570b4f7184aba28b378d4": "9cf574eda1792b187b0a378fce4fd29c",
".git/objects/78/b71bdd89a64d9ec62a14b80f40f69ba19bba96": "cff0976fb16864e57fd36995ec96b950",
".git/objects/79/01e356c051d05fba5983b82318c646591349e2": "0db26bf991743c0037e0535771de5932",
".git/objects/79/438698aaa81d3ca86e57da966b488c4811e887": "b10dcca830ec18350021f6f9c73af2c4",
".git/objects/7b/5ea16b6f8a4dfe86fa368cedfdbfb0232753a4": "2cc7b23efab845f3c7935eee8af6d878",
".git/objects/7c/638d3eadd39fd54cb29dfd19a147c30c932287": "841bed4a4c203fbc0db84d57e01206f8",
".git/objects/7d/99ea7d95cd7eb6c8b64411fc2aaa6c13877688": "862e66cbf02be9f54b70c04e533b71dc",
".git/objects/7e/3bb2f8ce7ae5b69e9f32c1481a06f16ebcfe71": "4ac6c0fcf7071bf9fc9c013172f9996f",
".git/objects/7e/889148637c1c11af92f15d6eff0bbc268fd49f": "0f8d39d35b96999bf76091b71484cf6a",
".git/objects/7e/89bc162276e3872d55ca5dbd83ba4a2ba5788b": "45fb5d3b222dd5bef7747631db80c026",
".git/objects/80/1258e34f3baf023b65fd3debacce0235b19fc0": "be366005ddbf3d5d858830504115e88d",
".git/objects/82/346a8fe50440c43f5223a15658a1295a7cccf6": "c71cad5de7b5a98dfda6d4bbf3a0563d",
".git/objects/84/49feb6cf75488ecef997173aea0ff11d63aa23": "9694b9032a73bc887a46d15623f5a5ae",
".git/objects/85/0e20fa812be10992e957beb2a90bc513a2c2ff": "57bce216d30df2d3d244e4ce99d061d5",
".git/objects/87/62cca0f93afef328afc7ebe61956c302d485b5": "327d4cc356d4560fa404d02cb02918f8",
".git/objects/88/138532b39441bec3428a633acc16b9cf87728e": "d29c0ff611fb63936e593f09c86b358b",
".git/objects/88/ab9b3fd3ffc25ce635a015429737aa805ce87c": "ce0395584f0df21142dba0c16d51339e",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/51a9b155d31c44b148d7e287fc2872e0cafd42": "9f785032380d7569e69b3d17172f64e8",
".git/objects/8a/85fc417c6f0f15b5b51f5a42b1d55810d2f899": "1ab7643a727b38822a262e9376b8190e",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8b/1410bba0c88e186798a76569a3476bc52d3122": "54be18de0f0726609c66f52e05e6374c",
".git/objects/8c/718fca54bbef9cff8588b2bcf14b1fa63c1028": "8fd4ebae4ccb0980ce0b29be434005ef",
".git/objects/8c/8295bc785e6ea4e952319954e82b6d87e8a82a": "599d30e6cadb2c4f50dcd43aa68e64cf",
".git/objects/8d/17d83a895a633ea06825cf01fe04b8cc2a7518": "f6c57fb32d182f81a6c73da0ea82dd83",
".git/objects/8e/f494486aa92c4a5090a072d68b98aed1b469c5": "3a205010fbf33f2ab753f20c0f342401",
".git/objects/91/4a40ccb508c126fa995820d01ea15c69bb95f7": "8963a99a625c47f6cd41ba314ebd2488",
".git/objects/93/9dab67e2364fa0e2b540c18cd9c9285844ae84": "3eb568ec6bfdd9a8d9516aba71e2cbac",
".git/objects/95/55f9a89fe308f749881fd6209cf3fa76130fa4": "8707be9135ae07bcf019157c612197f0",
".git/objects/97/5c34ceaf018cc1028f9267bf63967d934f212f": "d11eb8aae3de775ad988a22507fa88c0",
".git/objects/99/0ccafea5b814ab26f90df59fa7c41a0d8f646e": "0f601f174334f6f47786b11ce7c7b7bf",
".git/objects/99/65d4e98b47b993f91e821b7cae424d44b2e512": "57586b6299009f6224c43719a8533a24",
".git/objects/9b/2559d36728b01aad58fe1cfd1219587cd48d4e": "0d14f89c9e2b92e34b3c38b53d23c599",
".git/objects/9b/5095790487f12873078a2a6f314aa9e02366c7": "68294b95d27fe3d7fb7f970ca061640e",
".git/objects/9c/12aba4fd9d82b44f8b7728499c205d302e0162": "a8dfcd97b17ea58a5af6e2005ebc384d",
".git/objects/9d/7cf220f98402e6908795046cd3c124886fc54a": "2fe461ce38db262ea17658f27acd3579",
".git/objects/9d/9f50bece7ca1687c4097b18e763c85f84e76d2": "ba1c9687b3bff29641935e6597240b37",
".git/objects/9f/26f922e4a3aac76d22ce5ea2cf3970b2933a5e": "ae0c357cc8b69f9406b8aed93ee8ca38",
".git/objects/a4/fd3b73908335266f386e0008cc14374934e600": "1a4f22d5711c07d64eaea03fc979ed99",
".git/objects/a5/de584f4d25ef8aace1c5a0c190c3b31639895b": "9fbbb0db1824af504c56e5d959e1cdff",
".git/objects/a7/4c26a41beae136568963d6e8d99cf7fd6080af": "c5f44c22bee66a797156ef7a11d2ed74",
".git/objects/a8/8c9340e408fca6e68e2d6cd8363dccc2bd8642": "11e9d76ebfeb0c92c8dff256819c0796",
".git/objects/aa/178b0e8359c572a44637d7c33080323401a9f6": "94632ee2456ee98dd3d976ee2e67bcfa",
".git/objects/aa/98c947e38dbacf4b9d0c576f4e8ac696d9123d": "10638dcd08797611da0c31f919721c0b",
".git/objects/ab/106688acd3c0d4d3725d3646c511f757bd8735": "d7ea24b8d89f67f9af82c75685e85776",
".git/objects/ad/3feb9581370107845474160ca1b6b941fbfc62": "5272781e73ee789da21ed205f6867d4a",
".git/objects/ad/48bd0e9c4f33da23e221931298d1f7f9bec873": "17e319e24bdf9de9d1acfbccd347f294",
".git/objects/ad/8a2ba9b09ce1bee0375c22c21c0fb84625cd1f": "fb8beeb44a2a7503dcccd1ab711e1939",
".git/objects/ae/e69aff6fa86f4946dfe14eae68e2d2fb29478e": "e44ac475f4b289e913f0af3dce1e34bd",
".git/objects/b0/1baa7f5a3e308b8cc9439ecf95890bfb2c3544": "a9919fed956e6ce0bbf0177be1e75424",
".git/objects/b0/57d4e36a058bbbdac32cb3c2b5c366ef1060b3": "6ce8dc9b7d7cf7b54a7344bcefa1812b",
".git/objects/b0/b10322be871139ca41ce6d49f5f924d25f9ef2": "9ad2e60b5413d492df2d5138fbb22d1a",
".git/objects/b1/194972e09cbaaf02efe5a1a2f9520017c2e982": "c875a1c32ff9802bc57a428913272088",
".git/objects/b4/1f84d36d11c4961f18bac543e2565302682e2f": "d9ecb93030fbd590175c4a8536f1b899",
".git/objects/b6/089ef6cf24f1affb617bf126ccc20f59e177e3": "bb20e1527a7c4ff228a00ce3670d8577",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/14da7bb2b8aab5567416b7b1de994cf6a6bdb4": "4150d852b737a92b25fff904225facd1",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/b9/a65b79dd0e9aee7de2d118f189849a34d8c0eb": "ef7e758d77618d34a028a451196acc8b",
".git/objects/b9/b9e88f04ca0e9993ba01fa8e396fb63d3654dd": "4466bf7c6d5684075b932b4f18256f9e",
".git/objects/bc/8f8b5099c6a7c056c7d01ca2681ca7bcf3eabd": "90d1f5069218cc4ea07378c4210d8f0a",
".git/objects/bd/4cb4a7bbd89458e68fd512ff4d898b2057b383": "3672ec0a1d917451f60a9eb9533cac59",
".git/objects/be/1035fa70a145413e8e507e838fecd4259976c8": "053695f63aba8ffaf7f9e841cada3449",
".git/objects/be/67159482fb025b646fff6c13aea0090fa81082": "792efeb973c07697eecc1afaa4dd2b2d",
".git/objects/bf/9ee08d0f3d52aa8800e2be4027247763b4be93": "e9431a80bfd2c1d3ccff828e66e2a2bc",
".git/objects/c5/f126ed7ab31c24112967b0edb8706f1fdd7aa7": "0550c50f2edc6aba469f00f7162ad4e9",
".git/objects/c6/432acbc31340bb2723538d2e423be67edaf3c7": "eefe65e3883473061b350df06e060bf8",
".git/objects/c6/51ab0206f0b85ab49aacb75c491b4dd47b2ac0": "2306fca982b25e3a69138141973ead6c",
".git/objects/c6/b1d5fc8972f3ec53011263f662f906159e6876": "d89b750efcb126a797e16296ed5c6de4",
".git/objects/c9/03158702cbb878840b5cf06df915e21d741979": "1f57baae4131df39c2266ac048c92887",
".git/objects/c9/4a39209db8529a41914943970379f3017874b2": "f9d33ec1c037d6d0a36e75aa60f95d7c",
".git/objects/cb/98868eb6e08bd0a71f6fd81ae5978fad77192f": "d94e3d12e7878b2a979342b270245153",
".git/objects/cb/98e1dcfd034ef0ca128b9c9df96e4651a0e996": "2beb619af59590135fff83abd4da77cf",
".git/objects/cd/a61f2a6f71abfa92f2d806bb807933a9c12864": "e553106cccd11ab8109880fc96c38bb1",
".git/objects/d1/01ddda841cf92b2e388a476e885577f517bed4": "5374ef2e7188ddae5a37a3f9fdedae80",
".git/objects/d3/5701925e2327afc0de090b79f0ecef2eef80da": "d4a80fec77acdeeb8928ffaf933fbc50",
".git/objects/d3/8516973c089dc3364259397b4974b9c376187a": "eeeeb54ec6c1139835fe33b836bb046a",
".git/objects/d3/c93cc7114d99d89b5f51a45d9b2026daff37d6": "65b428cf572ab9dc26badbd5eb4abf7c",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d5/05238ab0c2cd2342b076c929b74cf67493f492": "e1cecaab8453aaff87963debae526880",
".git/objects/d5/2bd2457e4ba1e55269db9e0ad03362067919af": "7c9855aacd129ed1d1f0e519b4ef2f76",
".git/objects/d5/b74d262b7169a5fb8e41436f0036b2a681458b": "57ccecfed9cad3a762c43df86e4c0860",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d7/a6279d95efe80c5b22d941e4df28443eed844c": "b5c025a7d209c6c147784936a767e6f7",
".git/objects/d8/5c5fd8ea14c7e0d0cab037b7e32199d41f94cd": "558eb091a679751715ed9ce35b914b88",
".git/objects/d8/90b2b9d6c129b65617d97917a1657f083ad73e": "17bba0f17af49d828566dd62f9853034",
".git/objects/d8/f566b03eae052344d4e342a5906017a5c4bd9e": "ac353b4550f16e682d09bcf0c5a35fa9",
".git/objects/d9/3952e90f26e65356f31c60fc394efb26313167": "1401847c6f090e48e83740a00be1c303",
".git/objects/d9/703cf7f8abb095a1777e3b88b6968e13b26311": "08494ee8d06be882fd144be94db5b7b9",
".git/objects/da/4aadcd3df71718424b284eae13c678b2ed4c92": "8bf2da01a112267922bf1f99a3416029",
".git/objects/da/6d0a92a3363a10115fea30789c89711284ae60": "f8a2049080d5444def1d8a594264ccc4",
".git/objects/db/0e78eddbd28864825686c0dba24c1b20d05c36": "8c994bfcfa2b1c2247f0db1dcc45c902",
".git/objects/dc/53474c19835f2d12ac8ec29002c04d33bebc39": "efb7397237942e6c8261815dea3b1731",
".git/objects/dd/48cfb9d1e95fddd50083e76dd2c1e47bc5d394": "c95986b60b82d534255f2f607554b3d8",
".git/objects/dd/721687c7f61c6c0e2f68af461697cd3fa81f2b": "d12ea3781780756f79fd581ee6d99ea8",
".git/objects/dd/8bb74c93978a91e234defee087acd8da9502d4": "1a1f33581f0ee9a7ff2470e5c23337ba",
".git/objects/df/c182539f23c169169109a020721b3d27e06552": "b785dd1e99797c3f6cbd38eeccf502ad",
".git/objects/df/f8bc250bdce2ef022422b1280096d02aa39390": "4276b993a0e64ec4993525ec254f813b",
".git/objects/e3/2281cc29b5f46938d7e72fbcf33bcb67b6ce29": "108f839e855d0b9db892c7e8da165e73",
".git/objects/e3/9c243bda63f22f6d5b7bf22bda8f55ab7fc8b0": "4a5e8cace0586e7d868a824b0b879e2a",
".git/objects/e5/d8645fc7f8d5f6c3c3256cb2ef9974ef9c75e0": "cc978f5bdd7719ba644f613d2af6dbc5",
".git/objects/e6/57aa8cc8a730c8b39f8c00b541aa8c75c7ed8a": "8967149d0e9299369f462685e58699ff",
".git/objects/e7/55a039dbbff4704b98c128a6ead0bded9485b1": "b6fd0484626d428db6f315b347a6d226",
".git/objects/e8/5fb84756976ce779cb3c7d21285338a0ee38a9": "b359f7702557b9d4d745a993a1840597",
".git/objects/e9/94225c71c957162e2dcc06abe8295e482f93a2": "2eed33506ed70a5848a0b06f5b754f2c",
".git/objects/eb/261d22b5a58cfb92786ff9c64961d90708a950": "98e09159ffb8cf9fc78ff4204aa12eab",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ed/deb721a45eb4d96cf7d532dcdf021260c9f2aa": "797b9681ff59264f332242ce88aec1da",
".git/objects/ef/b875788e4094f6091d9caa43e35c77640aaf21": "27e32738aea45acd66b98d36fc9fc9e0",
".git/objects/ef/ff80567b965a3de23b068983f41be6a6e35f0e": "0f5b0f38971322e051aec1c7df67909e",
".git/objects/f0/65462b57571d244a92dc37ff5933937dcd48d7": "0197c3ed2c54e597ccc665ef73c2a220",
".git/objects/f1/448a5ca251a733b6120598c46dab3283305914": "4fed4c4f01176ed342ef47ea6712df06",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f3/709a83aedf1f03d6e04459831b12355a9b9ef1": "538d2edfa707ca92ed0b867d6c3903d1",
".git/objects/f5/72b90ef57ee79b82dd846c6871359a7cb10404": "e68f5265f0bb82d792ff536dcb99d803",
".git/objects/f9/19bd9787ffc6532ded9f5c03c3636c5a6e848b": "2c345b319440a6038e06f97b0af97ea0",
".git/objects/f9/ac99ece7132fb8a7085f9ce809576adae32afc": "690ae544e2b0dbc2a71bae4b156f036d",
".git/objects/f9/e69a1014b80657b4e180bc3aa35f105e887158": "bfa4dbdfe8b5fa646ae796bc45911539",
".git/objects/fa/e8ca71e1401b804eeac88728d05c89bae71599": "c16f6dc7bbc3c6e045f1bed5f00948fe",
".git/objects/fb/87d5567a4994b9c4b2bda4d77b62ab667a0569": "0d60fd190a0abcb659b0046f5f855d16",
".git/objects/fb/c4583333a43fb7fa46be28c379b970a9ffe50b": "4c5e9b97e1f36b5841c69540a65ca789",
".git/objects/fc/2e1a831817336e29bc24a3c1d165466e6f1730": "5e0e0b79cfb7486c33e2e37e79f249f4",
".git/objects/fd/8c92d5f8c805d4bf09e73c69c9ce65b9d32916": "7273b8be7404aa56bf1dcca08ca74db0",
".git/objects/fe/5bf95a350c8c59878745f37b4a5ff046d9ac6a": "2cb8777319c87a23ef3c981ad24a6b94",
".git/objects/ff/1ae3ec33de2fec7b42be6d482a045c1d3bf996": "5927251ed234ab1edb36ff2da4628c62",
".git/objects/ff/54842b002dba517a4f69202384e00bc8025e67": "7677767da9f59d7909163752b099cd35",
".git/objects/pack/pack-d241941e947f3a769bc8ca7590ca8943c3e2a01b.idx": "ff03e48676be794bb3c8f7a5b88c87f5",
".git/objects/pack/pack-d241941e947f3a769bc8ca7590ca8943c3e2a01b.pack": "60e369782ed28f4d950a36a483088d47",
".git/objects/pack/pack-d241941e947f3a769bc8ca7590ca8943c3e2a01b.rev": "8558248aa1dfe58e6477c08705366961",
".git/ORIG_HEAD": "23cbc25196ad77cfacc8f11e58ac99e6",
".git/refs/heads/master": "bbcd820773e6c91cc75c54b6ca90d2a2",
".git/refs/remotes/origin/master": "bbcd820773e6c91cc75c54b6ca90d2a2",
"assets/AssetManifest.bin": "610b1833984e6945b5291d7eff3a0618",
"assets/AssetManifest.bin.json": "c7315ef984b4578661fefe7efeeae5ef",
"assets/AssetManifest.json": "b12a61a409aa956c19a278a474f7aacf",
"assets/assets/fonts/KulimPark-Regular.ttf": "3efa2c26f11ff766630b89394c98d62c",
"assets/assets/fonts/Roboto-Bold.ttf": "8c9110ec6a1737b15a5611dc810b0f92",
"assets/assets/fonts/Roboto-Regular.ttf": "303c6d9e16168364d3bc5b7f766cfff4",
"assets/assets/icons/analytics.png": "fde74a1f57f4382449cd28d32ead21ff",
"assets/assets/icons/data.png": "4741211c3d38baab9724a8e882382b46",
"assets/assets/icons/payroll.png": "ed7202e20b82c889f9bfbf6861765fea",
"assets/assets/icons/processautomation.png": "abaa3b17e9b65ac929fa65e9d72ebaf8",
"assets/assets/icons/security.png": "d000f6b53b457c9b9249ac1657181374",
"assets/assets/icons/training.png": "bbbac7dc37ebd05a293010e416748e1a",
"assets/assets/icons/usersupports.png": "c1d1c88a9be3a8ca82d783dfc70df61c",
"assets/assets/images/admin.png": "08225dd6d7847db398bad1f9bbd75728",
"assets/assets/images/ageing-well.jpeg": "06b0d7b874a722ec3ef1fa165a20d87d",
"assets/assets/images/appbarbg.jpg": "cf473edf288c917aa52f5b11d99c5b53",
"assets/assets/images/appbarbg2.jpg": "8c6e84c3636e8e36ce97a41720043e0a",
"assets/assets/images/appbarbg3.jpg": "0d58feb4bb06df93fc9cdc3901b5d115",
"assets/assets/images/appbarbg4.jpg": "e20589f87e24431f8058460e8a52d4a6",
"assets/assets/images/arrorok.gif": "eb406d6f9030f4a030216919dae60a27",
"assets/assets/images/arrow.png": "616f15d7ef8a3496e66cc3f2cc292a21",
"assets/assets/images/award1.jpg": "7bdf786d1360a410b44ad284ca496e25",
"assets/assets/images/award2.jpg": "fab5cd300660ab964647d47e141e9f64",
"assets/assets/images/award3.jpg": "2164d4f1cb2b7fec69be5138a6ee8342",
"assets/assets/images/award4.jpg": "3f5d045d6a41341ebc557390c15a393f",
"assets/assets/images/azadi.png": "c948028ce3dd1e00471647fbd2fb0371",
"assets/assets/images/banner1.jpg": "a864545502b36e70a45ca1c68ca58eb8",
"assets/assets/images/banner1ok.jpg": "1491536f43c13671ff82d924bc5eb104",
"assets/assets/images/banner2.jpg": "cfa1e6a0846d60e15a066018a7c5b51a",
"assets/assets/images/banner2ok.jpg": "5315df626f75b948be012bc5c378b0f8",
"assets/assets/images/banner3.jpg": "a22c9fcef0e65415b368248e939b2309",
"assets/assets/images/banner3ok.jpg": "d0290ab0c1bb04dc2c835454b3c80dbf",
"assets/assets/images/banner4.jpg": "928ae9ad444c2c6abcf6d306d98b42ad",
"assets/assets/images/banner4ok.jpg": "c6bb469507bc05bc5f382414dc1f191b",
"assets/assets/images/bghome2.png": "5cad362596eb59265a55af65a5323fbf",
"assets/assets/images/digital.png": "a5f3736deeff9f2f549b9a3405726f39",
"assets/assets/images/dmis.jpg": "15166b941d6fea7f2416875efc93bac1",
"assets/assets/images/emp1ok.png": "9e9b46d1bdac2ce376ef54df0be46c1a",
"assets/assets/images/emp2ok.png": "727d357f83506e83c0f33f5f76fecb6a",
"assets/assets/images/emp3ok.png": "99214dafeb771df8e6ba266cf5f69d3c",
"assets/assets/images/emp4ok.png": "38a8d48d605e37ec017d1e669cda35a5",
"assets/assets/images/emp5ok.png": "760398b79cb43bec895e8571ccd43c16",
"assets/assets/images/emp6.png": "6d92f7a40f6db907f9dc9b74313ec1cd",
"assets/assets/images/employeedata.jpg": "f5d400ceea8aa75c4a80ac21176b4779",
"assets/assets/images/finalmislogo.png": "eea410eec1a212a93a5b99dd180b499d",
"assets/assets/images/health-regulations.jpg": "e1c6dbc04d9a8dde236a43729e35efcd",
"assets/assets/images/Hero_infographic.png": "0284eb30001fad45410cf959ce721f73",
"assets/assets/images/homebg.png": "d2bd40c241b817c99c2956842bfadd2e",
"assets/assets/images/homebg2.png": "e118755ae8429a09e0804d4399fa494e",
"assets/assets/images/homebg3.png": "25468c61d40f294242e0b8ed5c866871",
"assets/assets/images/india-gov-logo.png": "5d3aed7e22bd5d50977f9caec2eb65a6",
"assets/assets/images/integration.jpg": "ea151eaa888e8c3b5b635e119f517bc8",
"assets/assets/images/integration.png": "4b892bbd6c3f46ba1955a0297f7fd468",
"assets/assets/images/kangla.png": "89604a640fdde40bbb0b4d815a55f8f1",
"assets/assets/images/kanglasa.png": "c0a2e48d9a92cff17f4d0de95011ff78",
"assets/assets/images/kanglasa2.png": "1e9fda34c02cc850cf48426498082f37",
"assets/assets/images/Kanglasha.png": "f363ccd20c9d10afd1c485b918c3e1f2",
"assets/assets/images/Kanglasha.svg": "fec66f84c1dcc298241b961c5338dfaa",
"assets/assets/images/landing.png": "5f12390769fcee601d2290644e0bebdb",
"assets/assets/images/loading.json": "d5fd3e38b8e596dc09aefec519c0a975",
"assets/assets/images/logo.png": "e2611cd7a04c0e4707980c48e6b66360",
"assets/assets/images/logo2.png": "e58dc19a58d65880eab105568cbf41df",
"assets/assets/images/logo3.png": "635bad2bd896d11943fd2052f7c2d22b",
"assets/assets/images/managing-expenses.jpg": "367dd2fb6978c88229b40ec863b1edf5",
"assets/assets/images/MIS-logo2.png": "aa596a42eafa9d3f81fb7f1dc0294992",
"assets/assets/images/mislogo.png": "283f2d3c0fed06d9feb09745dd1e0a09",
"assets/assets/images/mislogo2.png": "c49797a664bc41baa95501984e1d36bd",
"assets/assets/images/MyGov-logo.png": "82d0490cd709db119feabf312facd607",
"assets/assets/images/new.gif": "db3593499fc8996200f77aa108975dcb",
"assets/assets/images/nps.jpg": "fbbf1cbd599b99eba8aefda9281bd261",
"assets/assets/images/npspart.jpg": "44b21598259569453d5e93d99deb444c",
"assets/assets/images/officiating.jpg": "05d081cf1a23281ebb4b1c766c4c55b6",
"assets/assets/images/officiating.png": "0fb30434f0174207729f2ce1f78c2faa",
"assets/assets/images/OGPL_Logo.png": "abc0d3134007f94bd1c7e44f8f5228d1",
"assets/assets/images/payroll.jpg": "0724484a2b65b4fa9a9471a35df6c012",
"assets/assets/images/profile.jpg": "9270a9f53fe1d586b0b67014821357f3",
"assets/assets/images/sanction.jpg": "430e46271dc52241df421ece3101329c",
"assets/assets/images/sanction1.png": "ea5066032e7aa4d95221e5abb55b8149",
"assets/assets/images/sanction2.png": "ea5066032e7aa4d95221e5abb55b8149",
"assets/assets/images/sanction3.png": "d6e0b24aea6dd4887f2812be40c61049",
"assets/assets/images/sanctionpost.jpg": "87d9f32aa99f142eeebe60611ae72804",
"assets/assets/images/security.png": "49ad5e8db59caec69f0caff7d3ac5d8e",
"assets/assets/images/seeking-healthcare.jpg": "95227fe4f39dadd8ec64ccac1b59cfc5",
"assets/assets/images/staying-healthy.jpg": "69b9842afd2b2e2d1835fe05afdc5e92",
"assets/files/CMIS_OM.pdf": "36635c6f8ff9b36acd016be7f7911f25",
"assets/files/CMIS_OM_Check_List.pdf": "b5ceaeb32842ed4f9a34be3957d6151d",
"assets/files/CMIS_OM_General_Instructions.pdf": "c94f15e1c39c20d4322a88ea2273bc96",
"assets/files/Nodal_Officer_CPGRAMS_MIS.pdf": "953f9d2d4af4c6ef6077379f720a0162",
"assets/files/Order_for_constitution_of_ICC.pdf": "9979c035e2435421b65daa8daf804f63",
"assets/files/RTI_SPIO_&_ASPIO_Order.pdf": "1f7d6e6360a078c6ebfeecae82cc3c05",
"assets/files/SIN_OM_2013.pdf": "b4996132bfd821fc9f90987d41472dea",
"assets/FontManifest.json": "5cf663d8bb8f8e0e69ebaba0e16fed64",
"assets/fonts/MaterialIcons-Regular.otf": "5f68c967bad97871e623198c1e459252",
"assets/NOTICES": "99dbec733e96cbfda136f47063f34cd7",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "4769f3245a24c1fa9965f113ea85ec2a",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "2d404c99eac5bbbb9292d1966cb4afa0",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "408c87421f2fc47af01e5784f2975b47",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "1e8033ea0c8c804771c1836fd07acb49",
"canvaskit/canvaskit.js.symbols": "310951580eb657840fae86f76f653452",
"canvaskit/canvaskit.wasm": "efeeba7dcc952dae57870d4df3111fad",
"canvaskit/chromium/canvaskit.js": "10c40b740080c4eb9c1e074307482d39",
"canvaskit/chromium/canvaskit.js.symbols": "2bf18b9213f9fc9fb554c3890691f57c",
"canvaskit/chromium/canvaskit.wasm": "64a386c87532ae52ae041d18a32a3635",
"canvaskit/skwasm.js": "8cc11b1079ca8735f29263baafbf330a",
"canvaskit/skwasm.js.symbols": "2a35929fae90775f43ce38f8bab1697a",
"canvaskit/skwasm.wasm": "f0dfd99007f989368db17c9abeed5a49",
"canvaskit/skwasm_st.js": "9eeb36850f248a8e946442a13aaaa009",
"canvaskit/skwasm_st.js.symbols": "ca49a44a388ecfe66ba43dd851d2b76d",
"canvaskit/skwasm_st.wasm": "56c3973560dfcbf28ce47cebe40f3206",
"favicon.png": "41a53837f76ec3a41ec5af3ef1a7fde7",
"flutter.js": "76f08d47ff9f5715220992f993002504",
"flutter_bootstrap.js": "cd2a1adacd2a2d675604d019d73c0cdf",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "f9f6f4c012ace0d43d2280e58242d280",
"/": "f9f6f4c012ace0d43d2280e58242d280",
"main.dart.js": "0434361da9f2361eeed814eb6b6677f7",
"manifest.json": "4711af2278705729896304c56217fcc6",
"sw.js": "cfc14d6a0db5c829cfa2e57ae3a9e8af",
"version.json": "6060228bd16268a7d2dc67037711aade",
"web.rar": "9403fb2afdb1edd7b93858cf1f138f76"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
