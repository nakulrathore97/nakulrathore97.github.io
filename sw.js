/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "edit.html",
    "revision": "9a8a8321d257dfd88ff5280721ae2179"
  },
  {
    "url": "html2pdf.bundle.js",
    "revision": "4f85d6a7fa6987d4bbc14367630ea05d"
  },
  {
    "url": "images/icons/icon-128x128.png",
    "revision": "2a372cd9842c18fe97c7b8803ed656d3"
  },
  {
    "url": "images/icons/icon-144x144.png",
    "revision": "458e8b253b8b721cc29e5819d7f88d86"
  },
  {
    "url": "images/icons/icon-152x152.png",
    "revision": "0fc1ae368a3a491ca30546ca52b32993"
  },
  {
    "url": "images/icons/icon-192x192.png",
    "revision": "78e1134d08fd60c0400ef854e3a9a968"
  },
  {
    "url": "images/icons/icon-384x384.png",
    "revision": "6b404bd7bfab30bfbc00e4da6d79efb1"
  },
  {
    "url": "images/icons/icon-512x512.png",
    "revision": "6b404bd7bfab30bfbc00e4da6d79efb1"
  },
  {
    "url": "images/icons/icon-72x72.png",
    "revision": "76c610194d52a1ae12ee2d8471f0da30"
  },
  {
    "url": "images/icons/icon-96x96.png",
    "revision": "a408906c1a0eb33ea01210689af5dfa3"
  },
  {
    "url": "includesw.js",
    "revision": "c79f9aca0c781db80248971330ddd1e5"
  },
  {
    "url": "index.html",
    "revision": "fc592e75d7da503e137c196fa1ebf813"
  },
  {
    "url": "index1.html",
    "revision": "fd76fc75e438a31c33a7f11d26984776"
  },
  {
    "url": "js/html2canvas.js",
    "revision": "3c58c10ec03958eb57904462587ed674"
  },
  {
    "url": "js/jquery-2.1.3.js",
    "revision": "cf26f8f0ccb06be71e92d8db0fb64ab5"
  },
  {
    "url": "js/jspdf.debug.js",
    "revision": "bb861adc0d1b8b5ec679431e033b898c"
  },
  {
    "url": "js/jspdf.js",
    "revision": "85fcd46db8c01cb267ab56e7524b1587"
  },
  {
    "url": "js/jspdf.min.js",
    "revision": "a461a40f9aebab1a0c63f1e167a6c395"
  },
  {
    "url": "js/New Text Document.txt",
    "revision": "d41d8cd98f00b204e9800998ecf8427e"
  },
  {
    "url": "js/pdfFromHTML.js",
    "revision": "b9e714dc1fa94ce450c531897eacd41c"
  },
  {
    "url": "jsPDF-1.3.2/bower.json",
    "revision": "b210e43aabceb6365ce18de6de9e48ab"
  },
  {
    "url": "jsPDF-1.3.2/build.js",
    "revision": "4c22cafe5df10a8c71c51158d947f899"
  },
  {
    "url": "jsPDF-1.3.2/dist/jspdf.debug.js",
    "revision": "bb861adc0d1b8b5ec679431e033b898c"
  },
  {
    "url": "jsPDF-1.3.2/dist/jspdf.min.js",
    "revision": "a461a40f9aebab1a0c63f1e167a6c395"
  },
  {
    "url": "jsPDF-1.3.2/doc/files.html",
    "revision": "cb871c060572c08389896f14adc293e9"
  },
  {
    "url": "jsPDF-1.3.2/doc/index.html",
    "revision": "0f5808432c097942e732cc09d63de22a"
  },
  {
    "url": "jsPDF-1.3.2/doc/plugins/from_html.md",
    "revision": "a69dad909c59beb5226a9492c7a93921"
  },
  {
    "url": "jsPDF-1.3.2/doc/symbols/_global_.html",
    "revision": "248bf8b9eece98a5090476d571a8eb5b"
  },
  {
    "url": "jsPDF-1.3.2/doc/symbols/FontObject.html",
    "revision": "e95608a91eea40044b04a4d2e4a105aa"
  },
  {
    "url": "jsPDF-1.3.2/doc/symbols/jsPDF-jsPDF.html",
    "revision": "f09e9a43f6562635e751d32635ae141f"
  },
  {
    "url": "jsPDF-1.3.2/doc/symbols/jsPDF-PubSub.html",
    "revision": "9e313c16421468672a8425665a0a6237"
  },
  {
    "url": "jsPDF-1.3.2/doc/symbols/jsPDF.html",
    "revision": "e7331ba9c05d46986038855ef91800c1"
  },
  {
    "url": "jsPDF-1.3.2/doc/symbols/jsPDFClass.html",
    "revision": "4ade0ee2c42a60f1e0e464ccd632dcab"
  },
  {
    "url": "jsPDF-1.3.2/doc/symbols/PubSub.html",
    "revision": "f1f5f1966576b09735ae38c814de2088"
  },
  {
    "url": "jsPDF-1.3.2/doc/symbols/src/c__work_jsPDF_jspdf.js.html",
    "revision": "1e1af0bf51c520dd263bd7e01acd7ff7"
  },
  {
    "url": "jsPDF-1.3.2/doc/symbols/src/c__work_jsPDF_tools_jspdf.js.html",
    "revision": "9ffd4f84d53ac9bdde0634fddf1cef54"
  },
  {
    "url": "jsPDF-1.3.2/doc/symbols/src/jspdf.js.html",
    "revision": "875c4879966f37c040990d7806a345bd"
  },
  {
    "url": "jsPDF-1.3.2/docs/getting_started.md",
    "revision": "5e9f9c8014a116d558b025c628bb16f9"
  },
  {
    "url": "jsPDF-1.3.2/examples/annotation/test_annotation_2.html",
    "revision": "8e0249c8101b94ef1048e73bb4ff57cf"
  },
  {
    "url": "jsPDF-1.3.2/examples/annotation/test_annotation-magFactor.pdf",
    "revision": "655ce3702b8874035b21d07f62c52ae3"
  },
  {
    "url": "jsPDF-1.3.2/examples/annotation/test_annotation.html",
    "revision": "aadaa06731b19ee944c5924162eedf94"
  },
  {
    "url": "jsPDF-1.3.2/examples/annotation/test_annotation.pdf",
    "revision": "a82af803583489794a9d9f515eb84f47"
  },
  {
    "url": "jsPDF-1.3.2/examples/basic.html",
    "revision": "f585568635e03477d25b59ea41159b89"
  },
  {
    "url": "jsPDF-1.3.2/examples/bootstrap/css/bootstrap-responsive.css",
    "revision": "b626be49731b63affaa1bd71fed6f8b8"
  },
  {
    "url": "jsPDF-1.3.2/examples/bootstrap/css/bootstrap-responsive.min.css",
    "revision": "f8001b8e103a12ca7ada1b9df7eda7aa"
  },
  {
    "url": "jsPDF-1.3.2/examples/bootstrap/css/bootstrap.css",
    "revision": "101205d0b6e392c86bbf404a7190dd3c"
  },
  {
    "url": "jsPDF-1.3.2/examples/bootstrap/css/bootstrap.min.css",
    "revision": "2d0e36535246fd6757ec0a0cd1757d0f"
  },
  {
    "url": "jsPDF-1.3.2/examples/bootstrap/img/glyphicons-halflings-white.png",
    "revision": "9bbc6e9602998a385c2ea13df56470fd"
  },
  {
    "url": "jsPDF-1.3.2/examples/bootstrap/img/glyphicons-halflings.png",
    "revision": "2516339970d710819585f90773aebe0a"
  },
  {
    "url": "jsPDF-1.3.2/examples/bootstrap/js/bootstrap.js",
    "revision": "cbbf80e1733d43795c2beb41dff8068a"
  },
  {
    "url": "jsPDF-1.3.2/examples/bootstrap/js/bootstrap.min.js",
    "revision": "9e8a05ab617c7e403be79e42f09107fe"
  },
  {
    "url": "jsPDF-1.3.2/examples/canvg_context2d/bar_graph_with_text_and_lines.html",
    "revision": "ac908234cce312ba08e781a0c5d9f4ae"
  },
  {
    "url": "jsPDF-1.3.2/examples/context2d/test_context2d_paths.html",
    "revision": "bbec055482723ba5cac4f54e177646e4"
  },
  {
    "url": "jsPDF-1.3.2/examples/context2d/test_context2d.html",
    "revision": "1bb4c935ba679445f5a61a2f93bc60d6"
  },
  {
    "url": "jsPDF-1.3.2/examples/css/editor.css",
    "revision": "f12f06bfcd739f39824a37d01c20a1ba"
  },
  {
    "url": "jsPDF-1.3.2/examples/css/main.css",
    "revision": "8a76f814b96f976bfd1362d6767152eb"
  },
  {
    "url": "jsPDF-1.3.2/examples/css/smoothness/images/ui-bg_flat_0_aaaaaa_40x100.png",
    "revision": "2a44fbdb7360c60122bcf6dcef0387d8"
  },
  {
    "url": "jsPDF-1.3.2/examples/css/smoothness/images/ui-bg_flat_75_ffffff_40x100.png",
    "revision": "8692e6efddf882acbff144c38ea7dfdf"
  },
  {
    "url": "jsPDF-1.3.2/examples/css/smoothness/images/ui-bg_glass_55_fbf9ee_1x400.png",
    "revision": "f8f4558e0b92ff2cd6136781533902ec"
  },
  {
    "url": "jsPDF-1.3.2/examples/css/smoothness/images/ui-bg_glass_65_ffffff_1x400.png",
    "revision": "e5a8f32e28fd5c27bf0fed33c8a8b9b5"
  },
  {
    "url": "jsPDF-1.3.2/examples/css/smoothness/images/ui-bg_glass_75_dadada_1x400.png",
    "revision": "c12c6510dad3ebfa64c8a30e959a2469"
  },
  {
    "url": "jsPDF-1.3.2/examples/css/smoothness/images/ui-bg_glass_75_e6e6e6_1x400.png",
    "revision": "f4254356c2a8c9a383205ef2c4de22c4"
  },
  {
    "url": "jsPDF-1.3.2/examples/css/smoothness/images/ui-bg_glass_95_fef1ec_1x400.png",
    "revision": "5a3be2d8fff8324d59aec3df7b0a0c83"
  },
  {
    "url": "jsPDF-1.3.2/examples/css/smoothness/images/ui-bg_highlight-soft_75_cccccc_1x100.png",
    "revision": "72c593d16e998952cd8d798fee33c6f3"
  },
  {
    "url": "jsPDF-1.3.2/examples/css/smoothness/images/ui-icons_222222_256x240.png",
    "revision": "ebe6b6902a408fbf9cac6379a1477525"
  },
  {
    "url": "jsPDF-1.3.2/examples/css/smoothness/images/ui-icons_2e83ff_256x240.png",
    "revision": "2b99a5e48d3c3957d03027d36a25e8bb"
  },
  {
    "url": "jsPDF-1.3.2/examples/css/smoothness/images/ui-icons_454545_256x240.png",
    "revision": "119dd0c2e94ad689de873ef39fd43e6e"
  },
  {
    "url": "jsPDF-1.3.2/examples/css/smoothness/images/ui-icons_888888_256x240.png",
    "revision": "9c46d7cab43e22a14bad26d2d4806d80"
  },
  {
    "url": "jsPDF-1.3.2/examples/css/smoothness/images/ui-icons_cd0a0a_256x240.png",
    "revision": "3e450c2a2c66328d9498e7001ad7197c"
  },
  {
    "url": "jsPDF-1.3.2/examples/css/smoothness/jquery-ui-1.8.17.custom.css",
    "revision": "629a33c52b2c3752f90eb3875aa51390"
  },
  {
    "url": "jsPDF-1.3.2/examples/downloadify.html",
    "revision": "dd895704f08679e02debb8d368f72796"
  },
  {
    "url": "jsPDF-1.3.2/examples/html2pdf/auto_break.html",
    "revision": "e1d3a4a3eda6923986f3d44ea7e9e997"
  },
  {
    "url": "jsPDF-1.3.2/examples/html2pdf/examples.css",
    "revision": "90ee229c9b60ea9450b05cec7769bd8b"
  },
  {
    "url": "jsPDF-1.3.2/examples/html2pdf/images/favicon.png",
    "revision": "1cf4b058500261d839a2525c791560d7"
  },
  {
    "url": "jsPDF-1.3.2/examples/html2pdf/lists.html",
    "revision": "2a204495e1c443f65b32a39868239670"
  },
  {
    "url": "jsPDF-1.3.2/examples/html2pdf/page_break.html",
    "revision": "103a95ffb63cc6d68cbb853e8bd70f82"
  },
  {
    "url": "jsPDF-1.3.2/examples/html2pdf/pdf.html",
    "revision": "9eca5272efb4dc38116a167acc11ed84"
  },
  {
    "url": "jsPDF-1.3.2/examples/html2pdf/pdf2.html",
    "revision": "fa7ec176823a081a25e7e6fb62206739"
  },
  {
    "url": "jsPDF-1.3.2/examples/html2pdf/showcase_supported_html.html",
    "revision": "78b21286e6039a47aee21b259efbe0df"
  },
  {
    "url": "jsPDF-1.3.2/examples/html2pdf/showcase.html",
    "revision": "7eefd52bd918373442d964c8c4525956"
  },
  {
    "url": "jsPDF-1.3.2/examples/html2pdf/simple.html",
    "revision": "e3d0ef01430964ad3b5fc80bd0722a81"
  },
  {
    "url": "jsPDF-1.3.2/examples/html2pdf/tables.html",
    "revision": "cebcad5f0dc1c7d00af2d0fe7ff969f0"
  },
  {
    "url": "jsPDF-1.3.2/examples/html2pdf/total_mess.html",
    "revision": "1c26b7e8414b7eb74f0d00ea6168d1e2"
  },
  {
    "url": "jsPDF-1.3.2/examples/images.html",
    "revision": "05a23010d73ce08c4ef4338848c7c9f5"
  },
  {
    "url": "jsPDF-1.3.2/examples/images/24_bit.png",
    "revision": "91b44ad32ccc8aa7eb6132d484c5b2db"
  },
  {
    "url": "jsPDF-1.3.2/examples/images/32_bit.png",
    "revision": "ed95b1b27f34c1e13866fea33e84de79"
  },
  {
    "url": "jsPDF-1.3.2/examples/images/grayscale_16bpc.png",
    "revision": "2c608a93707b494f660a7cb5a5cd4358"
  },
  {
    "url": "jsPDF-1.3.2/examples/images/grayscale_8bpc.png",
    "revision": "7f2bd075674e69ce67433e83982d0f99"
  },
  {
    "url": "jsPDF-1.3.2/examples/images/grayscale_alpha_16_bpc.png",
    "revision": "674b3455b932461b2dbc51d73038b951"
  },
  {
    "url": "jsPDF-1.3.2/examples/images/grayscale_alpha_8bpc.png",
    "revision": "beabd2138aee6f97ee57341548cf0716"
  },
  {
    "url": "jsPDF-1.3.2/examples/images/grid.png",
    "revision": "b9d19aa27462710036f7a42ae4e5fa3b"
  },
  {
    "url": "jsPDF-1.3.2/examples/images/jpg.jpg",
    "revision": "f21865b1060e3038984a18cd56f9cbcb"
  },
  {
    "url": "jsPDF-1.3.2/examples/images/png8_flat.png",
    "revision": "63480417c37a421825ed1a516358237a"
  },
  {
    "url": "jsPDF-1.3.2/examples/images/png8_trans.png",
    "revision": "eba438b58e961baa78db73420af1d49b"
  },
  {
    "url": "jsPDF-1.3.2/examples/images/RGB_16bpc.png",
    "revision": "ade17f3fca4a1265286ea034770a56ac"
  },
  {
    "url": "jsPDF-1.3.2/examples/images/RGBA_16bpc.png",
    "revision": "ed83cdcedada5fa9af3bb630066a9e70"
  },
  {
    "url": "jsPDF-1.3.2/examples/images/tiny_png_indexed.png",
    "revision": "7611ae21cdd933169622de349947e987"
  },
  {
    "url": "jsPDF-1.3.2/examples/jaxer.html",
    "revision": "d042bb6cd7d8d93e2565c012e085b6ab"
  },
  {
    "url": "jsPDF-1.3.2/examples/js/AcroForm.js",
    "revision": "875309cfa68fb02d5fac391f32d485b2"
  },
  {
    "url": "jsPDF-1.3.2/examples/js/autoprint.js",
    "revision": "558e0dd429969314eec229733405c5f2"
  },
  {
    "url": "jsPDF-1.3.2/examples/js/basic.js",
    "revision": "92d1521aa27eb40ab66844a4f72f1dd4"
  },
  {
    "url": "jsPDF-1.3.2/examples/js/circles.js",
    "revision": "17863f64ab1c387b6f40eb870a6e8289"
  },
  {
    "url": "jsPDF-1.3.2/examples/js/editor.js",
    "revision": "4ebf3b9caa322d488254b6051e85cfb3"
  },
  {
    "url": "jsPDF-1.3.2/examples/js/font-faces.js",
    "revision": "1c0cd9cb5cba0a14fd9e22a620ba7412"
  },
  {
    "url": "jsPDF-1.3.2/examples/js/font-size.js",
    "revision": "708c2990a53478f379a663d952e8681a"
  },
  {
    "url": "jsPDF-1.3.2/examples/js/from-html.js",
    "revision": "51fe0e4fefa38746d85809df17f27291"
  },
  {
    "url": "jsPDF-1.3.2/examples/js/html2canvas.js",
    "revision": "3c58c10ec03958eb57904462587ed674"
  },
  {
    "url": "jsPDF-1.3.2/examples/js/images_png.js",
    "revision": "027e17b11512c0ab3dbb5a4d39758879"
  },
  {
    "url": "jsPDF-1.3.2/examples/js/images.js",
    "revision": "e4e7aa3beb338924107494934f09e380"
  },
  {
    "url": "jsPDF-1.3.2/examples/js/jquery/jquery-1.7.1.min.js",
    "revision": "ddb84c1587287b2df08966081ef063bf"
  },
  {
    "url": "jsPDF-1.3.2/examples/js/jquery/jquery-ui-1.8.17.custom.min.js",
    "revision": "0cd3f4fce2e0fe4a3826df5e2b5cc9bf"
  },
  {
    "url": "jsPDF-1.3.2/examples/js/kitchen-sink.js",
    "revision": "4ddeeaa8e8ca961d6ae56548c5319d4f"
  },
  {
    "url": "jsPDF-1.3.2/examples/js/landscape.js",
    "revision": "32b6419065885768bf3ec1caca664d02"
  },
  {
    "url": "jsPDF-1.3.2/examples/js/lines.js",
    "revision": "a9d7a3ad554881b503094d9390eee8bf"
  },
  {
    "url": "jsPDF-1.3.2/examples/js/rectangles.js",
    "revision": "5730d21a37b34c7a843073ff5414f91e"
  },
  {
    "url": "jsPDF-1.3.2/examples/js/string-splitting.js",
    "revision": "ae0196d1ce6510c79f46b8f8db2a9fad"
  },
  {
    "url": "jsPDF-1.3.2/examples/js/test_harness.js",
    "revision": "1567e7d1d500a6b9e3c02bf733c92047"
  },
  {
    "url": "jsPDF-1.3.2/examples/js/text-colors.js",
    "revision": "c413c8ab50f6dfd3c0a579b293f81925"
  },
  {
    "url": "jsPDF-1.3.2/examples/js/theme-ambiance.js",
    "revision": "16dbe80600f5434d1b7ccade7b8c1524"
  },
  {
    "url": "jsPDF-1.3.2/examples/js/triangles.js",
    "revision": "798cc858032d3d73bd900e71b5a57337"
  },
  {
    "url": "jsPDF-1.3.2/examples/js/two-page.js",
    "revision": "c74fd0c6300a11e53609e50fef3c28c9"
  },
  {
    "url": "jsPDF-1.3.2/examples/js/user-input.js",
    "revision": "9038ddc41c38da155dcc81d3bb630d28"
  },
  {
    "url": "jsPDF-1.3.2/examples/jspdf.PLUGINTEMPLATE.js",
    "revision": "cae84b572b64eebca5d8cab5999a5e1f"
  },
  {
    "url": "jsPDF-1.3.2/examples/null-logo-trans.png",
    "revision": "a7b48a90287f36d918dd5221a69c46cf"
  },
  {
    "url": "jsPDF-1.3.2/examples/octocat.jpg",
    "revision": "b8b26bd31e91aa561a6a3165460d8e4b"
  },
  {
    "url": "jsPDF-1.3.2/examples/octocat.png",
    "revision": "e26f511acc62f24645d38807664e92d7"
  },
  {
    "url": "jsPDF-1.3.2/examples/outline/test_outline.html",
    "revision": "6c57b5e645caf53464afa9c240b26bb4"
  },
  {
    "url": "jsPDF-1.3.2/examples/outline/test_outline.pdf",
    "revision": "84a03d311ca4e09ad115d90026448d77"
  },
  {
    "url": "jsPDF-1.3.2/examples/runner.html",
    "revision": "706fc3518b2082d1c06d78036b8448ac"
  },
  {
    "url": "jsPDF-1.3.2/examples/test_from_html_css_page_breaks.html",
    "revision": "69bb81a563e71afc5d86329528050a74"
  },
  {
    "url": "jsPDF-1.3.2/examples/test_from_html.html",
    "revision": "0f90ae10b6c4169128646f577b46dee0"
  },
  {
    "url": "jsPDF-1.3.2/examples/test_insert_page.html",
    "revision": "617a3571ab6713301ced65a0acb698de"
  },
  {
    "url": "jsPDF-1.3.2/examples/thinking-monkey.jpg",
    "revision": "cd8ae882d05709df699932f82b695780"
  },
  {
    "url": "jsPDF-1.3.2/index.html",
    "revision": "d65f25b181e064785f95b2a8a13baa81"
  },
  {
    "url": "jsPDF-1.3.2/ISSUE_TEMPLATE.md",
    "revision": "918985fc6819d1ed8e03f03e819215fb"
  },
  {
    "url": "jsPDF-1.3.2/jspdf.js",
    "revision": "c47b9d5013b415f4e1abad77e7be44ac"
  },
  {
    "url": "jsPDF-1.3.2/libs/canvg_context2d/canvg.js",
    "revision": "686a1c0c7adfd8eb3cab9c1e5ac07046"
  },
  {
    "url": "jsPDF-1.3.2/libs/canvg_context2d/libs/rgbcolor.js",
    "revision": "ff13a2885cd6b2d7eb729c20eeaa7f0e"
  },
  {
    "url": "jsPDF-1.3.2/libs/canvg_context2d/libs/StackBlur.js",
    "revision": "a86e7b0247b4a2c006d40d450c67469b"
  },
  {
    "url": "jsPDF-1.3.2/libs/canvg_context2d/README.md",
    "revision": "b1529b8cf4e112b99d4cff5bc3df2716"
  },
  {
    "url": "jsPDF-1.3.2/libs/css_colors.js",
    "revision": "3787bc4fcdb35a8820492e6a39babc6a"
  },
  {
    "url": "jsPDF-1.3.2/libs/deflate.js",
    "revision": "9f2fca70abe4a93d4903d50b86a37d6d"
  },
  {
    "url": "jsPDF-1.3.2/libs/Downloadify/images/download.png",
    "revision": "c06e97a5571b7cc5d667991dd18ac6ad"
  },
  {
    "url": "jsPDF-1.3.2/libs/Downloadify/js/downloadify.min.js",
    "revision": "52b8be8fe79a2b309ae3862e4b7c11bd"
  },
  {
    "url": "jsPDF-1.3.2/libs/Downloadify/js/swfobject.js",
    "revision": "892a543f3abb54e8ec1ada55be3b0649"
  },
  {
    "url": "jsPDF-1.3.2/libs/Downloadify/LICENSE.txt",
    "revision": "8de80cc1c88de9a5e7b91e4dd0ca6f71"
  },
  {
    "url": "jsPDF-1.3.2/libs/Downloadify/media/downloadify.swf",
    "revision": "7cc9cdb1344918aeeb83f305935b5e15"
  },
  {
    "url": "jsPDF-1.3.2/libs/Downloadify/README.textile",
    "revision": "172d0cafd42a9a95728295dbb3f089ac"
  },
  {
    "url": "jsPDF-1.3.2/libs/Downloadify/src/com/dynamicflash/util/Base64.as",
    "revision": "d4e91e0125e416f076a98d949716e20b"
  },
  {
    "url": "jsPDF-1.3.2/libs/Downloadify/src/com/dynamicflash/util/tests/Base64Test.as",
    "revision": "03e85717fabe366f38dfdfec040a666a"
  },
  {
    "url": "jsPDF-1.3.2/libs/Downloadify/src/Downloadify.as",
    "revision": "14c0584d23640f50f7901cc9d25b8fda"
  },
  {
    "url": "jsPDF-1.3.2/libs/Downloadify/src/downloadify.js",
    "revision": "71e20b1df50171df364269bd0dc5229d"
  },
  {
    "url": "jsPDF-1.3.2/libs/Downloadify/test.html",
    "revision": "f912b60c09abed41725c8ba1fadafcf9"
  },
  {
    "url": "jsPDF-1.3.2/libs/html2canvas/dist/html2canvas.js",
    "revision": "82a21213a62c19f8f6f9ede905de19f2"
  },
  {
    "url": "jsPDF-1.3.2/libs/html2canvas/readme.md",
    "revision": "b4448e3426b8e7d779627aa417f312da"
  },
  {
    "url": "jsPDF-1.3.2/libs/html2canvas/src/clone.js",
    "revision": "2932b0a9163f47d2bc1564ffa03e0f78"
  },
  {
    "url": "jsPDF-1.3.2/libs/html2canvas/src/color.js",
    "revision": "8e438563d897263dc0c74bf806c0b87e"
  },
  {
    "url": "jsPDF-1.3.2/libs/html2canvas/src/core.js",
    "revision": "38d9deaa2c9264f133f3b823b2013b5c"
  },
  {
    "url": "jsPDF-1.3.2/libs/html2canvas/src/dummyimagecontainer.js",
    "revision": "ad72bd6b1430d9f3a4d507d0f9686775"
  },
  {
    "url": "jsPDF-1.3.2/libs/html2canvas/src/fallback.js",
    "revision": "e531e5203708659cee8f4f6f4bc198db"
  },
  {
    "url": "jsPDF-1.3.2/libs/html2canvas/src/font.js",
    "revision": "4f03e705e03238da81e398c66f19961c"
  },
  {
    "url": "jsPDF-1.3.2/libs/html2canvas/src/fontmetrics.js",
    "revision": "825b39be0f9f3aa23175a9ccac74dc6f"
  },
  {
    "url": "jsPDF-1.3.2/libs/html2canvas/src/framecontainer.js",
    "revision": "03c9c4c066372bae8320f2987fdcea47"
  },
  {
    "url": "jsPDF-1.3.2/libs/html2canvas/src/gradientcontainer.js",
    "revision": "2d9b749a4b54590edd32bc9ab11b458a"
  },
  {
    "url": "jsPDF-1.3.2/libs/html2canvas/src/imagecontainer.js",
    "revision": "8e3b928b5a3940a34b619bc744142a44"
  },
  {
    "url": "jsPDF-1.3.2/libs/html2canvas/src/imageloader.js",
    "revision": "859c5246436557024f02e920bb9e465d"
  },
  {
    "url": "jsPDF-1.3.2/libs/html2canvas/src/lineargradientcontainer.js",
    "revision": "a028909facf0b855055f4790dc0fae7d"
  },
  {
    "url": "jsPDF-1.3.2/libs/html2canvas/src/log.js",
    "revision": "793c45a772b19d1bdc9fb364bfe9af26"
  },
  {
    "url": "jsPDF-1.3.2/libs/html2canvas/src/nodecontainer.js",
    "revision": "7e84657730115d89e17b9976d4707107"
  },
  {
    "url": "jsPDF-1.3.2/libs/html2canvas/src/nodeparser.js",
    "revision": "365b6bf28a645ca7f0e8cb96973db25f"
  },
  {
    "url": "jsPDF-1.3.2/libs/html2canvas/src/promise.js",
    "revision": "3b8bc901a8c47086b9e9daf54e4436eb"
  },
  {
    "url": "jsPDF-1.3.2/libs/html2canvas/src/proxy.js",
    "revision": "732e51b405f030d8e72973233ebec25d"
  },
  {
    "url": "jsPDF-1.3.2/libs/html2canvas/src/proxyimagecontainer.js",
    "revision": "096e35684a3513fc279ab0c25aee32e3"
  },
  {
    "url": "jsPDF-1.3.2/libs/html2canvas/src/pseudoelementcontainer.js",
    "revision": "1f34848964e3c3258a8a92e75527f4ed"
  },
  {
    "url": "jsPDF-1.3.2/libs/html2canvas/src/renderer.js",
    "revision": "eb5008da79ef54064afd7458c1792b39"
  },
  {
    "url": "jsPDF-1.3.2/libs/html2canvas/src/renderers/canvas.js",
    "revision": "0f1c1bafb6b4ace1699bbf29d2f3ac53"
  },
  {
    "url": "jsPDF-1.3.2/libs/html2canvas/src/stackingcontext.js",
    "revision": "c00bf415f878818df4d87792c6c2b7a1"
  },
  {
    "url": "jsPDF-1.3.2/libs/html2canvas/src/support.js",
    "revision": "dd8e65fea72a0a346636bd95e0be48b9"
  },
  {
    "url": "jsPDF-1.3.2/libs/html2canvas/src/svgcontainer.js",
    "revision": "aad9196ae07ef7ab1258ded463740ae5"
  },
  {
    "url": "jsPDF-1.3.2/libs/html2canvas/src/svgnodecontainer.js",
    "revision": "490f10653f764c6e8f29c24f9c903f25"
  },
  {
    "url": "jsPDF-1.3.2/libs/html2canvas/src/textcontainer.js",
    "revision": "784c76e839719041c5e0460f79a7839a"
  },
  {
    "url": "jsPDF-1.3.2/libs/html2canvas/src/utils.js",
    "revision": "d46c25623c6cc7b9c4ca256658626467"
  },
  {
    "url": "jsPDF-1.3.2/libs/html2canvas/src/webkitgradientcontainer.js",
    "revision": "dc4f4135b0e5ca256fca8412187ae1b1"
  },
  {
    "url": "jsPDF-1.3.2/libs/html2canvas/src/xhr.js",
    "revision": "b08e026cd7576225048a40808f07cfaf"
  },
  {
    "url": "jsPDF-1.3.2/libs/html2pdf.js",
    "revision": "be10fb5e3076eab69bc7b2e36e362522"
  },
  {
    "url": "jsPDF-1.3.2/libs/png_support/png.js",
    "revision": "8ef2877eade424a4f58a8dc294999e90"
  },
  {
    "url": "jsPDF-1.3.2/libs/png_support/zlib.js",
    "revision": "014acb8227427ea977c4429f98b01448"
  },
  {
    "url": "jsPDF-1.3.2/libs/polyfill.js",
    "revision": "387249172ae63c97f0c4f22ba5010a4f"
  },
  {
    "url": "jsPDF-1.3.2/libs/require/config.js",
    "revision": "0821c1bdd79a5c141f6869073a7ef41f"
  },
  {
    "url": "jsPDF-1.3.2/libs/require/require.js",
    "revision": "c317f90d8edf281fa508b8ca09e1edfd"
  },
  {
    "url": "jsPDF-1.3.2/main.js",
    "revision": "899a3e44a6f9bc1987171840222ba38c"
  },
  {
    "url": "jsPDF-1.3.2/MIT-LICENSE.txt",
    "revision": "9c546fbfa145f56b18f6e4597bd8d615"
  },
  {
    "url": "jsPDF-1.3.2/npm-shrinkwrap.json",
    "revision": "158666b39cfbf0e4ca447c180d09fb0b"
  },
  {
    "url": "jsPDF-1.3.2/package.json",
    "revision": "99a4b1a0df0f41a35b231b7dadff6e19"
  },
  {
    "url": "jsPDF-1.3.2/plugins/acroform.js",
    "revision": "1213596d73d48a99114907f9e1b7b6c3"
  },
  {
    "url": "jsPDF-1.3.2/plugins/addhtml.js",
    "revision": "a97cbbab0ade83592bd18b5a6f55e84a"
  },
  {
    "url": "jsPDF-1.3.2/plugins/addimage.js",
    "revision": "7521f49c6f0b0680ff2eb71059bd91fc"
  },
  {
    "url": "jsPDF-1.3.2/plugins/annotations.js",
    "revision": "415107cb79e340fda31d8d3ea759e40c"
  },
  {
    "url": "jsPDF-1.3.2/plugins/autoprint.js",
    "revision": "b80fe51ebb33fe925f779275eaa1e6bb"
  },
  {
    "url": "jsPDF-1.3.2/plugins/canvas.js",
    "revision": "fe155544fa73e35d1c884a088b781818"
  },
  {
    "url": "jsPDF-1.3.2/plugins/cell.js",
    "revision": "aef3ce48b55a0d5a76bf8829e3ec3222"
  },
  {
    "url": "jsPDF-1.3.2/plugins/context2d.js",
    "revision": "5d0f2ecf514d317cb32d5c268a3a86fe"
  },
  {
    "url": "jsPDF-1.3.2/plugins/from_html.js",
    "revision": "a24ad9e21f3ec14719da04e0fc2b836d"
  },
  {
    "url": "jsPDF-1.3.2/plugins/javascript.js",
    "revision": "0eb05d92906c1735dd97e13beeacaccb"
  },
  {
    "url": "jsPDF-1.3.2/plugins/outline.js",
    "revision": "7cb3a2b0d361eccebe570780a8746835"
  },
  {
    "url": "jsPDF-1.3.2/plugins/png_support.js",
    "revision": "5483b57f9fdbb51dad2302460a13b8ce"
  },
  {
    "url": "jsPDF-1.3.2/plugins/prevent_scale_to_fit.js",
    "revision": "fdb2bc5473f5ff48545a3a3fec0b3020"
  },
  {
    "url": "jsPDF-1.3.2/plugins/split_text_to_size.js",
    "revision": "08b008f3e9d32f56f30c79111ce70039"
  },
  {
    "url": "jsPDF-1.3.2/plugins/standard_fonts_metrics.js",
    "revision": "37ed596e9531ca33ab151c148361b092"
  },
  {
    "url": "jsPDF-1.3.2/plugins/svg.js",
    "revision": "cbc239c8f9f42ee0e267a349ca41d763"
  },
  {
    "url": "jsPDF-1.3.2/plugins/total_pages.js",
    "revision": "1cefca96cd90062b58a50ba28481dd01"
  },
  {
    "url": "jsPDF-1.3.2/plugins/xmp_metadata.js",
    "revision": "aae6de1d77d89522c8af5db369d9d463"
  },
  {
    "url": "jsPDF-1.3.2/README.md",
    "revision": "c898c5e243f7d609db5d4057767157e4"
  },
  {
    "url": "jsPDF-1.3.2/RELEASE.md",
    "revision": "f8e979ad585e9f4c07cdf91ff1da629e"
  },
  {
    "url": "jsPDF-1.3.2/SUMMARY.md",
    "revision": "81ecf50ba60b3364384db516c4ea3332"
  },
  {
    "url": "jsPDF-1.3.2/test/001_blankpdf.pdf",
    "revision": "09dee3ac9d1666aaea0f1eb687b0acf7"
  },
  {
    "url": "jsPDF-1.3.2/test/002_twopagedoc_oldapi.pdf",
    "revision": "9eceef9a61e2cea9c04d7ddbf69dce02"
  },
  {
    "url": "jsPDF-1.3.2/test/002_twopagedoc.pdf",
    "revision": "9eceef9a61e2cea9c04d7ddbf69dce02"
  },
  {
    "url": "jsPDF-1.3.2/test/003_demolandscape.pdf",
    "revision": "2afb7f999e4ae13efe32438e7bfc45db"
  },
  {
    "url": "jsPDF-1.3.2/test/004_fontsizes.pdf",
    "revision": "61e0b860eb5110e7e93781824324ab95"
  },
  {
    "url": "jsPDF-1.3.2/test/005_demofonttypes.pdf",
    "revision": "39746e4c151b674b5c5ad68999c3649e"
  },
  {
    "url": "jsPDF-1.3.2/test/006_demotestcolors.pdf",
    "revision": "6b62f16f22b42d3dab034e14d83fcd6f"
  },
  {
    "url": "jsPDF-1.3.2/test/007_demometadata.pdf",
    "revision": "a48dc167af5cde98a072fda6bfdf0316"
  },
  {
    "url": "jsPDF-1.3.2/test/008_demorectangles.pdf",
    "revision": "51d80a4a59b65f47d39f238c1499005c"
  },
  {
    "url": "jsPDF-1.3.2/test/009_demoliness.pdf",
    "revision": "9047e6f9ccb83121faf80cc388b9f1a9"
  },
  {
    "url": "jsPDF-1.3.2/test/010_democircles.pdf",
    "revision": "e9e9b8360413b0ed4e70d2dc9c142bcc"
  },
  {
    "url": "jsPDF-1.3.2/test/011_multilinetext.pdf",
    "revision": "fcb33f30d369a34fee34519d0d023969"
  },
  {
    "url": "jsPDF-1.3.2/test/012_multiplelines.pdf",
    "revision": "74159c49b2c7a78236f77c26852afbe6"
  },
  {
    "url": "jsPDF-1.3.2/test/013_sillysvgrenderer.pdf",
    "revision": "591b55591081744598a79de9d75f2285"
  },
  {
    "url": "jsPDF-1.3.2/test/013_sillysvgrenderer.svg",
    "revision": "de5d1c9815152f8e70f112ac7e1389bf"
  },
  {
    "url": "jsPDF-1.3.2/test/014_addImage.jpeg",
    "revision": "f078f5b52cff7088c1634ac9a57bb851"
  },
  {
    "url": "jsPDF-1.3.2/test/014_addImage.jpeg.base64.txt",
    "revision": "3b1c9046288dc3a7965d1b489733cc33"
  },
  {
    "url": "jsPDF-1.3.2/test/014_addImage.pdf.base64.txt",
    "revision": "aa17ea23ed01d7edf289e0fb2d3d24ec"
  },
  {
    "url": "jsPDF-1.3.2/test/014_addImage.txt",
    "revision": "e981f1413daab62951b39eb82c02109f"
  },
  {
    "url": "jsPDF-1.3.2/test/015_splittext.js",
    "revision": "e1cb2e5afa752dd18b1b7e56ff891f67"
  },
  {
    "url": "jsPDF-1.3.2/test/015_splittext.pdf",
    "revision": "c01fa1cf8c986a510a68858cc460807a"
  },
  {
    "url": "jsPDF-1.3.2/test/components_tests.js",
    "revision": "dc1f6e57e187d04402af5a33f1972b7f"
  },
  {
    "url": "jsPDF-1.3.2/test/index.htm",
    "revision": "41a8dcc0c6c3409992d1a582ed8b6050"
  },
  {
    "url": "jsPDF-1.3.2/test/libs/curl-0.5.4.min.js",
    "revision": "7fd252b590605a97b839fd4a291d4bf8"
  },
  {
    "url": "jsPDF-1.3.2/test/libs/custom_fill.js",
    "revision": "fdca8a6551ee1c9a235a7559b9415047"
  },
  {
    "url": "jsPDF-1.3.2/test/libs/qunit.css",
    "revision": "e125e3f10c9dfc207dac1d11ae8f0ae0"
  },
  {
    "url": "jsPDF-1.3.2/test/libs/qunit.js",
    "revision": "06fee4e53919faddbabed1533f5e33e7"
  },
  {
    "url": "jsPDF-1.3.2/test/pdf_generate_tests.js",
    "revision": "2813583997b18465f15e451b4b204e64"
  },
  {
    "url": "jsPDF-1.3.2/test/test_from_html_css_page_breaks.html",
    "revision": "250ce776a42974a8e25c37b580761498"
  },
  {
    "url": "jsPDF-1.3.2/test/test_harness.js",
    "revision": "0a367ec4bac67b4b589dd2b44b809b33"
  },
  {
    "url": "jsPDF-1.3.2/test/test_min.html",
    "revision": "2f1f703a43164bbe44170eb85b15bd28"
  },
  {
    "url": "jsPDF-1.3.2/test/test.html",
    "revision": "1e1216bb2292b7e09d4fd0cf03489fab"
  },
  {
    "url": "jsPDF-1.3.2/todo.txt",
    "revision": "006790e2e5fc9a7e7fbb4a523569c692"
  },
  {
    "url": "manifest.json",
    "revision": "2271e892ba7fc8636c9a851ddb6ba614"
  },
  {
    "url": "offline_bills.html",
    "revision": "50d101dbf92db2bf53c8806266b64420"
  },
  {
    "url": "pdf1.html",
    "revision": "450da6f76d1f4a646cc8b96b2b1d1f5f"
  },
  {
    "url": "practice.js",
    "revision": "0d2022f698467ce471961ce8c93ac3eb"
  },
  {
    "url": "reprint.html",
    "revision": "0f408671b84d6b5b0bca7b4841a67bd3"
  },
  {
    "url": "unnamed.png",
    "revision": "7e711d8ecc9ca875c56d875cb999560b"
  },
  {
    "url": "unsaved.html",
    "revision": "9fb8cce622e2e225046a5781e7d3e657"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
