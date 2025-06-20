'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "54850a53fa3140763234261cc9273f5c",
".git/config": "5cf00c284b09943789de5bdb05869d2c",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
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
".git/index": "c2ca57bbb578947adc3cb52eee933846",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "aed5bf4388d6ea605e5ff2f228e8457f",
".git/logs/refs/heads/master": "aed5bf4388d6ea605e5ff2f228e8457f",
".git/logs/refs/remotes/origin/master": "ab161f7633821398df1d1a2fc0b6aef4",
".git/objects/01/95920b40b16f32764ad36484287a320c4c97d6": "a30ce6d67d887e8515ae712c81e81db9",
".git/objects/02/e837f438ad46c3c172bd486dbb36d8f14b7a7b": "6ec0ec1ef4dd0592e0583b9d3d9840d6",
".git/objects/02/f07e1f007fc8de0732f0c5e4a7b5b0b0b1b14d": "48d288d25d3e82d15ec1aab8180c26f1",
".git/objects/03/2fe904174b32b7135766696dd37e9a95c1b4fd": "80ba3eb567ab1b2327a13096a62dd17e",
".git/objects/0c/c1082e70abafa45369bbcccf95005ccd345e27": "f808a9052db04b51f2b18fca655d4989",
".git/objects/0d/c053e65574ad012bb696f44fa8993ae04e7f05": "c7a42d740df2ee4e4861a5adef7508a0",
".git/objects/0f/47f981f4cfdbb996e0d78ebeb6cdad580b4892": "b7db7d1dff5c52d8b2353ea7be824b5f",
".git/objects/11/8fd4d252c71d3679d4d372e2bf1b00255f239a": "658baf57182c3ea4abd5eae55186850b",
".git/objects/13/79b7a9a196c70d8127d9e8977b24de73f7cc5f": "4528dfb189154c24ed0a6cf616350d32",
".git/objects/15/3742fa4a963e136460e913fdf309fa3bcfeedb": "13b3a9c54ab7a9e73ce77b9e389c8840",
".git/objects/16/5e736f202d62207558c37df1d664de6eda83c5": "d340032200bd13dae5f370f57855bbb2",
".git/objects/17/39c578c428714b5fb65bf9d46a87e7de0eb9cf": "b256ce4ec799934e484409b80fa08b15",
".git/objects/18/feb2db4fce14bc87db451a6f82315f36983072": "ab1b2fde54268ac09730607a96d99bd2",
".git/objects/1e/e471741f98cacc0c4cc05c52595b62aafd7f7a": "d6fcae764494f9ac854274a7f0cb0bee",
".git/objects/22/ff1b71f5d6d0c55f938f99c72c2a3b62f6dada": "2dfcc4c28cd1583b59efce115d3bf914",
".git/objects/27/4be8ce0d215ffdf13265308b9220db6c13b02b": "f1b11aabf4f54774c6a674cb9f07d853",
".git/objects/2b/7dc0eadde329aa3c3cb8ebc2823328c07f93ee": "cc004f90e8e180ec42260b8c248e3e10",
".git/objects/2d/bcdf6cb7f606d10dc615bf761166ae192eb06a": "e55173388ad70694e3c2e8e9dbea47be",
".git/objects/30/7bf632a107083aaf8386489d1c38ebc30af387": "69287e9e3865e907430a51b3b121950b",
".git/objects/31/b8c9c0390d1a0cec9da49ac81bcb374ed07541": "a42c8a45151f18a142c52386a77f900a",
".git/objects/33/31d9290f04df89cea3fb794306a371fcca1cd9": "e54527b2478950463abbc6b22442144e",
".git/objects/34/6aba68c5f278228d620533a4aec7e7b507f611": "98a1cde59a5d84ef057b5f950495d1f4",
".git/objects/35/96d08a5b8c249a9ff1eb36682aee2a23e61bac": "e931dda039902c600d4ba7d954ff090f",
".git/objects/38/f72c3b661274731c0dca4263c6147292c3313e": "06ec909689545717240ec77454003efe",
".git/objects/3d/1dabd72346512c9e7b1cc9bac78fea6159a803": "3ed25bb7f0e353c9c9104c326a58346f",
".git/objects/3d/795c5c4e48d5b19f61420549e45107e25b6ee6": "f399352adb9fc84af0e71d57fc90b217",
".git/objects/3d/e4ed46064ecd2931371e0a77edf1bda04d669c": "3358f0696ce147b5bf89d17311ae76a2",
".git/objects/40/1184f2840fcfb39ffde5f2f82fe5957c37d6fa": "1ea653b99fd29cd15fcc068857a1dbb2",
".git/objects/40/a685f2a329be648d0165db36a691a8b3f1b1d2": "62cd7b4e87b07e511b16c235fab50757",
".git/objects/45/d0613a3d374f093d8aec273faa67a38b8a8bfe": "d9c65d13ca316193fed83030cf6d169c",
".git/objects/48/660e793dabcfe9f90650c7d48e6f142935bf33": "8248909124464e56621c739d601a401a",
".git/objects/4f/02e9875cb698379e68a23ba5d25625e0e2e4bc": "254bc336602c9480c293f5f1c64bb4c7",
".git/objects/4f/7a4fc184c1485f83d43076ce683ada5fc526e6": "042c0cf50fa614b4a59c8852537f91df",
".git/objects/50/64e247d427da40edade1ae20cd87f392a03624": "b422e2577507a366d5e5d345ac4a1556",
".git/objects/57/7946daf6467a3f0a883583abfb8f1e57c86b54": "846aff8094feabe0db132052fd10f62a",
".git/objects/59/e674e7184080c729720615224db580309b7574": "b1c0364f57d11810b30978f7d3654ef5",
".git/objects/5a/13bd5a18e506d22647433b1980295ce67bcebe": "50b077c2b68b737800ac0d99a322b746",
".git/objects/5b/274aa31c832f1948292ad13abb9b2c72d07486": "e7d94c4f9b0b937b8267ccb87b2a50a1",
".git/objects/5c/9a904564c7760c0fd88203a1f6e8f6d2ceed4e": "85d9424845e5da828e0e51572c05299b",
".git/objects/5d/133a6e7774384cb53f1ecbea2c6d101597ede9": "bcf47465070e94dfc07d31645dd1e50a",
".git/objects/5d/d9fc3dd9e0ec3ccadb39026fe93bb3a37398b7": "1543b1b3dba9f07729b5a10bada3dae0",
".git/objects/5f/bf1f5ee49ba64ffa8e24e19c0231e22add1631": "f19d414bb2afb15ab9eb762fd11311d6",
".git/objects/63/b6f3f9e887a50850c8f7773d6db33126cf6d68": "0128bd4d3179fa0c25358e7711d5bb96",
".git/objects/64/5116c20530a7bd227658a3c51e004a3f0aefab": "f10b5403684ce7848d8165b3d1d5bbbe",
".git/objects/65/3f9f2bdc8a7e6e3728f68b0cead3c585b9958a": "0679b47aca73df79e57d111ad72bf567",
".git/objects/66/06d10ae27a05d982d9b25a8f9dd8af0acee073": "860d41978ebe573c6921cba56c63f3f6",
".git/objects/66/48e632b363b434d79a94e95c60b0e78e1afbc8": "4ebd282741882d9da26f932c80b17f66",
".git/objects/66/7cce21c306ca5aa58924303297c65cd053de1f": "d4904b445461cfdf06566093dc04377b",
".git/objects/6a/5ea2c01d172a8fc2e9be1b8f2c102bbc646e96": "57e4b5249a7206eff5100d465e89a950",
".git/objects/6b/0dc65dba56a8854c862a3868704f4ab553f0f9": "0dd23047ded9310e5db4cca57e4af083",
".git/objects/6b/9862a1351012dc0f337c9ee5067ed3dbfbb439": "85896cd5fba127825eb58df13dfac82b",
".git/objects/72/3459257bb0f393fa6838089c19da87faadcaeb": "16bb22a4ce4e7f285215ddbf66ccbd85",
".git/objects/75/7e32da986db5ddc5772316f8bbb7763ae382cd": "3af9397d29b8cd99a4ad19e41faaaf5c",
".git/objects/79/438698aaa81d3ca86e57da966b488c4811e887": "b10dcca830ec18350021f6f9c73af2c4",
".git/objects/7b/5ea16b6f8a4dfe86fa368cedfdbfb0232753a4": "2cc7b23efab845f3c7935eee8af6d878",
".git/objects/7c/638d3eadd39fd54cb29dfd19a147c30c932287": "841bed4a4c203fbc0db84d57e01206f8",
".git/objects/7d/44e213ae6bfd474b4cd5d909f9c62c4bbb2608": "ecaef0c20874841cf9b667ec28078ecb",
".git/objects/7e/3bb2f8ce7ae5b69e9f32c1481a06f16ebcfe71": "4ac6c0fcf7071bf9fc9c013172f9996f",
".git/objects/80/51d0333f03520ec38b469fa7839594608d9b52": "d9f36ff46536cc44c21ad997f97c8794",
".git/objects/81/b4e6d05f15f5f59690790ff285389aa34e8595": "2f6df552b88c16e3bef43b8eaf1d2608",
".git/objects/85/f6542ae07b45acabdea14e78bb811a2b57a786": "76841d8cb6c24b53713d3a4745cfa882",
".git/objects/87/62cca0f93afef328afc7ebe61956c302d485b5": "327d4cc356d4560fa404d02cb02918f8",
".git/objects/88/ab9b3fd3ffc25ce635a015429737aa805ce87c": "ce0395584f0df21142dba0c16d51339e",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/51a9b155d31c44b148d7e287fc2872e0cafd42": "9f785032380d7569e69b3d17172f64e8",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8b/1410bba0c88e186798a76569a3476bc52d3122": "54be18de0f0726609c66f52e05e6374c",
".git/objects/8c/718fca54bbef9cff8588b2bcf14b1fa63c1028": "8fd4ebae4ccb0980ce0b29be434005ef",
".git/objects/8c/8295bc785e6ea4e952319954e82b6d87e8a82a": "599d30e6cadb2c4f50dcd43aa68e64cf",
".git/objects/8d/17d83a895a633ea06825cf01fe04b8cc2a7518": "f6c57fb32d182f81a6c73da0ea82dd83",
".git/objects/91/4a40ccb508c126fa995820d01ea15c69bb95f7": "8963a99a625c47f6cd41ba314ebd2488",
".git/objects/93/9dab67e2364fa0e2b540c18cd9c9285844ae84": "3eb568ec6bfdd9a8d9516aba71e2cbac",
".git/objects/97/5c34ceaf018cc1028f9267bf63967d934f212f": "d11eb8aae3de775ad988a22507fa88c0",
".git/objects/9b/5095790487f12873078a2a6f314aa9e02366c7": "68294b95d27fe3d7fb7f970ca061640e",
".git/objects/9c/12aba4fd9d82b44f8b7728499c205d302e0162": "a8dfcd97b17ea58a5af6e2005ebc384d",
".git/objects/9d/7cf220f98402e6908795046cd3c124886fc54a": "2fe461ce38db262ea17658f27acd3579",
".git/objects/9f/26f922e4a3aac76d22ce5ea2cf3970b2933a5e": "ae0c357cc8b69f9406b8aed93ee8ca38",
".git/objects/a5/de584f4d25ef8aace1c5a0c190c3b31639895b": "9fbbb0db1824af504c56e5d959e1cdff",
".git/objects/a8/8c9340e408fca6e68e2d6cd8363dccc2bd8642": "11e9d76ebfeb0c92c8dff256819c0796",
".git/objects/aa/178b0e8359c572a44637d7c33080323401a9f6": "94632ee2456ee98dd3d976ee2e67bcfa",
".git/objects/aa/98c947e38dbacf4b9d0c576f4e8ac696d9123d": "10638dcd08797611da0c31f919721c0b",
".git/objects/ad/8a2ba9b09ce1bee0375c22c21c0fb84625cd1f": "fb8beeb44a2a7503dcccd1ab711e1939",
".git/objects/b0/57d4e36a058bbbdac32cb3c2b5c366ef1060b3": "6ce8dc9b7d7cf7b54a7344bcefa1812b",
".git/objects/b6/089ef6cf24f1affb617bf126ccc20f59e177e3": "bb20e1527a7c4ff228a00ce3670d8577",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/bc/787f15374b041e9e2a3032efc70757868393b6": "a15c724272bc8dac4a77c69b86806118",
".git/objects/be/67159482fb025b646fff6c13aea0090fa81082": "792efeb973c07697eecc1afaa4dd2b2d",
".git/objects/bf/9ee08d0f3d52aa8800e2be4027247763b4be93": "e9431a80bfd2c1d3ccff828e66e2a2bc",
".git/objects/c0/33b06eaba584d59892d0e9e4319a118cef0168": "811e069fa2d40b351984379b4044664c",
".git/objects/c6/432acbc31340bb2723538d2e423be67edaf3c7": "eefe65e3883473061b350df06e060bf8",
".git/objects/c9/03158702cbb878840b5cf06df915e21d741979": "1f57baae4131df39c2266ac048c92887",
".git/objects/d0/744f938761fc5ff3c9d1ed622c2d927056972d": "dbce4fa6b83859123e6b7d62d667fbd2",
".git/objects/d1/01ddda841cf92b2e388a476e885577f517bed4": "5374ef2e7188ddae5a37a3f9fdedae80",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d5/b74d262b7169a5fb8e41436f0036b2a681458b": "57ccecfed9cad3a762c43df86e4c0860",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d8/31d7b8e2c70a7a20c646b4fa314ab67b73c84c": "a4fd72ea33ae0b2c5579d64ca9f71af3",
".git/objects/d8/f566b03eae052344d4e342a5906017a5c4bd9e": "ac353b4550f16e682d09bcf0c5a35fa9",
".git/objects/d9/3952e90f26e65356f31c60fc394efb26313167": "1401847c6f090e48e83740a00be1c303",
".git/objects/d9/703cf7f8abb095a1777e3b88b6968e13b26311": "08494ee8d06be882fd144be94db5b7b9",
".git/objects/db/0e78eddbd28864825686c0dba24c1b20d05c36": "8c994bfcfa2b1c2247f0db1dcc45c902",
".git/objects/dc/53474c19835f2d12ac8ec29002c04d33bebc39": "efb7397237942e6c8261815dea3b1731",
".git/objects/dd/721687c7f61c6c0e2f68af461697cd3fa81f2b": "d12ea3781780756f79fd581ee6d99ea8",
".git/objects/df/c182539f23c169169109a020721b3d27e06552": "b785dd1e99797c3f6cbd38eeccf502ad",
".git/objects/df/f8bc250bdce2ef022422b1280096d02aa39390": "4276b993a0e64ec4993525ec254f813b",
".git/objects/e5/d8645fc7f8d5f6c3c3256cb2ef9974ef9c75e0": "cc978f5bdd7719ba644f613d2af6dbc5",
".git/objects/e6/f7c1a36d0b0ec002dc0b31c7f10752ee776b78": "297a8604947424861bec51a8808bc94d",
".git/objects/e7/55a039dbbff4704b98c128a6ead0bded9485b1": "b6fd0484626d428db6f315b347a6d226",
".git/objects/e8/5fb84756976ce779cb3c7d21285338a0ee38a9": "b359f7702557b9d4d745a993a1840597",
".git/objects/e9/541a4177c61d6b51920bd72d6dc0617c642ae9": "4de6233f5ec15d3d6acc402677eaa226",
".git/objects/e9/94225c71c957162e2dcc06abe8295e482f93a2": "2eed33506ed70a5848a0b06f5b754f2c",
".git/objects/eb/261d22b5a58cfb92786ff9c64961d90708a950": "98e09159ffb8cf9fc78ff4204aa12eab",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/eb/f8e4edc9798b725d2a63ae23ad124fe6451b53": "acdcab1180388f5d1131e2e316b4d3d9",
".git/objects/ec/eb0795e2ce13d26324a4bc3934e4d6e9cc8ab3": "6b7befaf2e95e61f1d31d804393a827a",
".git/objects/ef/b875788e4094f6091d9caa43e35c77640aaf21": "27e32738aea45acd66b98d36fc9fc9e0",
".git/objects/f0/65462b57571d244a92dc37ff5933937dcd48d7": "0197c3ed2c54e597ccc665ef73c2a220",
".git/objects/f1/448a5ca251a733b6120598c46dab3283305914": "4fed4c4f01176ed342ef47ea6712df06",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f3/709a83aedf1f03d6e04459831b12355a9b9ef1": "538d2edfa707ca92ed0b867d6c3903d1",
".git/objects/f5/72b90ef57ee79b82dd846c6871359a7cb10404": "e68f5265f0bb82d792ff536dcb99d803",
".git/objects/f8/d37145336838fc61dbf67039292e8c8949ea82": "eb78da4170cbe126b7942410434dc453",
".git/objects/fa/679e5fd591b34ccf546d653493fa6aae4e6501": "f8b5a98ec9f2186e3a62b10c5efcc416",
".git/objects/fe/5bf95a350c8c59878745f37b4a5ff046d9ac6a": "2cb8777319c87a23ef3c981ad24a6b94",
".git/refs/heads/master": "bdcc30bb9c9f001571e32ff0e910153e",
".git/refs/remotes/origin/master": "bdcc30bb9c9f001571e32ff0e910153e",
"assets/AssetManifest.bin": "ccac0a2f6caa75ae5b5615e613ecb80e",
"assets/AssetManifest.bin.json": "5382a8b3f5b4cc896e6105e6ef1e51ed",
"assets/AssetManifest.json": "63b935325744861fe31dd56b0b3ab4b0",
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
"assets/assets/images/banner1.jpg": "a864545502b36e70a45ca1c68ca58eb8",
"assets/assets/images/banner1ok.jpg": "1491536f43c13671ff82d924bc5eb104",
"assets/assets/images/banner2.jpg": "cfa1e6a0846d60e15a066018a7c5b51a",
"assets/assets/images/banner2ok.jpg": "c6bb469507bc05bc5f382414dc1f191b",
"assets/assets/images/banner3.jpg": "a22c9fcef0e65415b368248e939b2309",
"assets/assets/images/banner3ok.jpg": "d0290ab0c1bb04dc2c835454b3c80dbf",
"assets/assets/images/banner4.jpg": "928ae9ad444c2c6abcf6d306d98b42ad",
"assets/assets/images/banner4ok.jpg": "5315df626f75b948be012bc5c378b0f8",
"assets/assets/images/bghome2.png": "5cad362596eb59265a55af65a5323fbf",
"assets/assets/images/digital.png": "a5f3736deeff9f2f549b9a3405726f39",
"assets/assets/images/employeedata.jpg": "ff99f577ffa7b50d79bd8d12f9df703d",
"assets/assets/images/employeedata.png": "d0bf4775b4cc48449040a28ce1d710b6",
"assets/assets/images/health-regulations.jpg": "e1c6dbc04d9a8dde236a43729e35efcd",
"assets/assets/images/Hero_infographic.png": "0284eb30001fad45410cf959ce721f73",
"assets/assets/images/india-gov-logo.png": "5d3aed7e22bd5d50977f9caec2eb65a6",
"assets/assets/images/integration.jpg": "ea151eaa888e8c3b5b635e119f517bc8",
"assets/assets/images/integration.png": "4b892bbd6c3f46ba1955a0297f7fd468",
"assets/assets/images/kangla.png": "89604a640fdde40bbb0b4d815a55f8f1",
"assets/assets/images/kanglasa.png": "c0a2e48d9a92cff17f4d0de95011ff78",
"assets/assets/images/landing.png": "5f12390769fcee601d2290644e0bebdb",
"assets/assets/images/loading.json": "d5fd3e38b8e596dc09aefec519c0a975",
"assets/assets/images/logo.png": "e2611cd7a04c0e4707980c48e6b66360",
"assets/assets/images/logo2.png": "e58dc19a58d65880eab105568cbf41df",
"assets/assets/images/logo3.png": "635bad2bd896d11943fd2052f7c2d22b",
"assets/assets/images/managing-expenses.jpg": "367dd2fb6978c88229b40ec863b1edf5",
"assets/assets/images/MIS-Logo.png": "872b3756fc741b55758290bdc3f36ad1",
"assets/assets/images/MyGov-logo.png": "82d0490cd709db119feabf312facd607",
"assets/assets/images/new.gif": "db3593499fc8996200f77aa108975dcb",
"assets/assets/images/nps.jpg": "fbbf1cbd599b99eba8aefda9281bd261",
"assets/assets/images/officiating.jpg": "05d081cf1a23281ebb4b1c766c4c55b6",
"assets/assets/images/officiating.png": "0fb30434f0174207729f2ce1f78c2faa",
"assets/assets/images/OGPL_Logo.png": "abc0d3134007f94bd1c7e44f8f5228d1",
"assets/assets/images/payroll.jpg": "0724484a2b65b4fa9a9471a35df6c012",
"assets/assets/images/sanction.jpg": "430e46271dc52241df421ece3101329c",
"assets/assets/images/sanctionpost.jpg": "87d9f32aa99f142eeebe60611ae72804",
"assets/assets/images/security.png": "49ad5e8db59caec69f0caff7d3ac5d8e",
"assets/assets/images/seeking-healthcare.jpg": "95227fe4f39dadd8ec64ccac1b59cfc5",
"assets/assets/images/staying-healthy.jpg": "69b9842afd2b2e2d1835fe05afdc5e92",
"assets/FontManifest.json": "5cf663d8bb8f8e0e69ebaba0e16fed64",
"assets/fonts/MaterialIcons-Regular.otf": "2ab1ae92c2d567b996ea8631097a4ae9",
"assets/NOTICES": "80c6d8b11b1b77eee3f4cfdc4206c71d",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "4769f3245a24c1fa9965f113ea85ec2a",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "2d404c99eac5bbbb9292d1966cb4afa0",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "756ff33936fd5983d7b3ec076f91458a",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "86e461cf471c1640fd2b461ece4589df",
"canvaskit/canvaskit.js.symbols": "68eb703b9a609baef8ee0e413b442f33",
"canvaskit/canvaskit.wasm": "efeeba7dcc952dae57870d4df3111fad",
"canvaskit/chromium/canvaskit.js": "34beda9f39eb7d992d46125ca868dc61",
"canvaskit/chromium/canvaskit.js.symbols": "5a23598a2a8efd18ec3b60de5d28af8f",
"canvaskit/chromium/canvaskit.wasm": "64a386c87532ae52ae041d18a32a3635",
"canvaskit/skwasm.js": "f2ad9363618c5f62e813740099a80e63",
"canvaskit/skwasm.js.symbols": "80806576fa1056b43dd6d0b445b4b6f7",
"canvaskit/skwasm.wasm": "f0dfd99007f989368db17c9abeed5a49",
"canvaskit/skwasm_st.js": "d1326ceef381ad382ab492ba5d96f04d",
"canvaskit/skwasm_st.js.symbols": "c7e7aac7cd8b612defd62b43e3050bdd",
"canvaskit/skwasm_st.wasm": "56c3973560dfcbf28ce47cebe40f3206",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "76f08d47ff9f5715220992f993002504",
"flutter_bootstrap.js": "c0571b9a06332e5310099ab5295e7fe5",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "e4365e6daef6d65f833f5ad72a2d5b3e",
"/": "e4365e6daef6d65f833f5ad72a2d5b3e",
"main.dart.js": "9f25031e18e2d8a1b2c4c39f93404849",
"manifest.json": "4711af2278705729896304c56217fcc6",
"sw.js": "b186d2cc82d610f00ca55ba24313d19c",
"version.json": "6060228bd16268a7d2dc67037711aade"};
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
