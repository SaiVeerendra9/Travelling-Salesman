import React, { useEffect, useRef, useState } from "react";

import axios from "axios";

const TourMap = (props) => {
  const googleMapRef = useRef(null);
  let googleMap = null;

  const locationsList = [
    {
      lat: 51.483548,
      lng: -0.009691,
      crimeID: "447a81a19157c2f6ef97accacebaa66d8153e19ca43c16ca452e6d8d447823",
    },
    {
      lat: 51.513075,
      lng: -0.118888,
      crimeID:
        "112f8b2a663198263314a16a8b52f1f6835cefcbcf0a35388c98ee5db23dd82",
    },
    {
      lat: 51.540042,
      lng: 0.076327,
      crimeID:
        "1b679ce8cc565f83868ff4a0829af95442b51ffdf4366341a850c6f248f7d41",
    },
    {
      lat: 51.500839,
      lng: -0.418139,
      crimeID:
        "1d2872ccd061abc7b350b54a55a3be5309f19382ccac26d2f4a55e53e3fdde0",
    },
    {
      lat: 51.46327,
      lng: -0.134987,
      crimeID:
        "28449b49ea4cf6214292dd19df4cf7700fab064cb1be33219eaeef6fbf0e16a",
    },
    {
      lat: 51.492689,
      lng: 0.063946,
      crimeID:
        "6b745f8b2ac34e26345bccfad2dc9b8901ee2d905e2beab3457cdd366ee93d1",
    },
    {
      lat: 51.542493,
      lng: -0.198751,
      crimeID:
        "6f98975ecfe326d5e13a691623426c80d43b20470dc2d15e62e192fe0567ce6",
    },
    {
      lat: 51.49214,
      lng: 0.01742,
      crimeID:
        "75d9ab17bbcc3ed268f8f608635ffc63bdb5992566b424d7268e6228cfcee38",
    },
    {
      lat: 51.575913,
      lng: 0.108427,
      crimeID:
        "7b1831dd1e72101f4bd788777c8a7182c5df8d58fc7ef56f4118728cab4bcd6",
    },
    {
      lat: 51.559728,
      lng: -0.097732,
      crimeID:
        "7df64cd68ac7124133805f23cbd44beed1c7abe7caebf32d636def70b8ed4c1",
    },
    {
      lat: 51.456633,
      lng: -0.195253,
      crimeID:
        "7e4bed22d78d47d660d835fe0f585da5256fae1d49b6f6a3117b4de884f5d8a",
    },
    {
      lat: 51.620426,
      lng: -0.060842,
      crimeID:
        "7f7192e08b7c098cd315097f114e19f6e53c7a0c415a655d983067bf07a0def",
    },
    {
      lat: 51.568804,
      lng: -0.395826,
      crimeID:
        "8028e68510231d179b919f2d5c46ee5c59cf0e0916e342c523a3da6882b4b46",
    },
    {
      lat: 51.461387,
      lng: 0.11003,
      crimeID:
        "82fe0dd600b32e7ec4295c14772991e2dffa2f9e07c162e71b90bf42e96c3a7",
    },
    {
      lat: 51.516965,
      lng: -0.316302,
      crimeID:
        "8f29dc31e94d60f43eebd7006466d1b9cceac90ef434beb939673daf8397f15",
    },
    {
      lat: 51.570824,
      lng: -0.081064,
      crimeID:
        "8fb428352704b4665200d8406bd71a16689681af18eca9bda99f108db9cec4c",
    },
    {
      lat: 51.488386,
      lng: -0.286444,
      crimeID:
        "916917fa5d47e29573aa230f3b7d255de462bb01d3dda7691b43d724d026d4a",
    },
    {
      lat: 51.568875,
      lng: -0.412302,
      crimeID:
        "9571c97f43ea9b59e63be2a0f5d03f8d382bbda7a98a0a4e341b06fd0986e93",
    },
    {
      lat: 51.404326,
      lng: -0.173402,
      crimeID:
        "9f1ad1fd73bbe58f8ec0f206010c282b58795f3817f68e547639e09910e2d42",
    },
    {
      lat: 51.537349,
      lng: -0.14054,
      crimeID:
        "a682e196d41c32e7e24da8a50ad9ff9c34b16f4aca486b89fa542a4a9188b5c",
    },
    {
      lat: 51.480916,
      lng: -0.23688,
      crimeID:
        "a72b315ae3e85f883c28ccf512f6f96ab5ce5b940dd531edab96291d5d31a00",
    },
    {
      lat: 51.533392,
      lng: -0.091246,
      crimeID:
        "a9293611b8386f5e57c70cc600c6a75bae053ed0dbaaefe07474c399c6bff1e",
    },
    {
      lat: 51.53602,
      lng: 0.010867,
      crimeID:
        "b48d49d03b0a92ecf71d576368134805faec377cca00040a83f58d421b400a2",
    },
    {
      lat: 51.614863,
      lng: -0.326938,
      crimeID:
        "b4d69ef0aa0b387b1029a07dd94abc05893036d36834fb09e13990f80d56bcd",
    },
    {
      lat: 51.619443,
      lng: -0.077598,
      crimeID:
        "ca61b73091757c4e024303e24050ac1bc5202337da4bedb0fd83d3626dca598",
    },
    {
      lat: 51.515434,
      lng: -0.175432,
      crimeID:
        "cb2b0acbe47756621ce929e109ef6812c14d1732638122874a7f3d613cca409",
    },
    {
      lat: 51.400562,
      lng: -0.180597,
      crimeID:
        "cc14d7da5e2284e4e740cb74a28a9f9272a45aa8a322cafe2d3b4864d2c4459",
    },
    {
      lat: 51.485038,
      lng: -0.203292,
      crimeID:
        "ccf4e1c29f5674a34accf86c213c362faa8be55e49ec6eb6b9bddeb62a7ac7b",
    },
    {
      lat: 51.506217,
      lng: 0.104229,
      crimeID:
        "d22d63889b39a9751fec80e1c5719d386cdeafd48df1701ef8c5ed090f328a2",
    },
    {
      lat: 51.616224,
      lng: -0.254319,
      crimeID:
        "d7bc2241dc226478207328d071a7315008359e5541f5dbdb0033e661c1ba74e",
    },
    {
      lat: 51.519946,
      lng: -0.142662,
      crimeID:
        "e001473c7e564bffc65a6b850ed48b7b760c3a07c51fc1508addd2cab768ff5",
    },
    {
      lat: 51.518422,
      lng: -0.073278,
      crimeID:
        "e6299675de5708c3807d9c505cf6e088c3acad78b0e0cf9c8e4f804c2b9db58",
    },
    {
      lat: 51.540987,
      lng: 0.085412,
      crimeID:
        "ee3642671c2d3b8b89b4cc08d30e91712754c2684d94605f67913f5b17f546d",
    },
    {
      lat: 51.505414,
      lng: -0.088338,
      crimeID:
        "f6ed9f5cd8dd88b333c84e68f2c0437f92ce0ff7429bdb6494c560374b10f92",
    },
    {
      lat: 51.47953,
      lng: -0.110317,
      crimeID:
        "10126803392d956df928e1dbd24e84a31e81c6d3333e25fe7c1d99bdd5c573ab",
    },
    {
      lat: 51.400999,
      lng: 0.017404,
      crimeID:
        "10418448daacdee2b5f7f8ade02d37ef258ebe2e34275f9f45f6d0751c43a633",
    },
    {
      lat: 51.605036,
      lng: 0.219563,
      crimeID:
        "106a94a7df12169d5220049d9e857d25efa807d7b23398dc48905979b3ec3298",
    },
    {
      lat: 51.509398,
      lng: -0.250869,
      crimeID:
        "10b7c861c676b9e8e68fecbd86020056ed1fffce5f25cbbe3201cafa197d102d",
    },
    {
      lat: 51.502367,
      lng: -0.090684,
      crimeID:
        "10d68e95731201300a5713bd568333496ceaf568ace90cce0a6dd27416646b61",
    },
    {
      lat: 51.509097,
      lng: -0.146936,
      crimeID:
        "10e53327cb2ee72f7f6058fa83b1c0190acb0497d55c9e639a21b044f25ae31c",
    },
    {
      lat: 51.558158,
      lng: 0.074527,
      crimeID:
        "114f0bb6e12e85fec6c26c29d92d05c1cfc2519918190e6addf750c46d4f2703",
    },
    {
      lat: 51.499842,
      lng: -0.163434,
      crimeID:
        "12620ce39b53c7df6d92bbbac391695eceed3ca511e6dd8ed3a3c4e6c9869f18",
    },
    {
      lat: 51.560038,
      lng: 0.070904,
      crimeID:
        "12b2be0e989567fc48a08538a2cb47698182d408db8c6d3fa1886063787db60f",
    },
    {
      lat: 51.57646,
      lng: 0.089605,
      crimeID:
        "13223ef0434193ae80a22cd31433e9971167cbfe0efd5f491cfdd1429f8e61cc",
    },
    {
      lat: 51.51236,
      lng: 0.200686,
      crimeID:
        "13cdef4fb41c81d56e7ba0c375339c116405a5ceb356063e286833d773931838",
    },
    {
      lat: 51.540595,
      lng: -0.144307,
      crimeID:
        "15d66662c3e448d362d6153f0c34033d4a08f8c1e024dc70a9b5b97e78d6cb16",
    },
    {
      lat: 51.508409,
      lng: -0.123461,
      crimeID:
        "15f46001bd3950c810ff1f9a71c23b4324731b81d9fa33878805dd6650793619",
    },
    {
      lat: 51.5186,
      lng: -0.123056,
      crimeID:
        "163f508cb9ef304900f275a667d784f75ee17eadcde04ab1ec46c2340e1adc1f",
    },
    {
      lat: 51.549418,
      lng: -0.239714,
      crimeID:
        "17bbfbc5231771fab72489cb897c219b374df95752957bf8c5efb2ec567304bf",
    },
    {
      lat: 51.539425,
      lng: -0.142748,
      crimeID:
        "17ef886579f29a9b3fdc8b505aee2ef0747bcbc2813c73459f49d0317f14dddd",
    },
    {
      lat: 51.5353,
      lng: -0.296968,
      crimeID:
        "1834720bec978b5c16a0dd4b0dac93b1acc84f9be667cf2b34b9dbc4d53436ec",
    },
    {
      lat: 51.462029,
      lng: -0.137787,
      crimeID:
        "18b0580f5d467d39fd0c2632505b77a6acfe3674f6579638e753d26558198adb",
    },
    {
      lat: 51.561719,
      lng: 0.220916,
      crimeID:
        "1930851c21ba64c3b69590f3d62ee6cac12b0d63d662dc4cd150fa3f4f15aad7",
    },
    {
      lat: 51.604769,
      lng: 0.056,
      crimeID:
        "1a0302e45fae84cccb38bc505a690b29a099481e56ca4b084b06ad61c1c36cae",
    },
    {
      lat: 51.550118,
      lng: -0.045933,
      crimeID:
        "1a0583999a0204303777090f73e76fe3eb8a7120c9f6d76af6267a5707afaeaa",
    },
    {
      lat: 51.519775,
      lng: -0.071852,
      crimeID:
        "1a073ab5cdd7e91eb0e5ffdfad02639a1f8b1eedff83df2333366773e5102057",
    },
    {
      lat: 51.525009,
      lng: -0.164973,
      crimeID:
        "1aa2013e02300b9bf6ee05670aaa9806dce694c6941d28d90a2af77a2dde0a06",
    },
    {
      lat: 51.40768,
      lng: -0.297572,
      crimeID:
        "1c3d9a3dc2e67c0929f6f1959c98141c57c1d5f95fffcd3987bd2c824767713f",
    },
    {
      lat: 51.568193,
      lng: -0.227085,
      crimeID:
        "1c7daffa47b2936d529d13b14e2c1f6eec7578fdc62c9ea280a2de3b107c3faf",
    },
    {
      lat: 51.589891,
      lng: -0.174833,
      crimeID:
        "1c9f7d756ddb9617c5b8f20bdad21918d90473569faadd823eef60e089e74a15",
    },
    {
      lat: 51.549348,
      lng: 0.007704,
      crimeID:
        "1cbf2ae8e2c5127593936aedda364153397c45ce9b564124c2129addfbd19cb3",
    },
    {
      lat: 51.527833,
      lng: -0.021673,
      crimeID:
        "1cc7754146657ccfb511845298cbbf3c11296964812b2a5e55f95fe9876bb3a6",
    },
    {
      lat: 51.508231,
      lng: 0.043739,
      crimeID:
        "1d04970bca67d676e0e9da4ee7643379de4f6bcc4f6973d238cc565fd16987b5",
    },
    {
      lat: 51.497058,
      lng: 0.118445,
      crimeID:
        "1f2cd22ebbee1ed12ae4f310d8a239d3224f053c50787cba46c737c30cdb8ffc",
    },
    {
      lat: 51.536406,
      lng: -0.461014,
      crimeID:
        "1f5650564ae496751a64d1e1a7398e4a4855fa6a4dd852a45fdf9b29192d0c60",
    },
    {
      lat: 51.607134,
      lng: 0.032277,
      crimeID:
        "1f871994fe79c43af6169feab05ff03ab0e1cc304c1dfd10c267e487fc7e85ee",
    },
    {
      lat: 51.44936,
      lng: -0.215976,
      crimeID:
        "1f982b98681b51ede4aeaf0b8e47725b6bcac414eff0263205a7e9b4a99ceae0",
    },
    {
      lat: 51.475576,
      lng: -0.138028,
      crimeID:
        "1f9dec2a612a94ab52189510401b5ea6e666b3a164b063ceb95b33ca51bc2856",
    },
    {
      lat: 51.679836,
      lng: -0.048564,
      crimeID:
        "215d2b6b64740b1fab32b34c61232741e53c7837b619e5e1ebeb0819bae50ed1",
    },
    {
      lat: 51.527366,
      lng: -0.25759,
      crimeID:
        "220a436069e17fd8bd507b1336d1b93ee59c1b8fb29c7dc6ee6b3dbd2980868c",
    },
    {
      lat: 51.546578,
      lng: 0.029116,
      crimeID:
        "224764e652cbf2a71a8a0ec515b3b17529005a250a99083775c51f3bc494dffe",
    },
    {
      lat: 51.587939,
      lng: -0.020073,
      crimeID:
        "22995d459e7c83debfd3ce78c2484183ca008200bc44b923bde748f1816ba3ae",
    },
    {
      lat: 51.547152,
      lng: -0.105771,
      crimeID:
        "22d1bc519a037d1e9dbf95492cc8eee31199a5eab45d247dc5bfb907a84ffb25",
    },
    {
      lat: 51.493203,
      lng: -0.047461,
      crimeID:
        "233650ef2991156c3ae47413c5b2cf2a39bc11961af21b5a73743f5255f677a4",
    },
    {
      lat: 51.54276,
      lng: -0.181132,
      crimeID:
        "23a9409899767a4bf468637308089209eaa24ff016fa697235ffb7b2f101ff43",
    },
    {
      lat: 51.636226,
      lng: -0.052682,
      crimeID:
        "23aca5cede5cd07ae9240463ced9a6e9e12e99e0361edff4cace282df02d2c1d",
    },
    {
      lat: 51.473158,
      lng: -0.168955,
      crimeID:
        "23be0f37ca10d4a8d7b034ee7361a7e33252fdfae2ba2c94c5fd85ce797c232d",
    },
    {
      lat: 51.577486,
      lng: 0.182214,
      crimeID:
        "23dccbc83b397ed7ec76d40b8c5eaf29e8da86fd42eefd842a18c23212a38c6e",
    },
    {
      lat: 51.454714,
      lng: -0.064836,
      crimeID:
        "23fd50991eff185642403d91e24e2d07db0dca3019b4844cc0325e472f9a14f0",
    },
    {
      lat: 51.560526,
      lng: -0.011872,
      crimeID:
        "244d7265ffbae5c9d5bcc50a8ae16ed88cbee64efebdcbbd8b25fc1185734272",
    },
    {
      lat: 51.384626,
      lng: -0.082927,
      crimeID:
        "252e2e71806aff71108e557c5c81c66b25bd8e8e1c2c17915cf8a3141113db46",
    },
    {
      lat: 51.534355,
      lng: 0.125223,
      crimeID:
        "2585df4e9ee68534349f2bf43a99ba8c27a79f28023a30ae45e6ede3fb0d2f04",
    },
    {
      lat: 51.497252,
      lng: -0.167975,
      crimeID:
        "25e0e76ed4d71ff3545e9a5786cf719565d83d783cba30a4a1784d102b161a04",
    },
    {
      lat: 51.58538,
      lng: -0.018712,
      crimeID:
        "276681d9b66bf10d8f852dbd169f5c06c8304b1105d520e77eeadce35715da87",
    },
    {
      lat: 51.538028,
      lng: -0.13349,
      crimeID:
        "277a23758ad42ec284a9cb21da499de5f0e693f90263959a14e357699c5f4751",
    },
    {
      lat: 51.576143,
      lng: -0.14398,
      crimeID:
        "278e6fa3c4ee8f70b9a2ae71413d8dbb62898eddfe597058e8ac3b6e2137cd8b",
    },
    {
      lat: 51.48347,
      lng: 0.098933,
      crimeID:
        "27d01ec1a5a3031aae3b6789b5f59da73a48f4b10796ad3777770f86d3ed5aeb",
    },
    {
      lat: 51.408918,
      lng: -0.215178,
      crimeID:
        "28467f01b0610f6c103d0a69a82c2e960e4f0b9be1e64c9e3f9a4241470ba3e8",
    },
    {
      lat: 51.572725,
      lng: -0.008424,
      crimeID:
        "28c8dc6efb43f3e529065380899f5e531082ebb957e79211d005ba6b9582d0ae",
    },
    {
      lat: 51.601323,
      lng: -0.099085,
      crimeID:
        "297d6ce354013e7077ec71908331e79e595fb8eeffe451344c30a743576d8c20",
    },
    {
      lat: 51.489662,
      lng: -0.163368,
      crimeID:
        "29a5b752f6c01e171c9a353b4b9fe81325ca7513a53bd8c564e4cb02a067dfe2",
    },
    {
      lat: 51.527701,
      lng: 0.11524,
      crimeID:
        "2a1b26cc704f376f17e829863f2100b9afe5bfb7bcebefa906769cea9db3927f",
    },
    {
      lat: 51.461078,
      lng: 0.193726,
      crimeID:
        "2a5e6e3827392cc6444c4b820a72bc5788dca895c498d0ba57197f0f0decfdb9",
    },
    {
      lat: 51.517255,
      lng: -0.20077,
      crimeID:
        "2a98a3b14e712d60ae9bf77e3f1ee298a9f35a7f7de4bf54d547600c6623f884",
    },
    {
      lat: 51.583803,
      lng: -0.325639,
      crimeID:
        "2b6284167bddeb2f37c355293f891426733a4e126c588b871cf3ecc6ade8e6f9",
    },
    {
      lat: 51.554352,
      lng: 0.108946,
      crimeID:
        "2b7e2f79d2120b12c0891cd0e160f01bb63413aa90e19da37f146d6f128d9396",
    },
    {
      lat: 51.56381,
      lng: -0.271476,
      crimeID:
        "2b9294746022ce08892c431fe9a74f5fea221e12adff822a1dd6e8d525179045",
    },
    {
      lat: 51.48753,
      lng: -0.097339,
      crimeID:
        "2bf3045657eb3ce613db2ae69709fee2c1a59f75c45003fb4982aa6fcaa7fe42",
    },
    {
      lat: 51.506998,
      lng: -0.113994,
      crimeID:
        "2c04e2a48f13526a9534e27475428d5797f56515bb68a77f4940dbba82aa0647",
    },
    {
      lat: 51.445563,
      lng: 0.103109,
      crimeID:
        "2c83eb57b8db05d28643830d80226e6c8beed56db99834f12f45e635bf2829fb",
    },
    {
      lat: 51.402299,
      lng: 0.096983,
      crimeID:
        "2c9ff3717311198c87c2032a6826d917f812c3f7dacbe04faec5083d1f2497b9",
    },
    {
      lat: 51.459853,
      lng: -0.44738,
      crimeID:
        "2ca83f3f3f1dc35fd9938d5acaf5e07fdf9ffb58b595491b4d4f9eea06815f40",
    },
    {
      lat: 51.656002,
      lng: -0.08779,
      crimeID:
        "2cc22220b135156f55d40daa34a1bf5b5b7a7c5f7ea298b55b18ac6cfa7af637",
    },
    {
      lat: 51.490825,
      lng: -0.111492,
      crimeID:
        "2d8cf538104351ed959b3d228860dd9615583b7826bc4eaad967417572f49fc4",
    },
    {
      lat: 51.493621,
      lng: -0.138459,
      crimeID:
        "2d93b380bb50eec1eda10ce05a2af56c081f4eb6132e6754a4d3aaadf3450735",
    },
    {
      lat: 51.400817,
      lng: -0.114785,
      crimeID:
        "2de0cb3d38f40b9c34a5a69ede8807f3902fded1c56a3b48792c291b9be7367c",
    },
    {
      lat: 51.48573,
      lng: 0.014732,
      crimeID:
        "2e4a774a5da0944a8c226cdb39c922f12b3b8036de5ae0a3471c7c2867574aa7",
    },
    {
      lat: 51.475251,
      lng: -0.073932,
      crimeID:
        "2f0b9c55504ce81290af6c49f78f154bdc59d7db862117420a2370939e6480e3",
    },
    {
      lat: 51.513827,
      lng: -0.142363,
      crimeID:
        "30242a210964ba37a9a1cf24ca0211f77c1fdaea34975f0ce4593865d207c283",
    },
    {
      lat: 51.54757,
      lng: -0.11047,
      crimeID:
        "3025b3352b9e59e2210e7adda31521a0bc09da2ceec512f3c3f737280edf1a4e",
    },
    {
      lat: 51.44431,
      lng: -0.21682,
      crimeID:
        "302837328db997e5bcb3f5bdf49802ec5ccd977c737d7c57506d4ceef887a813",
    },
    {
      lat: 51.513708,
      lng: -0.140004,
      crimeID:
        "307ae51b6be97fb1acf4ed9293ac03ef31b14bbf34a53630d9d20587f68a6608",
    },
    {
      lat: 51.509645,
      lng: 0.02599,
      crimeID:
        "30c74704d8d3d5ac9efe976ae469752a47e2eb5814aec07e5989004f5eaf37cc",
    },
    {
      lat: 51.47597,
      lng: -0.152167,
      crimeID:
        "316eaed3af759b8205ff89468c771b261725cb64c7ab4286bab888ddb8cdc716",
    },
    {
      lat: 51.534753,
      lng: -0.140141,
      crimeID:
        "31ef167a1143039224fc975b71b7f793f05c9d1a9b6f2545f35e6cc2f8cbd42e",
    },
    {
      lat: 51.549934,
      lng: -0.141383,
      crimeID:
        "320a0b792ec4e6b12957ad8334d8ed973ca959e8943b9c829b50f023c5e58d22",
    },
    {
      lat: 51.514195,
      lng: -0.145735,
      crimeID:
        "334c78ae034f45396b507d54f6eda218858d022970388f325e5cee3fe6944dd1",
    },
    {
      lat: 51.50033,
      lng: -0.017778,
      crimeID:
        "338f9cd2f0730c9d3ba886ddd334905cf7884d32fe5d81779626c8ffc44f0ed5",
    },
    {
      lat: 51.577793,
      lng: -0.201469,
      crimeID:
        "34db30939ab439eadec0a3cb8d6b7e1a3518cae87661695e4ca3dd94a5336c1d",
    },
    {
      lat: 51.526984,
      lng: -0.089842,
      crimeID:
        "350e2e580a316007b2563c26495ff7d106b18f87b37342c34501a0499431b369",
    },
    {
      lat: 51.514684,
      lng: -0.140844,
      crimeID:
        "3529eabdc26793bf6f3e3664f1f7170379545b44930ce976195132da5d1d9ff6",
    },
    {
      lat: 51.421945,
      lng: 0.001022,
      crimeID:
        "36f1d5426ba57613caa2f4747d1aabcbd8b80a0f7f16fd34c8c07b741dcff749",
    },
    {
      lat: 51.565977,
      lng: -0.107658,
      crimeID:
        "37086f41d2f9ed6a382a6894ccb68c2cf205e0cadaa72501cd0c0d476981fc21",
    },
    {
      lat: 51.473328,
      lng: -0.385556,
      crimeID:
        "378b06a7b27a520b135ad6bd61b483b2dd69e8860616864df695ed7c998ec311",
    },
    {
      lat: 51.530455,
      lng: -0.106464,
      crimeID:
        "38b586341e1b6d257a0f58e11bed841d388ffcf35d3f8bda62427fc5aea647af",
    },
    {
      lat: 51.424692,
      lng: 0.104999,
      crimeID:
        "39867f99d64be3df89185d549312247ae2d47596c53a220d177ba357bff9686e",
    },
    {
      lat: 51.381824,
      lng: -0.090905,
      crimeID:
        "39aa3d3003697a22e634941816694f9e893c325961e17a07490c966d39503f24",
    },
    {
      lat: 51.504444,
      lng: -0.418792,
      crimeID:
        "3a5fa95dcb20b95388974bc2f2ed3baa4aaaee45592aca31d62402036fd4709f",
    },
    {
      lat: 51.428772,
      lng: -0.324134,
      crimeID:
        "3a935f5c2c34690d392fc88b67e77d32e28b8ef35cd236628891ef873af5fe9b",
    },
    {
      lat: 51.358411,
      lng: -0.21842,
      crimeID:
        "3abd400cb57e1f766ca08510f4b1382a959a2a6badec409e1d2dd5de163824ba",
    },
    {
      lat: 51.407325,
      lng: -0.130895,
      crimeID:
        "3ae8b36d00e705f54f0be7d0a33a0b1d68c6d542ac503f2931d2315242acbe21",
    },
    {
      lat: 51.508087,
      lng: -0.124122,
      crimeID:
        "3b58a6c7068fe09040aefcb8a9051b6db7729f0e781d933f25fb70cfcbdff1b8",
    },
    {
      lat: 51.551486,
      lng: -0.452096,
      crimeID:
        "3b8ae8a86ac9397540e75954d5ce179e8463efcb6132e543e8966d5e12112325",
    },
    {
      lat: 51.460693,
      lng: -0.120538,
      crimeID:
        "3bc65672a9745ed841d5de33ddf228a747085a4c65ba8185791fd9bdd75eae5e",
    },
    {
      lat: 51.58196,
      lng: -0.083525,
      crimeID:
        "3c354e1f1f586582cc03d62d8f1b2d7c084351f94b1b5d94aaf9b2fa286cdfcf",
    },
    {
      lat: 51.496888,
      lng: -0.094356,
      crimeID:
        "3c55e8a99bf309aaa8995566a6ec97d9c2874da39cf1deedb0ac960e00c8a2d7",
    },
    {
      lat: 51.588406,
      lng: -0.017873,
      crimeID:
        "3ca55bed04d4515f8064cd2d6d003084c09579528ade2bc84447d8b24cf53257",
    },
    {
      lat: 51.44692,
      lng: 0.103142,
      crimeID:
        "3cdf3f666851e58caa05da4aa28bdfeb965336cff977b3daa25c4ec93944972e",
    },
    {
      lat: 51.488158,
      lng: -0.068634,
      crimeID:
        "3d5b84f80066ad492c5645a323029b3e793f9be34d95c348f51aafc4b1d6e8c2",
    },
    {
      lat: 51.511703,
      lng: -0.128701,
      crimeID:
        "3e07b821c08c3600408345d34ab02355a4026cbe31c5ebda6dfd5c0a40d780a4",
    },
    {
      lat: 51.508069,
      lng: 0.020919,
      crimeID:
        "3e1219106a13a5dd97fb5918b023385d1b7c2d2d61383764a7a49337559c828a",
    },
    {
      lat: 51.481394,
      lng: -0.024806,
      crimeID:
        "3e4a3e5314e1e6fc0cd617d278080b0311337c62cd7800ae663d912d83cea746",
    },
    {
      lat: 51.575467,
      lng: -0.034556,
      crimeID:
        "4026b5a9eb04353d8389ac005c8ffda778c0be4bc4ced0c9ef8d3142c50f5b0f",
    },
    {
      lat: 51.514445,
      lng: -0.125259,
      crimeID:
        "403b3551377583f18bc2051096f0e65606a857f99514df82f2a21d4d125c8783",
    },
    {
      lat: 51.570846,
      lng: -0.295091,
      crimeID:
        "40cd8429a853cd65eaf0d2c7572ce39e875a2971c56bae666876338fc76a47d7",
    },
    {
      lat: 51.546608,
      lng: -0.480687,
      crimeID:
        "4109ca93b02dfda5d5b08f32f4a201362df9dc8f0351d8c8faaf6cbe20227e0c",
    },
    {
      lat: 51.646539,
      lng: -0.135165,
      crimeID:
        "41149ceeb60e6f370f2c83fba27fb3eb527e567e303fc52038c540adea82b603",
    },
    {
      lat: 51.586493,
      lng: -0.204648,
      crimeID:
        "411ed269c947b00ec9c9d161d33b9187fb691cb164bbf99e37cd2b2d5e8e71b5",
    },
    {
      lat: 51.487984,
      lng: -0.194289,
      crimeID:
        "412a0e25c1392968916d63d8ee40325e5f092fa41aa009b6d8bdc4c8f1ee924d",
    },
    {
      lat: 51.593061,
      lng: -0.105349,
      crimeID:
        "413b6a591e00f6c15e3eb748714d2a61bae3cedd15a10d4faa8c0f2c12e18474",
    },
    {
      lat: 51.500446,
      lng: -0.076587,
      crimeID:
        "4151b1e398e976042a4c964096d04df8f9cc475b3101a3947dac406dc6d67403",
    },
    {
      lat: 51.426741,
      lng: 0.045653,
      crimeID:
        "41f787457a2c38168a822e1a5ca0a6b3eba40d213c4507c049ae0ccca5570cf0",
    },
    {
      lat: 51.421468,
      lng: 0.049934,
      crimeID:
        "4230aa5040f06cb8ab7e5be1b1aab8e39cc2f8b96a4a488decf4697555444234",
    },
    {
      lat: 51.545695,
      lng: -0.141729,
      crimeID:
        "432e29eb31b9d450edf46110633223ea7069332f2dd12ba089013a1d90fc726b",
    },
    {
      lat: 51.489693,
      lng: -0.220797,
      crimeID:
        "4352ddfca8d8c26a1d9a9073fdc838cc032146395daeebc7b9df14934045f5b4",
    },
    {
      lat: 51.586251,
      lng: 0.12828,
      crimeID:
        "4387c65cd898b6295bdb034914d1c22d8dbbfe34f4e5e077f5742be434642640",
    },
    {
      lat: 51.527008,
      lng: -0.096819,
      crimeID:
        "4476543ebe8284a7253e9a6266e34f3c49fe398f6553cba0b1f100380b6b50c4",
    },
    {
      lat: 51.492274,
      lng: -0.065234,
      crimeID:
        "464e9e96898453032317c3d7f7a51ca4911d656dec7cd7f01a380266e1105905",
    },
    {
      lat: 51.538552,
      lng: -0.045838,
      crimeID:
        "4711700fdfd0bf2d880ab7186af3869383fb2bd56e7427c983abc833cdef98e7",
    },
    {
      lat: 51.488202,
      lng: -0.097211,
      crimeID:
        "4817437b04235e165c024a68edbfc6b385bc5a25ddba2b02f0f7ca651b55db1a",
    },
    {
      lat: 51.513361,
      lng: -0.12833,
      crimeID:
        "482f523bd8a12fc167db962a285126aa4aa879eb1551a8f36d998bd286fda011",
    },
    {
      lat: 51.512136,
      lng: -0.134995,
      crimeID:
        "4a13394d68daeb1fa1693f131f3078aa7a8fb7a43f94b1e3e0e4b6449ee3f416",
    },
    {
      lat: 51.497123,
      lng: -0.06317,
      crimeID:
        "4a1883ae91a0be1d1fc34a4505f2fbe863d4db3547a007131389db022c480a9e",
    },
    {
      lat: 51.527333,
      lng: -0.415751,
      crimeID:
        "4a765412591c2b83e7b89f6d0434e30ac89da321f0e3cb59c1aa3280b25f00de",
    },
    {
      lat: 51.44613,
      lng: -0.124835,
      crimeID:
        "4abe1d1cf969a754f99c51dfc305bc7448098a05ad0f6e1e8447b71f944d70ae",
    },
    {
      lat: 51.495556,
      lng: 0.1314,
      crimeID:
        "4ba505190585364d965f33a5a4897c27613a7f7f934ef39155b4c2be743b5df9",
    },
    {
      lat: 51.554333,
      lng: -0.315427,
      crimeID:
        "4bdae09b1e9239a9013eedf1ecd4fbb62b8cfbbe9f105aaf11618557f2a5ffeb",
    },
    {
      lat: 51.544881,
      lng: -0.132373,
      crimeID:
        "4bdbb3cd99c62ffacae6046334bce39e25cd0f2c2971944588978b3841797aa5",
    },
    {
      lat: 51.493505,
      lng: -0.161283,
      crimeID:
        "4c9b3c399ab3dda64815dd4ca1931eb306444a632a3c06779a7d9dcd8c02bf09",
    },
    {
      lat: 51.5194,
      lng: -0.107917,
      crimeID:
        "4d06ccce0bd66293dc8ae9f03f69c75a4ccdbab950cad5178e4990d4ef1d3daf",
    },
    {
      lat: 51.46891,
      lng: -0.173905,
      crimeID:
        "4d2ca0198776cfbd0ce28714b3a56937c0daaddaeb22cb520f36e3dcc6922e48",
    },
    {
      lat: 51.572656,
      lng: -0.071621,
      crimeID:
        "4d38329ef805013189d8a793b19f14dda26f2e5141c47ed2f8779f3d7913d168",
    },
    {
      lat: 51.524979,
      lng: -0.083237,
      crimeID:
        "4d485381e4bc29464b7e3363ac67cf05b8c66b36914237a955b225fb35cae1e1",
    },
    {
      lat: 51.406986,
      lng: 0.01124,
      crimeID:
        "4d6f56f24caf1039c804f64494452f3e41a136871d129788d6700a81c864b883",
    },
    {
      lat: 51.510952,
      lng: -0.134064,
      crimeID:
        "4d80ce2f3c4209a59242c8401dbc94189f26bc8498d17e93ac2903978981eb20",
    },
    {
      lat: 51.47976,
      lng: -0.045371,
      crimeID:
        "4d9820405ed003fea4931b71fbc96229e1b5c2eb20a033e76097483177b6b010",
    },
    {
      lat: 51.568231,
      lng: -0.031506,
      crimeID:
        "4e023b96991265ec302d67d632380ba6714b94a16cdbb7fb9f85d160f85fdcf4",
    },
    {
      lat: 51.462029,
      lng: -0.137787,
      crimeID:
        "4e73681e77902ab22e29496efc3eb3e861028daea3e4d600c290284a7fb31fc0",
    },
    {
      lat: 51.455502,
      lng: -0.122652,
      crimeID:
        "4e84e99e876292ea0b6dc0e2d6844fde5583a39e49f9c4b34166c32192aa7f6f",
    },
    {
      lat: 51.590272,
      lng: 0.220417,
      crimeID:
        "4ee86010937ccca2151e4f34117094cac48dd6801600ef83aa2f2dabbb66afd9",
    },
    {
      lat: 51.468986,
      lng: -0.167855,
      crimeID:
        "4f22499a338176d136f831eadd3f51a0433503d64a12a5cbb0a2028491f22e22",
    },
    {
      lat: 51.530394,
      lng: -0.143693,
      crimeID:
        "4f37cc68aedabd97a444ead2f6c49edaa5c4962574e9e96c6f30ac4262a96dd4",
    },
    {
      lat: 51.51179,
      lng: -0.131925,
      crimeID:
        "4f67f31e08b8c5000ef5059d76ee2f0828ce70695f4f68af352c97a49f3c3355",
    },
    {
      lat: 51.510942,
      lng: -0.131196,
      crimeID:
        "4fb86145c1d3c8d688b9da6914f1e27457a52706191ef0c421b6fb69055e9a50",
    },
    {
      lat: 51.543677,
      lng: -0.477901,
      crimeID:
        "4fe9e53620acf3e434551b3847f81a501650a792e0f2c153da406efa63e292c6",
    },
    {
      lat: 51.529035,
      lng: -0.140778,
      crimeID:
        "50977127f4c0442fb0e651ff621eb81ff1fd0162dd147b0424613472eae3361b",
    },
    {
      lat: 51.54558,
      lng: -0.075477,
      crimeID:
        "51337145aa10b55d317849db1d8d61ec7b00c22fe5a14f088cdf816c62faf4ce",
    },
    {
      lat: 51.536887,
      lng: -0.047884,
      crimeID:
        "51d1c7efc7cf4bfae337b2ee3211ec504f3bbeff9ff407d76a27eefdb1e0428d",
    },
    {
      lat: 51.454274,
      lng: 0.003127,
      crimeID:
        "52a069b3898e08eec0b9bcb8096313acd95ee197995b1bb0f7a47b423f2d15fd",
    },
    {
      lat: 51.393796,
      lng: -0.204951,
      crimeID:
        "52de235a4f03c076e38ee89642429ec4fac20fa73e04045eecf3e7a14e60598c",
    },
    {
      lat: 51.525296,
      lng: -0.131609,
      crimeID:
        "5377ec4071bedd8d17004083a1f5cbec36973a15dc625c5e03ff2338fd936aca",
    },
    {
      lat: 51.513406,
      lng: -0.131715,
      crimeID:
        "53b5c0c1e820a9e094e5654bcbf6d9db769aef9f4138000ca3d9aac9b4f10777",
    },
    {
      lat: 51.52166,
      lng: -0.09093,
      crimeID:
        "540246be30f9025dd77432ce12863e2da0a850d5c431b688716e81cc292b5bfd",
    },
    {
      lat: 51.592759,
      lng: -0.306788,
      crimeID:
        "54ffda045822eaafdc8eda556936e58842e7dde0cccc08253f2d892889e87975",
    },
    {
      lat: 51.596899,
      lng: -0.24128,
      crimeID:
        "55f8739f3c7d0ae37d5997f9e2c648034b3f2061258af27bcc7a6431997cfec3",
    },
    {
      lat: 51.354449,
      lng: -0.09645,
      crimeID:
        "56b2101cb021c0df6775d4204d6be1317f4d226a136fe5a23f534bb91635b318",
    },
    {
      lat: 51.399089,
      lng: 0.018628,
      crimeID:
        "56fd56d25defccb51296050ebc6eea588316175c61986473a2177e31dfff0621",
    },
    {
      lat: 51.521135,
      lng: -0.434272,
      crimeID:
        "57bee0d891a4078ddc8a2eeaf48954d703535008f661430c89812302ee2bad43",
    },
    {
      lat: 51.46613,
      lng: -0.276595,
      crimeID:
        "58afcbec01314900e7e7ecc4ce10190fac95ed6f08043947c9ffc5f88cf09a87",
    },
    {
      lat: 51.586857,
      lng: 0.025958,
      crimeID:
        "58c759eec1ef9dddb209b764b0fc7b65b40733d11dd66d9ae27ef0776559e51c",
    },
    {
      lat: 51.636943,
      lng: -0.041192,
      crimeID:
        "58f96d5b2c176cdfdf0d7124a0d1c90e1f8ef6c67d0286bad7f9e087c0014b0b",
    },
    {
      lat: 51.407393,
      lng: -0.18093,
      crimeID:
        "59551a4ca990582da9e61ac7e93acf2d0e457be7c1fb59998b92b37c2f195f4d",
    },
    {
      lat: 51.446382,
      lng: 0.152121,
      crimeID:
        "595b1a56f32a95e8b83e4531b4bbc3a0f7db9b49553630f1a54ae4bfff2afe1b",
    },
    {
      lat: 51.579181,
      lng: -0.399098,
      crimeID:
        "5a7cf2850b7d8a84e5cf7882efa309e8d8b1c8c8b4f06416cdbff37df6b23239",
    },
    {
      lat: 51.410088,
      lng: 0.07574,
      crimeID:
        "5acb780e5774d2601f8ce2bef217ebf625a0a217058129caa871cee61c6b4447",
    },
    {
      lat: 51.513647,
      lng: -0.18196,
      crimeID:
        "5add03eb74bd4e84028c57d163594a49597349639468c7135d88f76e73d116db",
    },
    {
      lat: 51.505474,
      lng: -0.192517,
      crimeID:
        "5b678d439bf693dbd2cb9781269384c21c85fccb36423657413980612103f4fb",
    },
    {
      lat: 51.53602,
      lng: 0.052438,
      crimeID:
        "5c07d62af681a108b4cb659f4d2cb6b30dbcf50bcc2810ecf143116fa7f85357",
    },
    {
      lat: 51.556292,
      lng: -0.361011,
      crimeID:
        "5d183a2e0a2bf2c34056cac523addec84120e732cf4a7d3f65330bad5d7a7ebe",
    },
    {
      lat: 51.534988,
      lng: -0.34666,
      crimeID:
        "5e48a1ccd9fa83f12eba59ffb4d4d357003aeecb553ecbdf0ea582887bb9fe9a",
    },
    {
      lat: 51.469029,
      lng: -0.096036,
      crimeID:
        "5f1c243efb38a1c543633abd0c6a21ba74e748ab0e4f200b96ba28fef264e77b",
    },
    {
      lat: 51.547257,
      lng: 0.078675,
      crimeID:
        "5f5c03df9cc601cb4650036eec93542e542b243ef09852f72eeb636a7f1594af",
    },
    {
      lat: 51.405141,
      lng: -0.165692,
      crimeID:
        "5fcc48e873d3595283c9eae427d2aa10b49b77e035c8e1c13c7de9ad5eeff988",
    },
    {
      lat: 51.323819,
      lng: -0.10296,
      crimeID:
        "60b95b84d966be77b6f18fb1611933a022381da11640be5a96ab001a7dafdf68",
    },
    {
      lat: 51.529254,
      lng: -0.05614,
      crimeID:
        "60f62ec81fe1027b07b05ca367a52c58fe789b7ec2f17afe6234ee59fba71eab",
    },
    {
      lat: 51.45539,
      lng: -0.127464,
      crimeID:
        "611f24bea2f4dea18312261265e3fcd5d746a24f81db0f7777626bf30e33e026",
    },
    {
      lat: 51.507942,
      lng: -0.23052,
      crimeID:
        "62c8e447dfb13ce08c0fb69b36462696fb4b5b4aa4962c4214fd6b491451a5df",
    },
    {
      lat: 51.554578,
      lng: -0.05294,
      crimeID:
        "63199bbdfdc65e4718e83225ea8159cef6c277292f1338ee35d1f602523b71c9",
    },
    {
      lat: 51.359704,
      lng: -0.144756,
      crimeID:
        "63b352c3d34fface98d271045d48d3b878c7a35aef15553114fd8804d47ead04",
    },
    {
      lat: 51.387306,
      lng: -0.188065,
      crimeID:
        "63c10dc1395dbcfbf7f56801f33b697c689a75c6b5911092f6909a6e88e04f3f",
    },
    {
      lat: 51.409953,
      lng: -0.145742,
      crimeID:
        "6403a2220af646cc3fe51b4fdf3ac9dcb926813bd6328212cd73f98db52fd1d4",
    },
    {
      lat: 51.435474,
      lng: 0.005527,
      crimeID:
        "647a6f762fd73297f5ab862627d49c52dc1a3935d2685f52f5f27d1582635c3d",
    },
    {
      lat: 51.432096,
      lng: -0.130689,
      crimeID:
        "647eb2677337fa90617e59f27ce0ae7b697b2e5a77db1a0dc5099f22e4a9e57f",
    },
    {
      lat: 51.535373,
      lng: 0.196879,
      crimeID:
        "66c5a1ead66bf1d37b64788ebcd176472b3d68dc27af456086b41942f9fd6ebf",
    },
    {
      lat: 51.566119,
      lng: -0.417289,
      crimeID:
        "672aa40db4cacd4044eb547df86a451e4a19f3310018b3381bae71776dabbb28",
    },
    {
      lat: 51.47611,
      lng: -0.198156,
      crimeID:
        "68031ec8894f937f6b2e0d952351df17579ca9045df824afc2bd3aebf6b4dd65",
    },
    {
      lat: 51.477401,
      lng: -0.090503,
      crimeID:
        "6806cec5ed17eb57ef485d7a9ef5c5fba339a1841d9a29650f5e3e7d47735be3",
    },
    {
      lat: 51.518735,
      lng: -0.057886,
      crimeID:
        "680b665f285e9b955d978ba6e54b10f8562b658228ad2a1b176d5da1c603ce3f",
    },
    {
      lat: 51.396268,
      lng: -0.100927,
      crimeID:
        "68aacc6d2b9142bfd7bfed8bd25cac4c7cedbb3dcc02c269ff6f21efa6fa7bac",
    },
    {
      lat: 51.371195,
      lng: -0.10254,
      crimeID:
        "68c849538de69a4e0dec5d9b09c4429cd5d5269bd1ef339c7d7d8a17c6bc7b1e",
    },
    {
      lat: 51.528645,
      lng: -0.128136,
      crimeID:
        "68fe8858372f760a97b9ae1700f5387a924f5ef2a0ec84057d914808b0a46e26",
    },
    {
      lat: 51.563817,
      lng: -0.443468,
      crimeID:
        "6928c04808bcce8fec108c37626930d0291bf9277316df6c3f1015091c5e53f8",
    },
    {
      lat: 51.511703,
      lng: -0.128701,
      crimeID:
        "6a49ccac8c508acb24e193b73ee7351e70eb8d4ccd0fa467e84c78899126ed74",
    },
    {
      lat: 51.558988,
      lng: -0.250049,
      crimeID:
        "6a9e3166411224c257d37ba992e480099ae84e34be8f41cbd7e96a634e03a16f",
    },
    {
      lat: 51.497988,
      lng: -0.167888,
      crimeID:
        "6abe7193005979bfce2f13f60f339f81c62a9d846e2c41c3abf0187e984486aa",
    },
    {
      lat: 51.510373,
      lng: -0.120887,
      crimeID:
        "6ac9f52c9aefe18f4bf1a01f3a33fd0906257c3ed3506a199af912a8e4a63a49",
    },
    {
      lat: 51.58022,
      lng: 0.047227,
      crimeID:
        "6c269ccd2425d6cdb454da3db1c7eb88ebb611a86a78030e78f27c1f3634dcaf",
    },
    {
      lat: 51.529674,
      lng: -0.115479,
      crimeID:
        "6c3f87c1c0a74e52655952bdc73c7e70a43b52dcad5b91b1d8cbf61d03cafcc4",
    },
    {
      lat: 51.546676,
      lng: -0.000115,
      crimeID:
        "6cacc8e1c79b959290f06c95360fe72fb24f8b8101884049784a02c5dc4b97cd",
    },
    {
      lat: 51.464088,
      lng: -0.136062,
      crimeID:
        "6d77318822cabf70a7414ab924989e81de5e403f5a0923cda1b09d4c5205042a",
    },
    {
      lat: 51.515088,
      lng: -0.140222,
      crimeID:
        "6eafbcb60dd441340fb3213a125781e865fdbf34467340aaf71d73b511e454af",
    },
    {
      lat: 51.543293,
      lng: -0.006898,
      crimeID:
        "6ed4419b2927cd915d5e225b97e32c9bcaf02908340d8465e7bc1b77e66f68b8",
    },
    {
      lat: 51.524856,
      lng: -0.385089,
      crimeID:
        "6fd853919aef3af5c63d4aa358464011fc9f3b03908c6260ab45d8881154ee9a",
    },
    {
      lat: 51.46912,
      lng: -0.364328,
      crimeID:
        "70316c1193e2d1936b118e14c007de361a230c378e2971401208bcbda8bc59bd",
    },
    {
      lat: 51.608598,
      lng: 0.035476,
      crimeID:
        "708fe876d5b9aa29b27d510bdd2e70be5de9b110292960c36ab93d4100444fb2",
    },
    {
      lat: 51.57771,
      lng: -0.344943,
      crimeID:
        "709744fa5a25189b26a4f30469a07238b43e6f32baae7b9b78e88d5d127bebb5",
    },
    {
      lat: 51.506374,
      lng: -0.100949,
      crimeID:
        "729c694da865783e336720e99cc03692f1f6c5359d58cf5ab84a02df77d8b9eb",
    },
    {
      lat: 51.491604,
      lng: -0.149605,
      crimeID:
        "731ab45e81bba500a53511dd7730ccdd11f10ac4981d21548aaff35bfe8fd53c",
    },
    {
      lat: 51.433396,
      lng: -0.104639,
      crimeID:
        "74272c4cd4600ec513dcaf3961e60d9e6d941e2c13768d6d78fe2b671e02972a",
    },
    {
      lat: 51.589555,
      lng: -0.258056,
      crimeID:
        "743a121c3c3031fddb330c2e8f6a62bfbd22c9e2b35573d63f288528dc9cce32",
    },
    {
      lat: 51.512513,
      lng: -0.133841,
      crimeID:
        "7475a3e89611e136ca8420f9124a4bb624cdba4d3c78365bd97f328e82fcbe84",
    },
    {
      lat: 51.594505,
      lng: -0.419132,
      crimeID:
        "74d3d9bae86b1ed45c3932af1b7df8b2126ed973a94754b4c9776ae4de0a8c25",
    },
    {
      lat: 51.439813,
      lng: -0.055552,
      crimeID:
        "74f268622a490511f0d8ca477beeb1901b5e52bea00a33575d8ca6e1a0abc97f",
    },
    {
      lat: 51.541678,
      lng: -0.292172,
      crimeID:
        "74fc1859056a95efb4e0a864d1e5ad5f59878a2bd5df264bc005c47860ed972b",
    },
    {
      lat: 51.364989,
      lng: -0.192925,
      crimeID:
        "75621f45ed72e396250a72987a5ffc4f7a751dc1b47e554ffce741fcf0a3ff9d",
    },
    {
      lat: 51.515684,
      lng: -0.135874,
      crimeID:
        "771724650c54d47ff50384be4861c19f978eb92625c373a0a3a5599b266ac2e5",
    },
    {
      lat: 51.546064,
      lng: -0.483806,
      crimeID:
        "77b99291c8e00fd78bdbd294f7439f3e5689ce244b12440be4dc17602c10ee10",
    },
    {
      lat: 51.612721,
      lng: -0.02639,
      crimeID:
        "77d5ac75cab5110b2646e85fc050b251a282d35152ae4536409960b0d830c956",
    },
    {
      lat: 51.336951,
      lng: -0.117062,
      crimeID:
        "7829f542f11da0439d251a6bd50a9db6f7a651c6541c32e62bfded788d6faea3",
    },
    {
      lat: 51.510896,
      lng: -0.31948,
      crimeID:
        "782dc5dad454e1e974b3eb63feba580c69d4046b76bccef7b0f2a5155d60f199",
    },
    {
      lat: 51.546295,
      lng: -0.179462,
      crimeID:
        "7838369a3b3c3062695c6f9bb03973c1ad5be98b08dc57e7af7641b0ae0bf0de",
    },
    {
      lat: 51.513243,
      lng: -0.127139,
      crimeID:
        "78ce8cf7642935cddacf649316333040a58787e9f199ff896027f72038cea5e7",
    },
    {
      lat: 51.522758,
      lng: -0.105962,
      crimeID:
        "793598381f091a67be5519aab00a0b3e2519f4d5b94635fa367058fa69809e85",
    },
    {
      lat: 51.630544,
      lng: 0.007025,
      crimeID:
        "793c9563b1a27be317ece23ba6232a810fc9eb1b5868642138dd395e049d9298",
    },
    {
      lat: 51.601123,
      lng: -0.194685,
      crimeID:
        "79653e4466600f4cbeb0af8659c1dc739d599036331f5d38b49d627bbc71512a",
    },
    {
      lat: 51.456574,
      lng: -0.069622,
      crimeID:
        "7982b8e1ec486a52f01cf44821701646ec1df3438ece3ee8c9560d5e25170700",
    },
    {
      lat: 51.572221,
      lng: -0.26804,
      crimeID:
        "7a86493b2d8129221570692effe8c66fac5b93316b9a37bc8464750f5fd861e4",
    },
    {
      lat: 51.657767,
      lng: -0.069253,
      crimeID:
        "7a8d2f5270479146d9ed15d6dd130184d3fa0fd33d520798444c1635a24662e9",
    },
    {
      lat: 51.570924,
      lng: -0.363082,
      crimeID:
        "7b4207c0360cb7c35126dc688791d8736c8389c6b6ba0ae7a2e7fbe25f596939",
    },
    {
      lat: 51.509785,
      lng: -0.068095,
      crimeID:
        "7b53ece30d1d07f3ae731e8af49e56fdc200a55e68f5447d3e1440171de5b793",
    },
    {
      lat: 51.602816,
      lng: -0.307699,
      crimeID:
        "7b60616272edf1806edb89927d7be0cdd6a4d34bcf03b7d27fb16b9154e90290",
    },
    {
      lat: 51.548631,
      lng: -0.200903,
      crimeID:
        "7cc2c259c12d406e1feb9fa4bccc210186d9892873407824f043fd6ff8367275",
    },
    {
      lat: 51.543117,
      lng: -0.149304,
      crimeID:
        "7d20e251c3db707a6e194f43592f63eb0d2a4fa6d9c7188405a2d45df7e1e779",
    },
    {
      lat: 51.453099,
      lng: -0.10355,
      crimeID:
        "7d289976785d7b3f2d817ecf85290e082ef7e8c2607e40de3a1be6ca43b604fc",
    },
    {
      lat: 51.588571,
      lng: -0.39731,
      crimeID:
        "7d40b299d417d7139523af82472864f462254a7a4328dea205ac3bc36f80ad97",
    },
    {
      lat: 51.558235,
      lng: -0.245403,
      crimeID:
        "7e1ca40df63020982c2578cbc58ec2858cdcc8943837fd59306524bc2e6f47a9",
    },
    {
      lat: 51.553863,
      lng: -0.287922,
      crimeID:
        "7e4365ab06847f790fc8b35a590fc559154ed00d91ac2f8fd4b55e016cb1f724",
    },
    {
      lat: 51.500377,
      lng: -0.297794,
      crimeID:
        "7f25aba14114f843525b2b22fb5d92fb6bb5017b5a1dd2b0617bee2396c7b357",
    },
    {
      lat: 51.500588,
      lng: -0.034134,
      crimeID:
        "7f5867ab97733f2c7159bcc780cb33b6165dd5ba1c68f9637efec44046c59add",
    },
    {
      lat: 51.497717,
      lng: -0.416058,
      crimeID:
        "7fa7f9eea072030ea8c42f29eabb2c308b2e7c91a6f6cddaa19fb2959c3fe864",
    },
    {
      lat: 51.609793,
      lng: 0.216271,
      crimeID:
        "7fc50498e28e61134092c5303176506ba4228f8be8ed90958e7d18c2600ec3b1",
    },
    {
      lat: 51.512078,
      lng: -0.141526,
      crimeID:
        "80d45ecde870d05fa93827beab0cabdecdca36cbc35e09607bb0cb90d287be72",
    },
    {
      lat: 51.540595,
      lng: -0.144307,
      crimeID:
        "80f9a5ec951d1bde604f30a79a4a04be90065502689b35b8063b3754020c80c3",
    },
    {
      lat: 51.442223,
      lng: -0.366033,
      crimeID:
        "8156c151089788523424065550555be365ef7f2b199b766d43b8464283a6389b",
    },
    {
      lat: 51.527028,
      lng: -0.251808,
      crimeID:
        "8176c92b9ed73e5a43d70f34176e90da243f65fd30b3ed700bece311df003c99",
    },
    {
      lat: 51.576901,
      lng: -0.010768,
      crimeID:
        "81c445126ad6b2a916b5d10d9622c4f30e5cd8900b93db31baa9d2dacc0a833d",
    },
    {
      lat: 51.570207,
      lng: -0.130917,
      crimeID:
        "82590bfadee03fedcc87a8f5c3361ab02498fa5ba77562f7dc829a68e05f2fb7",
    },
    {
      lat: 51.610971,
      lng: -0.070922,
      crimeID:
        "825fed653b5428297ceb02a80be6af8e033a2bc841034698613c1ad8059dded9",
    },
    {
      lat: 51.528176,
      lng: -0.102854,
      crimeID:
        "83a96a09d45df6496426a08d01e376ed2d8353a10929ae963fda8f9f79384393",
    },
    {
      lat: 51.495541,
      lng: -0.116432,
      crimeID:
        "83cdc9340a00b900f84fb16d544fd3f7a7ed4c3434720a394010733e4718e3a4",
    },
    {
      lat: 51.509158,
      lng: -0.13493,
      crimeID:
        "848c496edfc0a97640af5bc7d015fccb42883a382383d0dab86443ab6958c81e",
    },
    {
      lat: 51.501376,
      lng: -0.189797,
      crimeID:
        "85591f18a81926c5b05d991b9f78fab15da92eb40a2ae8414dab923ac18d24e7",
    },
    {
      lat: 51.516058,
      lng: -0.140154,
      crimeID:
        "85c3e3086e39ca8c88bdf8fb7c1b06b42e2dc1d1822405832b25d7845a1372a3",
    },
    {
      lat: 51.575269,
      lng: -0.073055,
      crimeID:
        "862b4ba95595b091f24c89e058f2d1ac2d6ee8cfc678c6870d4a4b4d812803cc",
    },
    {
      lat: 51.314603,
      lng: 0.033572,
      crimeID:
        "86bfe1d3cbb26ebc764153aaf869b4a1f25f988e070daa6e84a3fcf534d63cb4",
    },
    {
      lat: 51.650752,
      lng: -0.029726,
      crimeID:
        "86bfec761d62cc604899b960b515d54ba718fc5c9d0930ffefb44d2a109d1ba6",
    },
    {
      lat: 51.50835,
      lng: -0.170369,
      crimeID:
        "86d09d748a8339521b7ddcb2f0d3d0064e272d7cf4364690d6c6810740399d29",
    },
    {
      lat: 51.492965,
      lng: -0.176243,
      crimeID:
        "873882f9dcb6b822dfc1a75651778a0501f6d10adaa9aa1079b7e171ab7a38d8",
    },
    {
      lat: 51.488404,
      lng: -0.071058,
      crimeID:
        "8744192296287152b44d9b2fbccb036ec2fc10b4dacea54f9f5d4feaa31a5dd1",
    },
    {
      lat: 51.577558,
      lng: -0.084836,
      crimeID:
        "878467d707f80c5ef3aaa3daea00302e2500a0344991e0ea79b817631272ccf2",
    },
    {
      lat: 51.522669,
      lng: -0.165413,
      crimeID:
        "87987ab287e06a80418125cb98e037c66a4fb1196732e23a253de4cb412f4d9e",
    },
    {
      lat: 51.497784,
      lng: -0.094708,
      crimeID:
        "8822e70b602fdceb42e6b3f11e0bd6a61a482319cd435a4a0cdff95877b4ab5a",
    },
    {
      lat: 51.557771,
      lng: -0.08245,
      crimeID:
        "8887c4e13b1a451e7adee4fa819009568e0b882a65383919cb8ce5a546af1507",
    },
    {
      lat: 51.470361,
      lng: -0.458471,
      crimeID:
        "88ad88645e28e465233a9f1d507295b26be519f7d2930ab31a1ba1d1bfb1c795",
    },
    {
      lat: 51.523934,
      lng: -0.423047,
      crimeID:
        "88b0e96287b468220538c34fc89b7a77543f574849ac952e91a45fb9cb9bf103",
    },
    {
      lat: 51.485777,
      lng: 0.017226,
      crimeID:
        "88d22c381c2888aeecb2610f0261643d58e89381d5f87d44aacb677ce2fb9086",
    },
    {
      lat: 51.421483,
      lng: 0.062405,
      crimeID:
        "898f97409f001a8c7936f4f4832c89b5e3b03fddc20b7290e94e8d97fe4d7bfd",
    },
    {
      lat: 51.52355,
      lng: -0.099284,
      crimeID:
        "89b8425140989ce3c1e98ca8cc00f89ba4afdb389940e28b7ece42689f4b51e0",
    },
    {
      lat: 51.405853,
      lng: 0.018034,
      crimeID:
        "8a17d592158d3e77fa211b8aa26d1ce830afafa70f0fd518d4a5b7c9a3160f63",
    },
    {
      lat: 51.50993,
      lng: -0.030302,
      crimeID:
        "8a1c1ed37db0ad72d576d5a0123ab6822e8bb765a2b0b7590ced4583d0622d14",
    },
    {
      lat: 51.581522,
      lng: 0.163625,
      crimeID:
        "8b1b88738426f0d438397b9aa7b2e4569b81c38392b21456b453c1b7625cc9f3",
    },
    {
      lat: 51.545323,
      lng: 0.030978,
      crimeID:
        "8b8b188fe0028a53eebe28c392012f5910500c73eb2930947227d4e09f31c7e4",
    },
    {
      lat: 51.535407,
      lng: -0.282747,
      crimeID:
        "8c50de473cf0b08c4bd7369d3f335a81b3fe27add676ef93e24f75dbbb3c0b73",
    },
    {
      lat: 51.47824,
      lng: -0.026066,
      crimeID:
        "8ce19049dfe019c907ab0d5498cfc09fc9258f5e3b817b265bd19cc9c71916a4",
    },
    {
      lat: 51.49026,
      lng: 0.148079,
      crimeID:
        "8d557024999d6e4c9edec594162301327b5ea9d0cad300fc71f9613ef884bdb7",
    },
    {
      lat: 51.622939,
      lng: 0.005302,
      crimeID:
        "8fbd6907dd25bac8ca2a22940dfb13e6e10508b7c70014fc43bf20011c843aa8",
    },
    {
      lat: 51.514506,
      lng: -0.268458,
      crimeID:
        "9020f905eafe6132d5157e0e3f50971a675365603e050213920d08d51f84cf86",
    },
    {
      lat: 51.504168,
      lng: -0.089168,
      crimeID:
        "91497e8042a6fb4a5157e654ce1b559aeb902c3fc36e4ce3703b69fa6eb7a2b1",
    },
    {
      lat: 51.565102,
      lng: -0.06943,
      crimeID:
        "91654d66cf68ade2467d3c07209e8c0c98a05d5e569bcbc892b13cdeeeacfcbe",
    },
    {
      lat: 51.559548,
      lng: -0.284376,
      crimeID:
        "9177cf17012928da8f3c4205e5dd3a155b6d14230cff73e0208a5063cc633902",
    },
    {
      lat: 51.509932,
      lng: -0.325683,
      crimeID:
        "91dcbb437c81725235dea3d5294b3846a133a50564e3ae9d635990ae8804afb3",
    },
    {
      lat: 51.564087,
      lng: -0.104245,
      crimeID:
        "9250b05b9d0bf010314d99c4c49380cb98e562fd976b8cc6f816e966b87d4299",
    },
    {
      lat: 51.462606,
      lng: -0.114788,
      crimeID:
        "92708694cede86c1a997826efefabc3a3eb39c6b5caa59637da2d0e3be3b7969",
    },
    {
      lat: 51.400022,
      lng: -0.255044,
      crimeID:
        "92bc65a1ca83e1d71c0d5c7907b2e015781049dc330f12febe368d14274b465f",
    },
    {
      lat: 51.54402,
      lng: -0.066991,
      crimeID:
        "92ed031ef6674ba85cb473d34e79193532b3ef83814a545fbad7255a7c37040f",
    },
    {
      lat: 51.487816,
      lng: 0.082697,
      crimeID:
        "93310f816432be80b92afa025887000ae2ccb4ed2a027dc171b6e5970708064f",
    },
    {
      lat: 51.565118,
      lng: -0.138845,
      crimeID:
        "9388de18964bb8bf15aa55c778c32ef9b8d13ca4370d8be3445b06d33af66ceb",
    },
    {
      lat: 51.462846,
      lng: -0.009109,
      crimeID:
        "93b257e3782938cd9517c25b1dbd784640dcf4c0b7d759c69989aaf722c9a790",
    },
    {
      lat: 51.506716,
      lng: -0.351075,
      crimeID:
        "93c29b2d574249d6fa21e84090272ff4360978d7d67dd63c0bb8ff3b23fd0993",
    },
    {
      lat: 51.58423,
      lng: -0.072733,
      crimeID:
        "93d40f7dafe682ba0255a74f48d46b26953884e505e646689032ea491d5c5f90",
    },
    {
      lat: 51.396996,
      lng: -0.092042,
      crimeID:
        "9425b72c3c762996ab29e3c28a995d41259d5248ee4072bc32c7e3293bce70a8",
    },
    {
      lat: 51.447195,
      lng: -0.416454,
      crimeID:
        "95930842d92c2f56d268f6b9a6880023eb334704f14a3a24ffed6d102f7ab447",
    },
    {
      lat: 51.507422,
      lng: -0.38657,
      crimeID:
        "9595fd75eb6201b71f06592fe3b7eff8158c36e4718ac7f60cd91a54af6f4456",
    },
    {
      lat: 51.508399,
      lng: -0.272681,
      crimeID:
        "95c04a9e2620d626734b6c21008226f44121b5f1df40387ca6cb043ddb1bc3a7",
    },
    {
      lat: 51.543293,
      lng: -0.006898,
      crimeID:
        "95caf31e01c90b8adfde80985993c470121897a6459e133e05f72d42aa5c5c16",
    },
    {
      lat: 51.438791,
      lng: -0.155941,
      crimeID:
        "95e0e8c2572ddefa8f1367ec1dc7d37110120cd693097a25af5d23345706e85a",
    },
    {
      lat: 51.560381,
      lng: -0.099148,
      crimeID:
        "95eaa2a4bc7bf76a258efb0e95630558a114f9df8afd539d64a8ac3ed303a074",
    },
    {
      lat: 51.489064,
      lng: -0.191437,
      crimeID:
        "960a2c53a0b8028730c29ae64b8e2e7543581c35b08f2305c4bba7c228eaa7ba",
    },
    {
      lat: 51.482392,
      lng: -0.051163,
      crimeID:
        "96ba8194f06f240d129ccc608b8457a8cdc1094de7d23d9664288c04d197d25b",
    },
    {
      lat: 51.445662,
      lng: -0.148556,
      crimeID:
        "974608425be3fbb08db8b5995ac80d5fc471db50f69d15082bcc82a4da6cad0c",
    },
    {
      lat: 51.597678,
      lng: -0.333864,
      crimeID:
        "9788e27eb4b98052a820d4c3f9d1f8507c4141b8477291dcd417e30f8eb3ffb2",
    },
    {
      lat: 51.536435,
      lng: 0.077893,
      crimeID:
        "980001e334a3e7a92826211fd6a80f71a7ee5b4a12944da97d5deb97f3ca7ca1",
    },
    {
      lat: 51.51401,
      lng: -0.124528,
      crimeID:
        "9803c3080288537591d6d5f20972d492e374724a1ea2e219ec2edc296b7e8d70",
    },
    {
      lat: 51.537288,
      lng: -0.02778,
      crimeID:
        "985f670a519c0426ce6b6a2fef0c5b63f9262a68fdc7358e65dece34c800a7a9",
    },
    {
      lat: 51.470924,
      lng: -0.062926,
      crimeID:
        "98b7dadfdfca9a62c3386565383039efae555c5880e020bec473b2209dd79146",
    },
    {
      lat: 51.526132,
      lng: -0.080594,
      crimeID:
        "990ed1ececc7011452b9b9d4fb453a22ef8b10f21b027f86353c49af60e29943",
    },
    {
      lat: 51.583216,
      lng: 0.183308,
      crimeID:
        "999b0a844816d16ddaa787889451715bb37cd8dc3a060badd97fdb5a273049d1",
    },
    {
      lat: 51.64643,
      lng: -0.21435,
      crimeID:
        "9a320d3f07fb4dfbeee67d6d8387184394cb33ce1cc0b44f6862f82226cba542",
    },
    {
      lat: 51.54511,
      lng: 0.16556,
      crimeID:
        "9a4177be36a8cf545f4082d77e71cfd079e01c34d9610866295117034ea937c0",
    },
    {
      lat: 51.459266,
      lng: 0.080044,
      crimeID:
        "9ab728c57fa32034294e85196d37b056daf4a2f9f42fd22f987bf0d1f1835c5c",
    },
    {
      lat: 51.535191,
      lng: -0.45474,
      crimeID:
        "9c1906beceb3aab2ed5f2b1d678bd48c61ca0db745d2d30ff58076c395715e84",
    },
    {
      lat: 51.573667,
      lng: 0.017449,
      crimeID:
        "9cc302062d67f45ec44a01deebece28b140f5baba2a6817c91304bfb6a6d8bd1",
    },
    {
      lat: 51.473079,
      lng: -0.061107,
      crimeID:
        "9cf3c893863924094e6ee2a3b1bbaa682f62f99aac0040366648e062b8b8c1e3",
    },
    {
      lat: 51.505386,
      lng: -0.089938,
      crimeID:
        "9d9f9d4c608502f297000bd84cc558cc3e9fc3038c510fd3f3b737bce4457060",
    },
    {
      lat: 51.42,
      lng: -0.176258,
      crimeID:
        "9e113ac9288b326f9a88d53b55ccc05247066789afbe02aa63939abcab2e5200",
    },
    {
      lat: 51.355152,
      lng: -0.099741,
      crimeID:
        "9e2d894d14921131d8f889028b008b7931c2f5f6feb16354b899f8ab419da0ba",
    },
    {
      lat: 51.579491,
      lng: -0.099794,
      crimeID:
        "9e862b354af5d2711b7d58fbda9b29554bfb363a19aa2f55dd64e7f92d9421bf",
    },
    {
      lat: 51.490506,
      lng: -0.185834,
      crimeID:
        "9ec8c42e24147e0ee45c89c4837635d45c291e0f279ac798970b1458dfe4b986",
    },
    {
      lat: 51.498139,
      lng: -0.06804,
      crimeID:
        "9f2992f532c3e90539fc19043045305ce3292d4fc0c2910ac1406e16a6408086",
    },
    {
      lat: 51.312091,
      lng: -0.099569,
      crimeID:
        "9f37df0b46fa11d02866605e8dd591d48d2a94899f595ea0699a3a2aa51c0da2",
    },
    {
      lat: 51.513064,
      lng: -0.129438,
      crimeID:
        "9fac4a3e35c15cc6cb5c821646e14ca8849a87688c5df9e41a012f40bca8fb58",
    },
    {
      lat: 51.603411,
      lng: -0.128861,
      crimeID:
        "9fdd87f2ff80a9a966fc0ab41338b32561ef8653196848819a4578d75aa6b397",
    },
    {
      lat: 51.661535,
      lng: -0.061618,
      crimeID:
        "a00c7e1bbf6f7e6f5af07d545ef0438259d24674825e4f1fad982c1345bfe7ae",
    },
    {
      lat: 51.425167,
      lng: -0.003886,
      crimeID:
        "a02fd18efc269366b092a17cf8a2c112ae227a4a747b3677545244af8328d4c3",
    },
    {
      lat: 51.527637,
      lng: -0.142205,
      crimeID:
        "a0be98ae845886d74256241b07f7d94fac4daa36123fabce70d156d604329847",
    },
    {
      lat: 51.431078,
      lng: 0.058852,
      crimeID:
        "a1afd5ecfbf471ec06fb50ccd33a87569e17273a72934f12daf28dafc72790fd",
    },
    {
      lat: 51.470735,
      lng: 0.109061,
      crimeID:
        "a1e00b069566865311fb90dce4a68a9fc25f94c42a4fd7b0c18eb6458d8f22f2",
    },
    {
      lat: 51.518214,
      lng: -0.397791,
      crimeID:
        "a2e1b13d32723ddd82a3ca66f41cc9e98acef26fe8005e70434700e1323cd848",
    },
    {
      lat: 51.487124,
      lng: 0.006338,
      crimeID:
        "a30480d7947d21ea6af6f73e36fecb77e28301bea466dd53b82a1a6e05a64e7a",
    },
    {
      lat: 51.459749,
      lng: -0.198469,
      crimeID:
        "a35b276b674a456938feec3b21e3cc488040ca2610e867f2e3d1f2262ee1a8db",
    },
    {
      lat: 51.507893,
      lng: -0.346076,
      crimeID:
        "a387d8cee056ade1f45467aed1d76a0061485cf6e78c0a639f9be0baa78b8962",
    },
    {
      lat: 51.446032,
      lng: -0.135589,
      crimeID:
        "a3f923b712082e36031b43456e9add572365b242f82011a809340b8ad5c7cb4d",
    },
    {
      lat: 51.473036,
      lng: 0.023388,
      crimeID:
        "a40d97e5ca6a577647295dca899b09105591489c0c839c1590fc79c527cca21a",
    },
    {
      lat: 51.487289,
      lng: -0.110774,
      crimeID:
        "a4c17c8a84284d0284895d0a5e215978e9ad7a66ab29fe481a69e83477a12ddb",
    },
    {
      lat: 51.394167,
      lng: -0.042682,
      crimeID:
        "a4ca0a4906838bd39ea24085fdf05db3e2292a79666f0447abdb6e4c4adf6f39",
    },
    {
      lat: 51.372592,
      lng: -0.101088,
      crimeID:
        "a4f3cce4ae30ff4cb62f4cbbacdcd23c3a7bf0d6ec46a374b1dc19776928f6cc",
    },
    {
      lat: 51.544171,
      lng: -0.004595,
      crimeID:
        "a6159b04325b0514f1d847e07cacb6ed3b181296e341bb0bff0f78ac3ab2cf9b",
    },
    {
      lat: 51.579711,
      lng: 0.180772,
      crimeID:
        "a6b41a19b0fef5c325b8b647cf7d0c4c9fb59d8f7bec56bea54f1144ca7e0ca5",
    },
    {
      lat: 51.514824,
      lng: -0.241494,
      crimeID:
        "a728aacdd97b99bb4f2f7391476ab99ad5f3d388038ac944c7adb14ab512cc86",
    },
    {
      lat: 51.564764,
      lng: -0.10553,
      crimeID:
        "a7c1e68b063a47ddecf22f73ae56ba7f26c70e367905df3a15ae2045797dbd67",
    },
    {
      lat: 51.399107,
      lng: -0.099674,
      crimeID:
        "a802d855e38c47de6cc51bc5dc0b4e5f99e5925a260ca10192c4f413a346742c",
    },
    {
      lat: 51.411621,
      lng: -0.299856,
      crimeID:
        "a86d5d7080f9c743a8380a683f3c9a925f50271dc458aae5cea9a2082de3849e",
    },
    {
      lat: 51.524358,
      lng: 0.011319,
      crimeID:
        "a8e19706099726ee476a1900fcd9a6ddbf9e80b0d6e57ba454863e19abd7773f",
    },
    {
      lat: 51.401212,
      lng: -0.093635,
      crimeID:
        "a908485f7aa5eea77165a957aa894d61b63fdaaca8420a0c8476c9c704763f62",
    },
    {
      lat: 51.531479,
      lng: -0.349878,
      crimeID:
        "a97ee56036894191f0e648e7c53723cc1f75cc0d1b1d82bec7e053f94d6af279",
    },
    {
      lat: 51.56367,
      lng: -0.010047,
      crimeID:
        "ab1ee72c4504bb598a894fa20054d5f0f0bf9c433aeecf278ab562f11462a25c",
    },
    {
      lat: 51.666585,
      lng: -0.085508,
      crimeID:
        "ab499dc084ba3e34cfa1cb0615966768217660135e3712c89d628dc154061e92",
    },
    {
      lat: 51.552087,
      lng: -0.115678,
      crimeID:
        "ab65f6c60f83535dd296653be8123d81e389fc71408a3e0bec0660b6379a661b",
    },
    {
      lat: 51.504937,
      lng: -0.233993,
      crimeID:
        "abb6a7eeaf20a84d2ae8fe50892b4a82f61b0debc5a99ae7b40b12d9b93e269e",
    },
    {
      lat: 51.588228,
      lng: -0.436794,
      crimeID:
        "ac1d3dbe3caf6ab362eb7430c4f0a02121f1acecd3f6a7b1a7fa616b688e280f",
    },
    {
      lat: 51.503176,
      lng: -0.219826,
      crimeID:
        "acbd013889a0c8d3ee30aff285ec4026f93f87bf82af6664595a7fedf4c95ba0",
    },
    {
      lat: 51.427032,
      lng: -0.035466,
      crimeID:
        "acf45269168df2dcc266307f060d6410ec0926ff3dbfb582a51105f6c88957cf",
    },
    {
      lat: 51.60794,
      lng: -0.089089,
      crimeID:
        "ae0ce040eed7d2da86e3a4118c17f706cdfa12130616ccd876ab88f977be1b9b",
    },
    {
      lat: 51.378988,
      lng: -0.097878,
      crimeID:
        "ae2a8ca79b8b7e4b7e16d457d9d5844afedbf9a1a7e110e0a8323b9bb75bb562",
    },
    {
      lat: 51.375174,
      lng: -0.303965,
      crimeID:
        "ae3dc4fb0f6653c3cbfb64a6c3a35df08f27c7262581f5704abbfd5d8e4e6000",
    },
    {
      lat: 51.651448,
      lng: -0.178057,
      crimeID:
        "ae52919a850cb2fbe66056cb133dbd566ac21e509a1ba7a9bf5ea8b5e7630704",
    },
    {
      lat: 51.455522,
      lng: 0.145037,
      crimeID:
        "aeb841b2049b4214dce7a089c122ae9bc992e4a290ffecb973e543eb26de5239",
    },
    {
      lat: 51.47072,
      lng: -0.069112,
      crimeID:
        "aedfd9d4e315122d58d3d7b1259ada2216271fb9d9e15e29ba61ada25e1b560c",
    },
    {
      lat: 51.579667,
      lng: -0.334538,
      crimeID:
        "aef233218780fa7a789344cca1029ad84caaa6ca0a20c3817696bd168945e408",
    },
    {
      lat: 51.514492,
      lng: -0.131037,
      crimeID:
        "aef4e58b66cf07b8123de3542bb73b33d6623c8aa3be805f7e596869b8c681a5",
    },
    {
      lat: 51.552902,
      lng: -0.054353,
      crimeID:
        "afc58c97415a2a07860e6ba7700dc60ce45729c9f44c1f872cca2e207196c267",
    },
    {
      lat: 51.41387,
      lng: -0.005327,
      crimeID:
        "b0a666fc5b6d37882b225671e3cffbf1025623d89ef163168df47501f2151f69",
    },
    {
      lat: 51.491347,
      lng: -0.072245,
      crimeID:
        "b0ab195ecf5697a020a94e04fff9298881e60e4ccd586c2ea89a0270d3f8df36",
    },
    {
      lat: 51.573918,
      lng: -0.076705,
      crimeID:
        "b116f3665388422023d0f4cadaf65ee615a64a5442880a73c00581bc048595f8",
    },
    {
      lat: 51.586772,
      lng: -0.333354,
      crimeID:
        "b12d43761703022cdc8b34100ca4bf6aa78ab3fbbbf703cc575cf3995ae61f08",
    },
    {
      lat: 51.594358,
      lng: 0.208301,
      crimeID:
        "b1804953ae0055807f258c955d1d51febbc660c06b00b0b612b7f10f5aff9816",
    },
    {
      lat: 51.587324,
      lng: -0.034319,
      crimeID:
        "b18f63809cd5a7d56b761aa92a3b2a5e325ebffa96e8c29f9584c43f23fbdafb",
    },
    {
      lat: 51.485535,
      lng: -0.124227,
      crimeID:
        "b1db811ebcc8e9c3947b11429100d83d2a3e447897a7cfdf7697fdb2f3729946",
    },
    {
      lat: 51.571318,
      lng: -0.204957,
      crimeID:
        "b22c788ff0c84a0b0af53c831cde61e9a5f32d2347ac25f5d034bcea68ec9b4d",
    },
    {
      lat: 51.61388,
      lng: -0.065772,
      crimeID:
        "b23558be20373f4f073d4cff00e878daf3f2438ac66d06a3f0491213381f3ee1",
    },
    {
      lat: 51.485008,
      lng: -0.072296,
      crimeID:
        "b38b00b796c9b20acc2eda2a7f6ac4dd51138189706593f6096507c82edf02c2",
    },
    {
      lat: 51.403237,
      lng: -0.193287,
      crimeID:
        "b42a6e75a28819c75a13cc3c6237d1922891b794cf7e10c5a6b39f239aca517b",
    },
    {
      lat: 51.504266,
      lng: -0.279652,
      crimeID:
        "b43052ed2f38caddd4fa7991935832ec8d2f604040b2f7311257550db68f5094",
    },
    {
      lat: 51.491926,
      lng: -0.088441,
      crimeID:
        "b47055eeaaa52b1cf8b8f54c2d9b40e8eda81284047cac5f3fb139f64eac7f7f",
    },
    {
      lat: 51.523687,
      lng: 0.004817,
      crimeID:
        "b576abde70d40bf86771ef8da1bfd805c8a770f0cb391cc9508ed76d3afd4615",
    },
    {
      lat: 51.556456,
      lng: -0.312969,
      crimeID:
        "b5b6556230378c2e78f3a8a2ae9c438c8cd62624940ab7ea4738fade5470db30",
    },
    {
      lat: 51.525812,
      lng: -0.487838,
      crimeID:
        "b625981d8a6b51dbbb500e6278301aec2834adc1c4eec4e63013c5b72b736116",
    },
    {
      lat: 51.606807,
      lng: -0.209406,
      crimeID:
        "b686e61d354a34319c1f930f7f411c1d3d1d7cc9a3a2e22a610c5078611ceab2",
    },
    {
      lat: 51.503993,
      lng: 0.045955,
      crimeID:
        "b6a69cd4e830965f16c5289df23c9f2dcf513800f5b3b75733c2bf061ccd1eaa",
    },
    {
      lat: 51.488618,
      lng: -0.122473,
      crimeID:
        "b6adc32ca178ec6a4a9767f6d9a91daf943a12dc065a908cd7f5ccd59ef810b6",
    },
    {
      lat: 51.482585,
      lng: -0.177824,
      crimeID:
        "b733373f449ed4c927624bb7b1028311484af2bae7cd616d270d50df17fccae0",
    },
    {
      lat: 51.523786,
      lng: -0.138152,
      crimeID:
        "b77d51752f8139c08f87579bf944201cf8001a921634880396d5cfbf2397fcd4",
    },
    {
      lat: 51.497037,
      lng: -0.090273,
      crimeID:
        "b7c9a6f714ba2820cf845422233eaf8e16983b9b8251b74d9a3bcbc0c9b19308",
    },
    {
      lat: 51.572571,
      lng: -0.09063,
      crimeID:
        "b8528936760174673bc92d6529ba39147b51f88200e566a408d2bc88524c15c0",
    },
    {
      lat: 51.628983,
      lng: -0.045407,
      crimeID:
        "b8cd8db74161176bd638ca4616ccec1085f797e5f66d57dcf56904823f776697",
    },
    {
      lat: 51.538044,
      lng: 0.080981,
      crimeID:
        "b8e2f696b80434f4f2999026227e392517dfd1bef1a02f79a8d5838ab4a9654a",
    },
    {
      lat: 51.544443,
      lng: -0.006314,
      crimeID:
        "b967cbb954e9b42b06035cc64f6aeca6b96c276605d71b2b4b9316699b5b06c7",
    },
    {
      lat: 51.523768,
      lng: -0.016861,
      crimeID:
        "b97cbecc69cd34bf9a11302782cf7b44c8c98e11bf7ebb7fda82b0fc333aae64",
    },
    {
      lat: 51.467667,
      lng: -0.047126,
      crimeID:
        "b99dcf0b3d9a63f14d90866d691808aa4ddb172c57d55ebf706ccbda41bc543e",
    },
    {
      lat: 51.546169,
      lng: 0.193274,
      crimeID:
        "b9c25f49b2b464bfc8085b4e0481038b0e7c622b96802b509f48f6d498fb37e5",
    },
    {
      lat: 51.454757,
      lng: -0.142531,
      crimeID:
        "ba57c8486d64e6f62e42a76a4950c80c014678266cb7e8f4be21d7d71daf068b",
    },
    {
      lat: 51.512336,
      lng: -0.14705,
      crimeID:
        "baebe2ced20e0abf0316e05895012854cca56971f43bf305a9359490b903b420",
    },
    {
      lat: 51.513777,
      lng: -0.123456,
      crimeID:
        "bba35131090c9ba135f7927188221dff32f43c1d7a9c4aaec58ba9476bbb1b9b",
    },
    {
      lat: 51.51525,
      lng: -0.206081,
      crimeID:
        "bbe3107aa79f96386798f3dca5867d093e36b53bc69e94bbf700af024215f5cc",
    },
    {
      lat: 51.59271,
      lng: -0.206048,
      crimeID:
        "bc1c9fa5e2e5735508523f78bacf6fdfad3c9f120056875e132591d877dd9536",
    },
    {
      lat: 51.521028,
      lng: -0.14171,
      crimeID:
        "bccb2ce157357ec1c409c3bfb4ed00afc0f67be52c05d6dddf37450f2c757bc7",
    },
    {
      lat: 51.416061,
      lng: -0.055438,
      crimeID:
        "bcf940491838bb77eafbe0433d8d722ab5aa7ff171edcd448aa94a1b58a15ff6",
    },
    {
      lat: 51.632317,
      lng: -0.052301,
      crimeID:
        "bdcde9432c53abae6d886b6a94245b84c72c679c062000dd3eedf2b916b9bdee",
    },
    {
      lat: 51.445295,
      lng: -0.020407,
      crimeID:
        "be6d27fe564f5d535fb735ae38e0235d53f0396121fff30fa9d1e4ea203c80d0",
    },
    {
      lat: 51.367196,
      lng: -0.298226,
      crimeID:
        "bf2d75e105c7ab5c4f148dda85e6b9691c5655ee78b35784e10e4816f6919884",
    },
    {
      lat: 51.400629,
      lng: -0.03598,
      crimeID:
        "bf7cda81f3c471218e77e1719518e2618ce7376ae30b171af12ce918251d58f6",
    },
    {
      lat: 51.50062,
      lng: -0.193474,
      crimeID:
        "bf80906b15bad61b5d8487e03f6c0752d6b9225931b03c21e7e9459682f7d2d7",
    },
    {
      lat: 51.490054,
      lng: -0.204348,
      crimeID:
        "c00d8b85448b76558c87f67dbd5db94a2294645258243686981387f25d63f894",
    },
    {
      lat: 51.483613,
      lng: -0.373023,
      crimeID:
        "c06a61a85fe6312d6d24decf6458ad11a86fc61e7dc77829a43a4028cc199bdc",
    },
    {
      lat: 51.454398,
      lng: -0.319555,
      crimeID:
        "c0adba802b05c4b807c1c502473c4e28170ca3cd0c3c5ed0911c8e6a57b6616d",
    },
    {
      lat: 51.53902,
      lng: -0.056142,
      crimeID:
        "c0d9bb5eb44817282fd8d52c2a859fb08b9d25c97bef584c3403a884da1ba063",
    },
    {
      lat: 51.551104,
      lng: -0.060892,
      crimeID:
        "c162910d1ecff656f1becbe9da455148ead283bae5488458013d4b97a2353135",
    },
    {
      lat: 51.513848,
      lng: -0.129593,
      crimeID:
        "c1639011656d9c0e000cb6480745823898976881fe6c180d0b4d523e56a874e3",
    },
    {
      lat: 51.392837,
      lng: -0.295363,
      crimeID:
        "c16597233e45ed66d49a3984891ce88ee8df304870033cec8db5ad35f9fe71b5",
    },
    {
      lat: 51.544171,
      lng: -0.136902,
      crimeID:
        "c17f9fe955c44b383f33d962f7bac8ecfef7b0f61e72694ccd0279e7bbfb1bf9",
    },
    {
      lat: 51.656005,
      lng: -0.035686,
      crimeID:
        "c1a169aff6aa8bca863c7ec7688f9f836d55cfc42d15920fcfe14ba5597801c9",
    },
    {
      lat: 51.532452,
      lng: -0.088734,
      crimeID:
        "c1deaa8df5910fd109d7e3005503abbdb8810d899bfcb8432433af48d6157aa7",
    },
    {
      lat: 51.579435,
      lng: 0.185659,
      crimeID:
        "c2061493aa286ac220d7e9f2f29f72d59760094b8c5417db6ad3b67c48a29645",
    },
    {
      lat: 51.557589,
      lng: -0.138734,
      crimeID:
        "c22d065b5fd2620e659e5c17eae00cc69847d6f54976310c080aeef666262a5f",
    },
    {
      lat: 51.655359,
      lng: -0.052513,
      crimeID:
        "c3aade6e279ae260d3d2f0b5039635f0b97311ff8aa1abff0ac4012467f8d2d7",
    },
    {
      lat: 51.54052,
      lng: -0.054939,
      crimeID:
        "c3cb016801acd761912b9c528ebd03a5c86596da513d8c557517ffca7e0b7681",
    },
    {
      lat: 51.497367,
      lng: -0.098947,
      crimeID:
        "c3ef2e2c1a06930e7e391859871a543f5af3ba0b984cbd6a91f2072ab2f846ba",
    },
    {
      lat: 51.555153,
      lng: -0.316811,
      crimeID:
        "c42bc721dee86b2d54f57bc9f24c51e4c35668cf2e56e2fbdbf75f5df52e1cd5",
    },
    {
      lat: 51.528633,
      lng: -0.125729,
      crimeID:
        "c432564feea6c173201e0159e63a8ef41f6baafcdc539777caf5a6d850b0d210",
    },
    {
      lat: 51.528745,
      lng: 0.156162,
      crimeID:
        "c494b1a861a951e890459e3e8e84f02d05ec45ff08fdfc99a1323b343d193956",
    },
    {
      lat: 51.49012,
      lng: -0.165625,
      crimeID:
        "c5aa82a316f2ea5e3e38670f643561fc19dbccf6f5516de9c480f8eacb00c987",
    },
    {
      lat: 51.443194,
      lng: -0.337248,
      crimeID:
        "c5f31575455be8c32f56bf3a1b8c726cbfdf92aec28d4b95732f990112e41072",
    },
    {
      lat: 51.43917,
      lng: -0.361192,
      crimeID:
        "c74de226140614bc8b082f67c396c113c2b288f225b7dbf05053b1989057a64e",
    },
    {
      lat: 51.398513,
      lng: -0.11521,
      crimeID:
        "c8cf53c76eab9d1c92e74ad01b0d8d3be6a995576a8216062073ff60d533ba9e",
    },
    {
      lat: 51.481028,
      lng: -0.143293,
      crimeID:
        "c93ea787c5c1e404e1f32e3541bcdf084f97a211591cb0dc63a5a15d17b9410e",
    },
    {
      lat: 51.517182,
      lng: -0.054824,
      crimeID:
        "c9efc72e3621d1609bb55f0eec112dd79d6a9b08024c12532aa914f8ba6bb937",
    },
    {
      lat: 51.51179,
      lng: -0.131925,
      crimeID:
        "ca0cceb7c428b05021742a7666cc177b1fc487f96f4dc434d290b7c220ea75a5",
    },
    {
      lat: 51.515087,
      lng: -0.136201,
      crimeID:
        "ca54b19a04bacb1d0fe1b137fac32c2c47de8b7b04abb05d9bfccdc1e9d9c5a3",
    },
    {
      lat: 51.515267,
      lng: -0.181478,
      crimeID:
        "ca72443eb621c40c5a3e13baa42bafff200c40584e15aff573332c9576067e12",
    },
    {
      lat: 51.51742,
      lng: -0.234721,
      crimeID:
        "ca775bf72aa528408ac8a6bb7050514bb669e346fd88f1f12e865496d5f4fa0b",
    },
    {
      lat: 51.557658,
      lng: -0.007135,
      crimeID:
        "cb39818dff23605d444b54705bbda3cb457751b4fa7fa7b5fd84b6a889ee8c89",
    },
    {
      lat: 51.541065,
      lng: -0.266368,
      crimeID:
        "cbdcd39e2c67a2090e8393fdc807680b0ab46d7d6b1865bbaeb29d7dbf74a714",
    },
    {
      lat: 51.530061,
      lng: -0.069615,
      crimeID:
        "cc6d9c8137d0c0181716d238c7e25845ff414ff33c92b86c117de8a0a2c0951a",
    },
    {
      lat: 51.594524,
      lng: -0.109663,
      crimeID:
        "ccfb88a4a7c731bf9a062b4206f5715e4e0a9201bf28bb37e2967467cb009e90",
    },
    {
      lat: 51.500987,
      lng: -0.16189,
      crimeID:
        "d04353002b697404173a6606d9ef45b8e3013463f0a54e966a4e2f332e7394fd",
    },
    {
      lat: 51.498757,
      lng: 0.125944,
      crimeID:
        "d07e62852f3758b7e8a6d282fedf59d3c5a59ea21fdc71c06a490071acbfb049",
    },
    {
      lat: 51.472883,
      lng: 0.158537,
      crimeID:
        "d081f6b76d15fce81d77068220744b2ec5f3f93bb9d7a898846d3d8e8ec0bcd0",
    },
    {
      lat: 51.452926,
      lng: -0.062738,
      crimeID:
        "d10a162f738871f7b7bc8255bbdd1a1ec939c11067e76976c6fd3e1080bf4a14",
    },
    {
      lat: 51.506831,
      lng: 0.216876,
      crimeID:
        "d11422f44c68757f04e49f8ba1e42e373bfde668f31e255025bf3e067d95bfe3",
    },
    {
      lat: 51.393407,
      lng: -0.296205,
      crimeID:
        "d258500c48e459d7499118c95c94c5db76a44b98fb935cff79c668f5143b61cf",
    },
    {
      lat: 51.52274,
      lng: -0.417193,
      crimeID:
        "d2ab7fc25a8dec0ed5cc7239a2b11898c05a9f8da02522496ede49fe34f55f0d",
    },
    {
      lat: 51.514052,
      lng: -0.154345,
      crimeID:
        "d398fae4ebbea0039605a5bb7c34206de400b860dfe1ed130b3d94bcd48a4cdd",
    },
    {
      lat: 51.535076,
      lng: -0.189556,
      crimeID:
        "d399d09ca411c382223266b81b996bf604b077380ced6369dd0eaa315c895134",
    },
    {
      lat: 51.560038,
      lng: 0.070904,
      crimeID:
        "d443b1247877129b8a1c31428958032f7e05d9423e0bf851165f9432f1c60f32",
    },
    {
      lat: 51.436987,
      lng: -0.128346,
      crimeID:
        "d4b9dd36f21545fa2372963f8c448f76205969afb61204db09b855d3ecd144e9",
    },
    {
      lat: 51.501201,
      lng: -0.111971,
      crimeID:
        "d4d1ba9dbc9ce2382dc266bfc205bca67382e3aeb1c6eb20978148a93cc7fa41",
    },
    {
      lat: 51.367486,
      lng: -0.025574,
      crimeID:
        "d4f8d73496ee577a92da4fa120f5a6beba3f2c78f11b6dc354ba8c4ff1373c88",
    },
    {
      lat: 51.582419,
      lng: 0.063911,
      crimeID:
        "d53624cddf9a1a017c2d11deb73bcf719bdafcc2f3b3eae72978ac74a6ca7b0f",
    },
    {
      lat: 51.589026,
      lng: -0.086115,
      crimeID:
        "d58e5e50a89b29bbbef743a7a4fd63053f0b622f7c6abe018a07489f39f2d349",
    },
    {
      lat: 51.510221,
      lng: -0.384742,
      crimeID:
        "d5a5aba27fbcfa38cccd1fd86250c58f795bfe88ac320472ab423b0d5e754e6b",
    },
    {
      lat: 51.606501,
      lng: -0.066548,
      crimeID:
        "d70c2bfe664ff6eb2b8fa70076656016f82cc0c0e76f4362c6bfbfa2d12ef0b1",
    },
    {
      lat: 51.36049,
      lng: -0.195055,
      crimeID:
        "d74f6a885b550b9d362c0de40c253e78a8cb75e40a8ffa94bc6523f64aabd449",
    },
    {
      lat: 51.517684,
      lng: -0.151474,
      crimeID:
        "d7cfb732eea487274bbbf16f782b3ec14b7f7315a140712b829e2fc9fc81f4d0",
    },
    {
      lat: 51.492948,
      lng: 0.121731,
      crimeID:
        "d7d9cfd69d27b024892018e742f383365fef5658f036657e8a56b3b51a8d7b8b",
    },
    {
      lat: 51.546108,
      lng: 0.12029,
      crimeID:
        "d86b19df10f2a2a74d7b24124a88b25f5868277b79758e6e59b7c8848c2a1727",
    },
    {
      lat: 51.470774,
      lng: -0.366079,
      crimeID:
        "d89f62ab34f98959497dafd00a524cda9651d25de0a1ebef7931bf93eb44521a",
    },
    {
      lat: 51.443638,
      lng: -0.152494,
      crimeID:
        "d8a5dd73cb8a1aa730e214fd5252912eac7ebe8dd348ddd1d4f58546ecd9be80",
    },
    {
      lat: 51.600363,
      lng: 0.084536,
      crimeID:
        "d93462af59f93e0afc640a5162e9e6c2e47691de68702af2cfb4f8d31b1fa4e7",
    },
    {
      lat: 51.568683,
      lng: -0.108195,
      crimeID:
        "d96b04a19cd24a4884c18a70abde935689d99e0c276ce330325518380289e912",
    },
    {
      lat: 51.359052,
      lng: -0.142168,
      crimeID:
        "d9f4771eb38621e60d4d89370ab09f64ac8678b55348c766c82e3830a40b559f",
    },
    {
      lat: 51.429562,
      lng: 0.118688,
      crimeID:
        "da0bcf80049b3c30aaf091f9bc625a62ca750d116a6d0dc4fe89f99d561fcbbe",
    },
    {
      lat: 51.549652,
      lng: 0.101718,
      crimeID:
        "da0e6ede33eb7823fb6e53b8ad89d0381c68863e952b4365783bd361591703b4",
    },
    {
      lat: 51.550413,
      lng: 0.147608,
      crimeID:
        "da5c139ef2a23f2bbce3480b141ac18995e0556c1146e1f0ac0039fbf5d110be",
    },
    {
      lat: 51.51163,
      lng: -0.121916,
      crimeID:
        "da5cda3048c09e320650998bdca125746cbbf7ebc2cd14a26ae70d9b100ccf12",
    },
    {
      lat: 51.510942,
      lng: -0.131196,
      crimeID:
        "da6b3e043bbf17b747b4262b77fa0dfff967b41b4c73b9a62f9b8fd78dd98ae6",
    },
    {
      lat: 51.497865,
      lng: -0.437115,
      crimeID:
        "da6f85f54c5132983256096b9f138fa9fcaa5fe76c1744156e86c7e752c1d259",
    },
    {
      lat: 51.53002,
      lng: 0.083123,
      crimeID:
        "db6ecb1f3d2f3c6d058a9f8f25f94ec5b0239b47ed8f71b9f11c65bff84551e0",
    },
    {
      lat: 51.466898,
      lng: 0.009554,
      crimeID:
        "db997c7be34d70ed38dc6eaa0da62341ac6fee1d2fd25af5edc7066123a2e6f4",
    },
    {
      lat: 51.468077,
      lng: -0.093916,
      crimeID:
        "db9f2305d0567638805249c204a2a17573d89578f45f3a9b5799fcfff8602fe1",
    },
    {
      lat: 51.472736,
      lng: -0.068681,
      crimeID:
        "dbae73e0eeecf0084fc85f0358cf82edea84f631237abf9fac64080aad530d1a",
    },
    {
      lat: 51.602281,
      lng: -0.121759,
      crimeID:
        "dbc76ba0898f1a78e511300230d317933eed49752246f450bddedaac29db82a2",
    },
    {
      lat: 51.529849,
      lng: -0.123588,
      crimeID:
        "dd28629687f659e6df2e7acffd379f0d814335f60129ee9f7d28bc5ed8be8c5b",
    },
    {
      lat: 51.55981,
      lng: 0.073678,
      crimeID:
        "dd5a18a180d8975ffdd7a2d1839c4b58f96f6e3a6fd03da19acb44734a42db1d",
    },
    {
      lat: 51.563272,
      lng: -0.103875,
      crimeID:
        "dedc759b65183ff320e282044df9d4cf255c051b6c2694126d8ecda61f642ba6",
    },
    {
      lat: 51.538136,
      lng: -0.141993,
      crimeID:
        "deea4fe880e288f33ef6d48667d99cb7e975069968ab65607106f8ac407789d9",
    },
    {
      lat: 51.542136,
      lng: -0.040709,
      crimeID:
        "deefd925d4adc375661457275519693382abf7102c6080effeddc1133478e105",
    },
    {
      lat: 51.51335,
      lng: -0.159461,
      crimeID:
        "df6c97b7f2411158fd07f65e7592c79a544f5b6077a9108e591c178f0475291f",
    },
    {
      lat: 51.494268,
      lng: -0.083157,
      crimeID:
        "e01896a9514ea4ee7b6774f3c367885f953d35ac192ddc9fab52f46db5b458d6",
    },
    {
      lat: 51.46836,
      lng: -0.023037,
      crimeID:
        "e0b4fbba8955d2d801f495ead8ba6439fe60b1d2da58da644ffd0238b05a02b4",
    },
    {
      lat: 51.483491,
      lng: -0.103398,
      crimeID:
        "e0c9509c3726a4bfbb35dc3faad6ecc053e230624d2fbcc0b45d418194910c55",
    },
    {
      lat: 51.473944,
      lng: -0.324351,
      crimeID:
        "e137062ba67a97fc7739b7a867259b75132668c5403327f661ee0fd8cd348feb",
    },
    {
      lat: 51.526563,
      lng: -0.092656,
      crimeID:
        "e193513a6a46e5526197dff3dc72f462a7b75bd9447f6577f0acccfbc9f0ad98",
    },
    {
      lat: 51.455257,
      lng: 0.094587,
      crimeID:
        "e196bc2c21b56b151b9fb5ea33ae065ee56a57f7b597b7317137a229e236d4ba",
    },
    {
      lat: 51.516166,
      lng: -0.137324,
      crimeID:
        "e228a4a7d5ebcc6441be0fc2d96ef12724f0e86cf99f5a118752b3c7ab76dc46",
    },
    {
      lat: 51.453122,
      lng: -0.142036,
      crimeID:
        "e2ca3b33a5844c15df1c647d760b37e608f45b6d7cfc0d1333fe6dfc8f40c7b9",
    },
    {
      lat: 51.608904,
      lng: 0.123764,
      crimeID:
        "e39395195b4170929462d2e214991e9cf9e304c4bbd2112c51dfa1b52706a7d5",
    },
    {
      lat: 51.369471,
      lng: -0.196627,
      crimeID:
        "e395bb787437a25ecf1c874d2c4124dde5d85561035e0d32bae5dd367f3f76fa",
    },
    {
      lat: 51.491327,
      lng: -0.048247,
      crimeID:
        "e39c30b899b0efdcbb1b5d521274dbb3e4bd2861b599b9cf473852a90b69182f",
    },
    {
      lat: 51.520779,
      lng: -0.031636,
      crimeID:
        "e425cc37cb9ddbf6e042c70fb9926a2b98a5b6754948b682da09c867b6701c6c",
    },
    {
      lat: 51.381843,
      lng: -0.110334,
      crimeID:
        "e4d9b4ef0cc8a0ea20e2a4be4a48fc79f92744df69eb6abe9c2555efad678be7",
    },
    {
      lat: 51.41913,
      lng: -0.143774,
      crimeID:
        "e510c414d29dbb06b4b52fba0ace747503c757e73c2494d13ef9827fc330b647",
    },
    {
      lat: 51.521582,
      lng: -0.050053,
      crimeID:
        "e5f1290c65f22c4576767183fe595f0e47e944370eb95fde607e5c8677715ede",
    },
    {
      lat: 51.487966,
      lng: -0.110415,
      crimeID:
        "e72584b1943912a6c733d3ba10bd8331bc4fd266edec19285ea77a9d99673b8a",
    },
    {
      lat: 51.489205,
      lng: -0.114195,
      crimeID:
        "e7277af90b9789109a59489b42b16aa2c15c31a5975e5ea1f8e68afdbef2cc42",
    },
    {
      lat: 51.540267,
      lng: -0.195551,
      crimeID:
        "e72856078d6b086aab599d95e84a21a1eb7a63d4d77c424778bafeaa27eba3d9",
    },
    {
      lat: 51.394462,
      lng: -0.088855,
      crimeID:
        "e76ec56e3effe16a62897eef80e5464c2fd6a921bf787887cf373977e0f527ca",
    },
    {
      lat: 51.533407,
      lng: 0.154017,
      crimeID:
        "e7c61676b90f83b6282316091e218632ee3a7c8d1ea4ba06629f9f87456d816e",
    },
    {
      lat: 51.536473,
      lng: -0.100995,
      crimeID:
        "e80e0164725204fb143591795d93b12e662ca8e7c786099ca25749ce5d6198db",
    },
    {
      lat: 51.423432,
      lng: -0.359871,
      crimeID:
        "e9276fe211edb41e03674120dfb568b42a2e58696d851e36158dfadd45bb50ca",
    },
    {
      lat: 51.497809,
      lng: -0.04918,
      crimeID:
        "ea144ffab1be2dd8c98e058987ada9bd88a465118b0efcce2723b8c236afb56c",
    },
    {
      lat: 51.478192,
      lng: 0.050043,
      crimeID:
        "ea403dd00881728f7f51c2b34fc9b32b4a99df38e1b1de24bddc46e9e90c51e6",
    },
    {
      lat: 51.553159,
      lng: 0.005708,
      crimeID:
        "ea6b69395e2c79efb93aca721c545f4a6ef2b5954cd92fddd74bb5375765439a",
    },
    {
      lat: 51.412869,
      lng: -0.004623,
      crimeID:
        "eaab9811c6973bf8f7395620d61a8d0808252d6941528601c6ee07ee9f89526d",
    },
    {
      lat: 51.514246,
      lng: -0.131436,
      crimeID:
        "eb0c3ed22aad820e1dd02c5d6980b9e641559f05d226cbe2d590814d20909250",
    },
    {
      lat: 51.576028,
      lng: 0.181563,
      crimeID:
        "ec0206c327261ffdd3a62a82295d7336055665b7ec84af315f80f1458ba4fc27",
    },
    {
      lat: 51.490825,
      lng: -0.111492,
      crimeID:
        "ec6093532bc5c22a8f1c0c1a932d49916cdd41397f390d5c4d1461300f27fc2d",
    },
    {
      lat: 51.590878,
      lng: -0.059834,
      crimeID:
        "ec785f49028ae22ce1f0f0b16ec9d9f0743722094cbe52d313eae2246ad8bdfb",
    },
    {
      lat: 51.48199,
      lng: 0.07958,
      crimeID:
        "ecd5be4c0ea9950625b2f5cdd7bcdc555550b518dbb8fd1321510d4cbe5ceaeb",
    },
    {
      lat: 51.605844,
      lng: 0.077682,
      crimeID:
        "edb8aa7fb50b472367dd2fd1d013a07439761213b3ae5049fb976c934f0cd05f",
    },
    {
      lat: 51.549724,
      lng: -0.22062,
      crimeID:
        "ee70229cefe10cde1ecf9407c1d5301e65e1e3a8d58c4ed1d27bc209ef492504",
    },
    {
      lat: 51.51968,
      lng: -0.125347,
      crimeID:
        "eeab5c6310d2795e1186a098e9723aa836805b35e841cf282fda86daa4aeac9b",
    },
    {
      lat: 51.429261,
      lng: -0.311227,
      crimeID:
        "eeb5d75140c6e80ccd36ee05777f8e54472a71cc505003d4393a6b1517e814da",
    },
    {
      lat: 51.392517,
      lng: -0.0761,
      crimeID:
        "eeeef6373edeaf23e4dcfd576e1d74b3105081746c4577be30f7941688de228c",
    },
    {
      lat: 51.545342,
      lng: -0.056118,
      crimeID:
        "ef2afc36376e88725d035f80c5d13a3f12455cca7fae7b227e2a9c561c2b85d9",
    },
    {
      lat: 51.478737,
      lng: -0.036356,
      crimeID:
        "ef73afd9d7e468d6e9a945f96f157626236feb114732dff5ecf0b33137af384c",
    },
    {
      lat: 51.462958,
      lng: -0.169349,
      crimeID:
        "ef83901a2a55ed4cad13981f7bf99a23738d40c26af3be7a7b9d29cf0d9395c9",
    },
    {
      lat: 51.62818,
      lng: -0.03933,
      crimeID:
        "efef0633dc62d87bc12fb7f13168be6c4acbd46817440cd563aa4d065643a496",
    },
    {
      lat: 51.378124,
      lng: -0.102799,
      crimeID:
        "f009850f39f8a027836555897ac7a48609bb4c503ef612d2ba01dcda42795d5b",
    },
    {
      lat: 51.561826,
      lng: 0.153427,
      crimeID:
        "f08036ce609c46748652b2a3be82b93f81fdcbf4dffbf9e3111ae33cb8763b73",
    },
    {
      lat: 51.496827,
      lng: -0.16782,
      crimeID:
        "f091838d27c440aaa84c26a74476f8bd0e511a7d303c2a70b70f303db2d90125",
    },
    {
      lat: 51.454287,
      lng: -0.105847,
      crimeID:
        "f2e22406d554b53fde04ce50de0c1cf55933921a9f04324529643e32abe71547",
    },
    {
      lat: 51.613718,
      lng: -0.069,
      crimeID:
        "f3532514d70a487a5fa2608a33f982192968ca20200c34fb5de9586c53b4d2c0",
    },
    {
      lat: 51.563174,
      lng: -0.275901,
      crimeID:
        "f3cf95869adc243a8c11b8bb92a9c5dc612bbeb1ed208a98351de6afdc9f8184",
    },
    {
      lat: 51.475383,
      lng: -0.185383,
      crimeID:
        "f4e6ce978fc9a82a23784e85ed44f51a0b11f05053a559652ede89c2fa915c85",
    },
    {
      lat: 51.546966,
      lng: -0.292869,
      crimeID:
        "f5996414c835bce4b16a5a4e83c87812d5adeb910012034e8168d3366e20637b",
    },
    {
      lat: 51.553632,
      lng: -0.166129,
      crimeID:
        "f5f105be3a1174d5691055c852fcf0e0bbaf48f6fdf3de7fdc4cb3496f67e786",
    },
    {
      lat: 51.588911,
      lng: -0.037253,
      crimeID:
        "f67c4d861333f675c2838d0c700908b0c842355e0e6cc2e156c6400dd733eee1",
    },
    {
      lat: 51.533833,
      lng: 0.116274,
      crimeID:
        "f6e4a80fbfa685086f28a1cff24f30aefa2db6be6e6855c525dbc03dfc06b450",
    },
    {
      lat: 51.525009,
      lng: -0.164973,
      crimeID:
        "f75d6cafe891e3a57204513e2b125c120cf27ae6aee0b302d4ed0bb0b4e9302e",
    },
    {
      lat: 51.531775,
      lng: 0.028645,
      crimeID:
        "f80a5cfa91981a38a1cacd09a24d7cf433e65f9ab4d182da2d01fac7617b46af",
    },
    {
      lat: 51.581095,
      lng: -0.335683,
      crimeID:
        "f8206ba1d4ce4ab5ab8127dc6144b905676c8ff777093ae27223f97304c9b30d",
    },
    {
      lat: 51.59382,
      lng: -0.09446,
      crimeID:
        "f86271319557bbbdf4598d1fe40a85861916e1a3aaf5c4387630fb589b6ffe9e",
    },
    {
      lat: 51.443817,
      lng: -0.166747,
      crimeID:
        "f8a06c33377e4e6fdff0e6a1f93ee9fb99f79591a76f30610c10cc52a4a97951",
    },
    {
      lat: 51.481773,
      lng: -0.080152,
      crimeID:
        "f8ced3c99d494b81067c47364c965c375d3f5065158b33486ea41e460f860d52",
    },
    {
      lat: 51.559805,
      lng: -0.208901,
      crimeID:
        "f93d765223b26b6145287537c91e12bc4e760bff475fe2e10be10d08f49ba8bd",
    },
    {
      lat: 51.374063,
      lng: -0.101933,
      crimeID:
        "f95de7def061d2fab1fad5ccc6991d51f30dedde9b905e339750e4e55808d330",
    },
    {
      lat: 51.46912,
      lng: -0.364328,
      crimeID:
        "f97be9d5c71f849e618eefc6ea3120f3950271c32c1048673531cdb06b75da55",
    },
    {
      lat: 51.556032,
      lng: -0.050022,
      crimeID:
        "f998ab07d0e9316a4d3d1c36af29db744c1a5981b70fd759158e4b0e9177283d",
    },
    {
      lat: 51.583008,
      lng: -0.036483,
      crimeID:
        "fadde1aa0aa7975fd59ffc9c86c0372969ba217ebee5ef8f549cf52c9bd83178",
    },
    {
      lat: 51.493347,
      lng: -0.093957,
      crimeID:
        "fb2f31e4577497723b0afe4f566a4725537f7dc37b35f8187114fe6582faf3c2",
    },
    {
      lat: 51.575535,
      lng: 0.192089,
      crimeID:
        "fca18db23f01a16ee1267170110d9c63a78ac2b08eb9fbb94c7ffb730cfa30f9",
    },
    {
      lat: 51.49506,
      lng: -0.476135,
      crimeID:
        "fd5efda28344257917aea9985e37863ca826c441669385991142d5e183b5099b",
    },
    {
      lat: 51.513114,
      lng: -0.138803,
      crimeID:
        "fde14ee09f8b8fcafcdc16a81fd38f20984a4bbef4923c15528f615078d54520",
    },
    {
      lat: 51.411236,
      lng: 0.105128,
      crimeID:
        "fe8f253cda23c9f2c0a62148289b4eb6aabd51ebb5d131d5dd222fbe8c61eaf0",
    },
    {
      lat: 51.58724,
      lng: -0.077528,
      crimeID:
        "ff0b7ed88414cf97c2b8fd3e1859ee7df652c52927f07922c62e8280653e701b",
    },
  ];

  const [arr, setArr] = useState([]);

  const [matrix, setMatrix] = useState([[]]);

  const [load, setLoad] = useState(false);

  const [isMatrix, setIsMatrix] = useState(false);

  const [dist, setDist] = useState(0.0);

  const algo = props.data;

  let distance = 0.0;
  async function drawLines() {
    for (let i = 1; i < arr.length; i++) {
      distance += parseFloat(matrix[arr[i - 1]][arr[i]]);
      setDist(distance*1000);

      await drawLine(locationsList[arr[i - 1]], locationsList[arr[i]]);
    }
    await drawLine(locationsList[arr[arr.length - 1]], locationsList[arr[0]]);
    distance += parseFloat(matrix[arr[arr.length - 1]][arr[0]]);
    setDist(distance*1000);
  }

  async function drawLine(marker1, marker2) {
    const line = await drawLineWithDelay(marker1, marker2);
    return line;
  }

  const drawLineWithDelay = async (marker1, marker2) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        const line = new window.google.maps.Polyline({
          path: [marker1, marker2],
          map: googleMap,
        });
        line.setOptions({ strokeColor: "black" });
        resolve(line);
      }, 50);
    });
  };

  const getTour = (algo) => {
    console.log(algo);
    setLoad(false);
    setArr([]);
    console.log(arr);
    axios
      .get("http://localhost:8080/" + algo)
      .then((response) => {
        console.log(response.data);
        const temp = response.data;
        setArr([...temp]);
        setLoad(true);
        console.log(arr);
      })
      .catch((error) => {});
  };

  const getMatrix = () => {
    console.log("");
    axios
      .get("http://localhost:8080/distance")
      .then((response) => {
        console.log(response.data);
        const temp = response.data;
        setMatrix([...temp]);
        setIsMatrix(true);
        console.log(arr);
      })
      .catch((error) => {});
  };

  useEffect(() => {
    googleMap = initGoogleMap();

    if (!isMatrix) {
      getMatrix();
    }

    var bounds = new window.google.maps.LatLngBounds();

    const drawLocations = (obj) => {
      const marker = new window.google.maps.Marker({
        position: obj,
        map: googleMap,
      });
      marker.setIcon({
        url: "https://maps.google.com/mapfiles/ms/icons/red-dot.png",
        scaledSize: new window.google.maps.Size(16, 16),
        fillColor: "blue",
      });

      return marker;
    };
    locationsList.map((x) => {
      drawLocations(x);
      bounds.extend(x);
      return null;
    });
    googleMap.fitBounds(bounds);
    if (load) {
      drawLines();
    } else {
      console.log("waiting");
    }
  }, [arr]);

  useEffect(() => {
    getTour(algo);
  }, [algo]);

  useEffect(() => {
    console.log("array after set", arr);
  }, [arr]);

  const initGoogleMap = () => {
    return new window.google.maps.Map(googleMapRef.current, {
      center: { lat: 51.504266, lng: -0.279652 },
      zoom: 40,
    });
  };

  return (
    <div>
      <div ref={googleMapRef} style={{ width: "100%", height: 700 }} />
      <h2>
        <pre>Distance :{arr ? dist : null}</pre>
      </h2>
      <table class="table table-striped">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Crime ID</th>
            <th scope="col">Lat</th>
            <th scope="col">Long</th>
          </tr>
        </thead>
        <tbody>
          {arr.map((val) => (
            <tr key={val}>
              <th>{val}</th>
              <td>{locationsList[val].crimeID}</td>
              <td>{locationsList[val].lat}</td>
              <td>{locationsList[val].lng}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TourMap;
