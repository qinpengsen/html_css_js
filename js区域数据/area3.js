//  3级 可以用压缩工具压缩下 拍扁了，只有一级
function ucAreaInfoGetValue(e) {
    for (var o = 0; o < ucAreaInfo.length; o++) if (ucAreaInfo[o].Code == e) return ucAreaInfo[o]
}
ucAreaInfo = [{
    Item: "北京市",
    Code: 11e4,
    PCode: 0,
    Level: 0
},
{
    Item: "北京市",
    Code: 110100,
    PCode: 11e4,
    Level: 1
},
{
    Item: "东城区",
    Code: 110101,
    PCode: 110100,
    Level: 2
},
{
    Item: "西城区",
    Code: 110102,
    PCode: 110100,
    Level: 2
},
{
    Item: "朝阳区",
    Code: 110105,
    PCode: 110100,
    Level: 2
},
{
    Item: "丰台区",
    Code: 110106,
    PCode: 110100,
    Level: 2
},
{
    Item: "石景山区",
    Code: 110107,
    PCode: 110100,
    Level: 2
},
{
    Item: "海淀区",
    Code: 110108,
    PCode: 110100,
    Level: 2
},
{
    Item: "门头沟区",
    Code: 110109,
    PCode: 110100,
    Level: 2
},
{
    Item: "房山区",
    Code: 110111,
    PCode: 110100,
    Level: 2
},
{
    Item: "通州区",
    Code: 110112,
    PCode: 110100,
    Level: 2
},
{
    Item: "顺义区",
    Code: 110113,
    PCode: 110100,
    Level: 2
},
{
    Item: "昌平区",
    Code: 110114,
    PCode: 110100,
    Level: 2
},
{
    Item: "大兴区",
    Code: 110115,
    PCode: 110100,
    Level: 2
},
{
    Item: "怀柔区",
    Code: 110116,
    PCode: 110100,
    Level: 2
},
{
    Item: "平谷区",
    Code: 110117,
    PCode: 110100,
    Level: 2
},
{
    Item: "密云县",
    Code: 110228,
    PCode: 110100,
    Level: 2
},
{
    Item: "延庆县",
    Code: 110229,
    PCode: 110100,
    Level: 2
},
{
    Item: "天津市",
    Code: 12e4,
    PCode: 0,
    Level: 0
},
{
    Item: "天津市",
    Code: 120100,
    PCode: 12e4,
    Level: 1
},
{
    Item: "和平区",
    Code: 120101,
    PCode: 120100,
    Level: 2
},
{
    Item: "河东区",
    Code: 120102,
    PCode: 120100,
    Level: 2
},
{
    Item: "河西区",
    Code: 120103,
    PCode: 120100,
    Level: 2
},
{
    Item: "南开区",
    Code: 120104,
    PCode: 120100,
    Level: 2
},
{
    Item: "河北区",
    Code: 120105,
    PCode: 120100,
    Level: 2
},
{
    Item: "红桥区",
    Code: 120106,
    PCode: 120100,
    Level: 2
},
{
    Item: "东丽区",
    Code: 120110,
    PCode: 120100,
    Level: 2
},
{
    Item: "西青区",
    Code: 120111,
    PCode: 120100,
    Level: 2
},
{
    Item: "津南区",
    Code: 120112,
    PCode: 120100,
    Level: 2
},
{
    Item: "北辰区",
    Code: 120113,
    PCode: 120100,
    Level: 2
},
{
    Item: "武清区",
    Code: 120114,
    PCode: 120100,
    Level: 2
},
{
    Item: "宝坻区",
    Code: 120115,
    PCode: 120100,
    Level: 2
},
{
    Item: "滨海新区",
    Code: 120116,
    PCode: 120100,
    Level: 2
},
{
    Item: "宁河区",
    Code: 120117,
    PCode: 120100,
    Level: 2
},
{
    Item: "静海区",
    Code: 120118,
    PCode: 120100,
    Level: 2
},
{
    Item: "蓟县",
    Code: 120225,
    PCode: 120100,
    Level: 2
},
{
    Item: "河北省",
    Code: 13e4,
    PCode: 0,
    Level: 0
},
{
    Item: "石家庄市",
    Code: 130100,
    PCode: 13e4,
    Level: 1
},
{
    Item: "市辖区",
    Code: 130101,
    PCode: 130100,
    Level: 2
},
{
    Item: "长安区",
    Code: 130102,
    PCode: 130100,
    Level: 2
},
{
    Item: "桥西区",
    Code: 130104,
    PCode: 130100,
    Level: 2
},
{
    Item: "新华区",
    Code: 130105,
    PCode: 130100,
    Level: 2
},
{
    Item: "井陉矿区",
    Code: 130107,
    PCode: 130100,
    Level: 2
},
{
    Item: "裕华区",
    Code: 130108,
    PCode: 130100,
    Level: 2
},
{
    Item: "藁城区",
    Code: 130109,
    PCode: 130100,
    Level: 2
},
{
    Item: "鹿泉区",
    Code: 130110,
    PCode: 130100,
    Level: 2
},
{
    Item: "栾城区",
    Code: 130111,
    PCode: 130100,
    Level: 2
},
{
    Item: "井陉县",
    Code: 130121,
    PCode: 130100,
    Level: 2
},
{
    Item: "正定县",
    Code: 130123,
    PCode: 130100,
    Level: 2
},
{
    Item: "行唐县",
    Code: 130125,
    PCode: 130100,
    Level: 2
},
{
    Item: "灵寿县",
    Code: 130126,
    PCode: 130100,
    Level: 2
},
{
    Item: "高邑县",
    Code: 130127,
    PCode: 130100,
    Level: 2
},
{
    Item: "深泽县",
    Code: 130128,
    PCode: 130100,
    Level: 2
},
{
    Item: "赞皇县",
    Code: 130129,
    PCode: 130100,
    Level: 2
},
{
    Item: "无极县",
    Code: 130130,
    PCode: 130100,
    Level: 2
},
{
    Item: "平山县",
    Code: 130131,
    PCode: 130100,
    Level: 2
},
{
    Item: "元氏县",
    Code: 130132,
    PCode: 130100,
    Level: 2
},
{
    Item: "赵县",
    Code: 130133,
    PCode: 130100,
    Level: 2
},
{
    Item: "晋州市",
    Code: 130183,
    PCode: 130100,
    Level: 2
},
{
    Item: "新乐市",
    Code: 130184,
    PCode: 130100,
    Level: 2
},
{
    Item: "唐山市",
    Code: 130200,
    PCode: 13e4,
    Level: 1
},
{
    Item: "市辖区",
    Code: 130201,
    PCode: 130200,
    Level: 2
},
{
    Item: "路南区",
    Code: 130202,
    PCode: 130200,
    Level: 2
},
{
    Item: "路北区",
    Code: 130203,
    PCode: 130200,
    Level: 2
},
{
    Item: "古冶区",
    Code: 130204,
    PCode: 130200,
    Level: 2
},
{
    Item: "开平区",
    Code: 130205,
    PCode: 130200,
    Level: 2
},
{
    Item: "丰南区",
    Code: 130207,
    PCode: 130200,
    Level: 2
},
{
    Item: "丰润区",
    Code: 130208,
    PCode: 130200,
    Level: 2
},
{
    Item: "曹妃甸区",
    Code: 130209,
    PCode: 130200,
    Level: 2
},
{
    Item: "滦县",
    Code: 130223,
    PCode: 130200,
    Level: 2
},
{
    Item: "滦南县",
    Code: 130224,
    PCode: 130200,
    Level: 2
},
{
    Item: "乐亭县",
    Code: 130225,
    PCode: 130200,
    Level: 2
},
{
    Item: "迁西县",
    Code: 130227,
    PCode: 130200,
    Level: 2
},
{
    Item: "玉田县",
    Code: 130229,
    PCode: 130200,
    Level: 2
},
{
    Item: "遵化市",
    Code: 130281,
    PCode: 130200,
    Level: 2
},
{
    Item: "迁安市",
    Code: 130283,
    PCode: 130200,
    Level: 2
},
{
    Item: "秦皇岛市",
    Code: 130300,
    PCode: 13e4,
    Level: 1
},
{
    Item: "市辖区",
    Code: 130301,
    PCode: 130300,
    Level: 2
},
{
    Item: "海港区",
    Code: 130302,
    PCode: 130300,
    Level: 2
},
{
    Item: "山海关区",
    Code: 130303,
    PCode: 130300,
    Level: 2
},
{
    Item: "北戴河区",
    Code: 130304,
    PCode: 130300,
    Level: 2
},
{
    Item: "抚宁区",
    Code: 130306,
    PCode: 130300,
    Level: 2
},
{
    Item: "青龙满族自治县",
    Code: 130321,
    PCode: 130300,
    Level: 2
},
{
    Item: "昌黎县",
    Code: 130322,
    PCode: 130300,
    Level: 2
},
{
    Item: "卢龙县",
    Code: 130324,
    PCode: 130300,
    Level: 2
},
{
    Item: "邯郸市",
    Code: 130400,
    PCode: 13e4,
    Level: 1
},
{
    Item: "市辖区",
    Code: 130401,
    PCode: 130400,
    Level: 2
},
{
    Item: "邯山区",
    Code: 130402,
    PCode: 130400,
    Level: 2
},
{
    Item: "丛台区",
    Code: 130403,
    PCode: 130400,
    Level: 2
},
{
    Item: "复兴区",
    Code: 130404,
    PCode: 130400,
    Level: 2
},
{
    Item: "峰峰矿区",
    Code: 130406,
    PCode: 130400,
    Level: 2
},
{
    Item: "邯郸县",
    Code: 130421,
    PCode: 130400,
    Level: 2
},
{
    Item: "临漳县",
    Code: 130423,
    PCode: 130400,
    Level: 2
},
{
    Item: "成安县",
    Code: 130424,
    PCode: 130400,
    Level: 2
},
{
    Item: "大名县",
    Code: 130425,
    PCode: 130400,
    Level: 2
},
{
    Item: "涉县",
    Code: 130426,
    PCode: 130400,
    Level: 2
},
{
    Item: "磁县",
    Code: 130427,
    PCode: 130400,
    Level: 2
},
{
    Item: "肥乡县",
    Code: 130428,
    PCode: 130400,
    Level: 2
},
{
    Item: "永年县",
    Code: 130429,
    PCode: 130400,
    Level: 2
},
{
    Item: "邱县",
    Code: 130430,
    PCode: 130400,
    Level: 2
},
{
    Item: "鸡泽县",
    Code: 130431,
    PCode: 130400,
    Level: 2
},
{
    Item: "广平县",
    Code: 130432,
    PCode: 130400,
    Level: 2
},
{
    Item: "馆陶县",
    Code: 130433,
    PCode: 130400,
    Level: 2
},
{
    Item: "魏县",
    Code: 130434,
    PCode: 130400,
    Level: 2
},
{
    Item: "曲周县",
    Code: 130435,
    PCode: 130400,
    Level: 2
},
{
    Item: "武安市",
    Code: 130481,
    PCode: 130400,
    Level: 2
},
{
    Item: "邢台市",
    Code: 130500,
    PCode: 13e4,
    Level: 1
},
{
    Item: "市辖区",
    Code: 130501,
    PCode: 130500,
    Level: 2
},
{
    Item: "桥东区",
    Code: 130502,
    PCode: 130500,
    Level: 2
},
{
    Item: "桥西区",
    Code: 130503,
    PCode: 130500,
    Level: 2
},
{
    Item: "邢台县",
    Code: 130521,
    PCode: 130500,
    Level: 2
},
{
    Item: "临城县",
    Code: 130522,
    PCode: 130500,
    Level: 2
},
{
    Item: "内丘县",
    Code: 130523,
    PCode: 130500,
    Level: 2
},
{
    Item: "柏乡县",
    Code: 130524,
    PCode: 130500,
    Level: 2
},
{
    Item: "隆尧县",
    Code: 130525,
    PCode: 130500,
    Level: 2
},
{
    Item: "任县",
    Code: 130526,
    PCode: 130500,
    Level: 2
},
{
    Item: "南和县",
    Code: 130527,
    PCode: 130500,
    Level: 2
},
{
    Item: "宁晋县",
    Code: 130528,
    PCode: 130500,
    Level: 2
},
{
    Item: "巨鹿县",
    Code: 130529,
    PCode: 130500,
    Level: 2
},
{
    Item: "新河县",
    Code: 130530,
    PCode: 130500,
    Level: 2
},
{
    Item: "广宗县",
    Code: 130531,
    PCode: 130500,
    Level: 2
},
{
    Item: "平乡县",
    Code: 130532,
    PCode: 130500,
    Level: 2
},
{
    Item: "威县",
    Code: 130533,
    PCode: 130500,
    Level: 2
},
{
    Item: "清河县",
    Code: 130534,
    PCode: 130500,
    Level: 2
},
{
    Item: "临西县",
    Code: 130535,
    PCode: 130500,
    Level: 2
},
{
    Item: "南宫市",
    Code: 130581,
    PCode: 130500,
    Level: 2
},
{
    Item: "沙河市",
    Code: 130582,
    PCode: 130500,
    Level: 2
},
{
    Item: "保定市",
    Code: 130600,
    PCode: 13e4,
    Level: 1
},
{
    Item: "市辖区",
    Code: 130601,
    PCode: 130600,
    Level: 2
},
{
    Item: "竞秀区",
    Code: 130602,
    PCode: 130600,
    Level: 2
},
{
    Item: "莲池区",
    Code: 130606,
    PCode: 130600,
    Level: 2
},
{
    Item: "满城区",
    Code: 130607,
    PCode: 130600,
    Level: 2
},
{
    Item: "清苑区",
    Code: 130608,
    PCode: 130600,
    Level: 2
},
{
    Item: "徐水区",
    Code: 130609,
    PCode: 130600,
    Level: 2
},
{
    Item: "涞水县",
    Code: 130623,
    PCode: 130600,
    Level: 2
},
{
    Item: "阜平县",
    Code: 130624,
    PCode: 130600,
    Level: 2
},
{
    Item: "定兴县",
    Code: 130626,
    PCode: 130600,
    Level: 2
},
{
    Item: "唐县",
    Code: 130627,
    PCode: 130600,
    Level: 2
},
{
    Item: "高阳县",
    Code: 130628,
    PCode: 130600,
    Level: 2
},
{
    Item: "容城县",
    Code: 130629,
    PCode: 130600,
    Level: 2
},
{
    Item: "涞源县",
    Code: 130630,
    PCode: 130600,
    Level: 2
},
{
    Item: "望都县",
    Code: 130631,
    PCode: 130600,
    Level: 2
},
{
    Item: "安新县",
    Code: 130632,
    PCode: 130600,
    Level: 2
},
{
    Item: "易县",
    Code: 130633,
    PCode: 130600,
    Level: 2
},
{
    Item: "曲阳县",
    Code: 130634,
    PCode: 130600,
    Level: 2
},
{
    Item: "蠡县",
    Code: 130635,
    PCode: 130600,
    Level: 2
},
{
    Item: "顺平县",
    Code: 130636,
    PCode: 130600,
    Level: 2
},
{
    Item: "博野县",
    Code: 130637,
    PCode: 130600,
    Level: 2
},
{
    Item: "雄县",
    Code: 130638,
    PCode: 130600,
    Level: 2
},
{
    Item: "涿州市",
    Code: 130681,
    PCode: 130600,
    Level: 2
},
{
    Item: "安国市",
    Code: 130683,
    PCode: 130600,
    Level: 2
},
{
    Item: "高碑店市",
    Code: 130684,
    PCode: 130600,
    Level: 2
},
{
    Item: "张家口市",
    Code: 130700,
    PCode: 13e4,
    Level: 1
},
{
    Item: "市辖区",
    Code: 130701,
    PCode: 130700,
    Level: 2
},
{
    Item: "桥东区",
    Code: 130702,
    PCode: 130700,
    Level: 2
},
{
    Item: "桥西区",
    Code: 130703,
    PCode: 130700,
    Level: 2
},
{
    Item: "宣化区",
    Code: 130705,
    PCode: 130700,
    Level: 2
},
{
    Item: "下花园区",
    Code: 130706,
    PCode: 130700,
    Level: 2
},
{
    Item: "宣化县",
    Code: 130721,
    PCode: 130700,
    Level: 2
},
{
    Item: "张北县",
    Code: 130722,
    PCode: 130700,
    Level: 2
},
{
    Item: "康保县",
    Code: 130723,
    PCode: 130700,
    Level: 2
},
{
    Item: "沽源县",
    Code: 130724,
    PCode: 130700,
    Level: 2
},
{
    Item: "尚义县",
    Code: 130725,
    PCode: 130700,
    Level: 2
},
{
    Item: "蔚县",
    Code: 130726,
    PCode: 130700,
    Level: 2
},
{
    Item: "阳原县",
    Code: 130727,
    PCode: 130700,
    Level: 2
},
{
    Item: "怀安县",
    Code: 130728,
    PCode: 130700,
    Level: 2
},
{
    Item: "万全县",
    Code: 130729,
    PCode: 130700,
    Level: 2
},
{
    Item: "怀来县",
    Code: 130730,
    PCode: 130700,
    Level: 2
},
{
    Item: "涿鹿县",
    Code: 130731,
    PCode: 130700,
    Level: 2
},
{
    Item: "赤城县",
    Code: 130732,
    PCode: 130700,
    Level: 2
},
{
    Item: "崇礼县",
    Code: 130733,
    PCode: 130700,
    Level: 2
},
{
    Item: "承德市",
    Code: 130800,
    PCode: 13e4,
    Level: 1
},
{
    Item: "市辖区",
    Code: 130801,
    PCode: 130800,
    Level: 2
},
{
    Item: "双桥区",
    Code: 130802,
    PCode: 130800,
    Level: 2
},
{
    Item: "双滦区",
    Code: 130803,
    PCode: 130800,
    Level: 2
},
{
    Item: "鹰手营子矿区",
    Code: 130804,
    PCode: 130800,
    Level: 2
},
{
    Item: "承德县",
    Code: 130821,
    PCode: 130800,
    Level: 2
},
{
    Item: "兴隆县",
    Code: 130822,
    PCode: 130800,
    Level: 2
},
{
    Item: "平泉县",
    Code: 130823,
    PCode: 130800,
    Level: 2
},
{
    Item: "滦平县",
    Code: 130824,
    PCode: 130800,
    Level: 2
},
{
    Item: "隆化县",
    Code: 130825,
    PCode: 130800,
    Level: 2
},
{
    Item: "丰宁满族自治县",
    Code: 130826,
    PCode: 130800,
    Level: 2
},
{
    Item: "宽城满族自治县",
    Code: 130827,
    PCode: 130800,
    Level: 2
},
{
    Item: "围场满族蒙古族自治县",
    Code: 130828,
    PCode: 130800,
    Level: 2
},
{
    Item: "沧州市",
    Code: 130900,
    PCode: 13e4,
    Level: 1
},
{
    Item: "市辖区",
    Code: 130901,
    PCode: 130900,
    Level: 2
},
{
    Item: "新华区",
    Code: 130902,
    PCode: 130900,
    Level: 2
},
{
    Item: "运河区",
    Code: 130903,
    PCode: 130900,
    Level: 2
},
{
    Item: "沧县",
    Code: 130921,
    PCode: 130900,
    Level: 2
},
{
    Item: "青县",
    Code: 130922,
    PCode: 130900,
    Level: 2
},
{
    Item: "东光县",
    Code: 130923,
    PCode: 130900,
    Level: 2
},
{
    Item: "海兴县",
    Code: 130924,
    PCode: 130900,
    Level: 2
},
{
    Item: "盐山县",
    Code: 130925,
    PCode: 130900,
    Level: 2
},
{
    Item: "肃宁县",
    Code: 130926,
    PCode: 130900,
    Level: 2
},
{
    Item: "南皮县",
    Code: 130927,
    PCode: 130900,
    Level: 2
},
{
    Item: "吴桥县",
    Code: 130928,
    PCode: 130900,
    Level: 2
},
{
    Item: "献县",
    Code: 130929,
    PCode: 130900,
    Level: 2
},
{
    Item: "孟村回族自治县",
    Code: 130930,
    PCode: 130900,
    Level: 2
},
{
    Item: "泊头市",
    Code: 130981,
    PCode: 130900,
    Level: 2
},
{
    Item: "任丘市",
    Code: 130982,
    PCode: 130900,
    Level: 2
},
{
    Item: "黄骅市",
    Code: 130983,
    PCode: 130900,
    Level: 2
},
{
    Item: "河间市",
    Code: 130984,
    PCode: 130900,
    Level: 2
},
{
    Item: "廊坊市",
    Code: 131e3,
    PCode: 13e4,
    Level: 1
},
{
    Item: "市辖区",
    Code: 131001,
    PCode: 131e3,
    Level: 2
},
{
    Item: "安次区",
    Code: 131002,
    PCode: 131e3,
    Level: 2
},
{
    Item: "广阳区",
    Code: 131003,
    PCode: 131e3,
    Level: 2
},
{
    Item: "固安县",
    Code: 131022,
    PCode: 131e3,
    Level: 2
},
{
    Item: "永清县",
    Code: 131023,
    PCode: 131e3,
    Level: 2
},
{
    Item: "香河县",
    Code: 131024,
    PCode: 131e3,
    Level: 2
},
{
    Item: "大城县",
    Code: 131025,
    PCode: 131e3,
    Level: 2
},
{
    Item: "文安县",
    Code: 131026,
    PCode: 131e3,
    Level: 2
},
{
    Item: "大厂回族自治县",
    Code: 131028,
    PCode: 131e3,
    Level: 2
},
{
    Item: "霸州市",
    Code: 131081,
    PCode: 131e3,
    Level: 2
},
{
    Item: "三河市",
    Code: 131082,
    PCode: 131e3,
    Level: 2
},
{
    Item: "衡水市",
    Code: 131100,
    PCode: 13e4,
    Level: 1
},
{
    Item: "市辖区",
    Code: 131101,
    PCode: 131100,
    Level: 2
},
{
    Item: "桃城区",
    Code: 131102,
    PCode: 131100,
    Level: 2
},
{
    Item: "枣强县",
    Code: 131121,
    PCode: 131100,
    Level: 2
},
{
    Item: "武邑县",
    Code: 131122,
    PCode: 131100,
    Level: 2
},
{
    Item: "武强县",
    Code: 131123,
    PCode: 131100,
    Level: 2
},
{
    Item: "饶阳县",
    Code: 131124,
    PCode: 131100,
    Level: 2
},
{
    Item: "安平县",
    Code: 131125,
    PCode: 131100,
    Level: 2
},
{
    Item: "故城县",
    Code: 131126,
    PCode: 131100,
    Level: 2
},
{
    Item: "景县",
    Code: 131127,
    PCode: 131100,
    Level: 2
},
{
    Item: "阜城县",
    Code: 131128,
    PCode: 131100,
    Level: 2
},
{
    Item: "冀州市",
    Code: 131181,
    PCode: 131100,
    Level: 2
},
{
    Item: "深州市",
    Code: 131182,
    PCode: 131100,
    Level: 2
},
{
    Item: "省直辖县级行政区划",
    Code: 139e3,
    PCode: 13e4,
    Level: 1
},
{
    Item: "定州市",
    Code: 139001,
    PCode: 139e3,
    Level: 2
},
{
    Item: "辛集市",
    Code: 139002,
    PCode: 139e3,
    Level: 2
},
{
    Item: "山西省",
    Code: 14e4,
    PCode: 0,
    Level: 0
},
{
    Item: "太原市",
    Code: 140100,
    PCode: 14e4,
    Level: 1
},
{
    Item: "市辖区",
    Code: 140101,
    PCode: 140100,
    Level: 2
},
{
    Item: "小店区",
    Code: 140105,
    PCode: 140100,
    Level: 2
},
{
    Item: "迎泽区",
    Code: 140106,
    PCode: 140100,
    Level: 2
},
{
    Item: "杏花岭区",
    Code: 140107,
    PCode: 140100,
    Level: 2
},
{
    Item: "尖草坪区",
    Code: 140108,
    PCode: 140100,
    Level: 2
},
{
    Item: "万柏林区",
    Code: 140109,
    PCode: 140100,
    Level: 2
},
{
    Item: "晋源区",
    Code: 140110,
    PCode: 140100,
    Level: 2
},
{
    Item: "清徐县",
    Code: 140121,
    PCode: 140100,
    Level: 2
},
{
    Item: "阳曲县",
    Code: 140122,
    PCode: 140100,
    Level: 2
},
{
    Item: "娄烦县",
    Code: 140123,
    PCode: 140100,
    Level: 2
},
{
    Item: "古交市",
    Code: 140181,
    PCode: 140100,
    Level: 2
},
{
    Item: "大同市",
    Code: 140200,
    PCode: 14e4,
    Level: 1
},
{
    Item: "市辖区",
    Code: 140201,
    PCode: 140200,
    Level: 2
},
{
    Item: "城区",
    Code: 140202,
    PCode: 140200,
    Level: 2
},
{
    Item: "矿区",
    Code: 140203,
    PCode: 140200,
    Level: 2
},
{
    Item: "南郊区",
    Code: 140211,
    PCode: 140200,
    Level: 2
},
{
    Item: "新荣区",
    Code: 140212,
    PCode: 140200,
    Level: 2
},
{
    Item: "阳高县",
    Code: 140221,
    PCode: 140200,
    Level: 2
},
{
    Item: "天镇县",
    Code: 140222,
    PCode: 140200,
    Level: 2
},
{
    Item: "广灵县",
    Code: 140223,
    PCode: 140200,
    Level: 2
},
{
    Item: "灵丘县",
    Code: 140224,
    PCode: 140200,
    Level: 2
},
{
    Item: "浑源县",
    Code: 140225,
    PCode: 140200,
    Level: 2
},
{
    Item: "左云县",
    Code: 140226,
    PCode: 140200,
    Level: 2
},
{
    Item: "大同县",
    Code: 140227,
    PCode: 140200,
    Level: 2
},
{
    Item: "阳泉市",
    Code: 140300,
    PCode: 14e4,
    Level: 1
},
{
    Item: "市辖区",
    Code: 140301,
    PCode: 140300,
    Level: 2
},
{
    Item: "城区",
    Code: 140302,
    PCode: 140300,
    Level: 2
},
{
    Item: "矿区",
    Code: 140303,
    PCode: 140300,
    Level: 2
},
{
    Item: "郊区",
    Code: 140311,
    PCode: 140300,
    Level: 2
},
{
    Item: "平定县",
    Code: 140321,
    PCode: 140300,
    Level: 2
},
{
    Item: "盂县",
    Code: 140322,
    PCode: 140300,
    Level: 2
},
{
    Item: "长治市",
    Code: 140400,
    PCode: 14e4,
    Level: 1
},
{
    Item: "市辖区",
    Code: 140401,
    PCode: 140400,
    Level: 2
},
{
    Item: "城区",
    Code: 140402,
    PCode: 140400,
    Level: 2
},
{
    Item: "郊区",
    Code: 140411,
    PCode: 140400,
    Level: 2
},
{
    Item: "长治县",
    Code: 140421,
    PCode: 140400,
    Level: 2
},
{
    Item: "襄垣县",
    Code: 140423,
    PCode: 140400,
    Level: 2
},
{
    Item: "屯留县",
    Code: 140424,
    PCode: 140400,
    Level: 2
},
{
    Item: "平顺县",
    Code: 140425,
    PCode: 140400,
    Level: 2
},
{
    Item: "黎城县",
    Code: 140426,
    PCode: 140400,
    Level: 2
},
{
    Item: "壶关县",
    Code: 140427,
    PCode: 140400,
    Level: 2
},
{
    Item: "长子县",
    Code: 140428,
    PCode: 140400,
    Level: 2
},
{
    Item: "武乡县",
    Code: 140429,
    PCode: 140400,
    Level: 2
},
{
    Item: "沁县",
    Code: 140430,
    PCode: 140400,
    Level: 2
},
{
    Item: "沁源县",
    Code: 140431,
    PCode: 140400,
    Level: 2
},
{
    Item: "潞城市",
    Code: 140481,
    PCode: 140400,
    Level: 2
},
{
    Item: "晋城市",
    Code: 140500,
    PCode: 14e4,
    Level: 1
},
{
    Item: "市辖区",
    Code: 140501,
    PCode: 140500,
    Level: 2
},
{
    Item: "城区",
    Code: 140502,
    PCode: 140500,
    Level: 2
},
{
    Item: "沁水县",
    Code: 140521,
    PCode: 140500,
    Level: 2
},
{
    Item: "阳城县",
    Code: 140522,
    PCode: 140500,
    Level: 2
},
{
    Item: "陵川县",
    Code: 140524,
    PCode: 140500,
    Level: 2
},
{
    Item: "泽州县",
    Code: 140525,
    PCode: 140500,
    Level: 2
},
{
    Item: "高平市",
    Code: 140581,
    PCode: 140500,
    Level: 2
},
{
    Item: "朔州市",
    Code: 140600,
    PCode: 14e4,
    Level: 1
},
{
    Item: "市辖区",
    Code: 140601,
    PCode: 140600,
    Level: 2
},
{
    Item: "朔城区",
    Code: 140602,
    PCode: 140600,
    Level: 2
},
{
    Item: "平鲁区",
    Code: 140603,
    PCode: 140600,
    Level: 2
},
{
    Item: "山阴县",
    Code: 140621,
    PCode: 140600,
    Level: 2
},
{
    Item: "应县",
    Code: 140622,
    PCode: 140600,
    Level: 2
},
{
    Item: "右玉县",
    Code: 140623,
    PCode: 140600,
    Level: 2
},
{
    Item: "怀仁县",
    Code: 140624,
    PCode: 140600,
    Level: 2
},
{
    Item: "晋中市",
    Code: 140700,
    PCode: 14e4,
    Level: 1
},
{
    Item: "市辖区",
    Code: 140701,
    PCode: 140700,
    Level: 2
},
{
    Item: "榆次区",
    Code: 140702,
    PCode: 140700,
    Level: 2
},
{
    Item: "榆社县",
    Code: 140721,
    PCode: 140700,
    Level: 2
},
{
    Item: "左权县",
    Code: 140722,
    PCode: 140700,
    Level: 2
},
{
    Item: "和顺县",
    Code: 140723,
    PCode: 140700,
    Level: 2
},
{
    Item: "昔阳县",
    Code: 140724,
    PCode: 140700,
    Level: 2
},
{
    Item: "寿阳县",
    Code: 140725,
    PCode: 140700,
    Level: 2
},
{
    Item: "太谷县",
    Code: 140726,
    PCode: 140700,
    Level: 2
},
{
    Item: "祁县",
    Code: 140727,
    PCode: 140700,
    Level: 2
},
{
    Item: "平遥县",
    Code: 140728,
    PCode: 140700,
    Level: 2
},
{
    Item: "灵石县",
    Code: 140729,
    PCode: 140700,
    Level: 2
},
{
    Item: "介休市",
    Code: 140781,
    PCode: 140700,
    Level: 2
},
{
    Item: "运城市",
    Code: 140800,
    PCode: 14e4,
    Level: 1
},
{
    Item: "市辖区",
    Code: 140801,
    PCode: 140800,
    Level: 2
},
{
    Item: "盐湖区",
    Code: 140802,
    PCode: 140800,
    Level: 2
},
{
    Item: "临猗县",
    Code: 140821,
    PCode: 140800,
    Level: 2
},
{
    Item: "万荣县",
    Code: 140822,
    PCode: 140800,
    Level: 2
},
{
    Item: "闻喜县",
    Code: 140823,
    PCode: 140800,
    Level: 2
},
{
    Item: "稷山县",
    Code: 140824,
    PCode: 140800,
    Level: 2
},
{
    Item: "新绛县",
    Code: 140825,
    PCode: 140800,
    Level: 2
},
{
    Item: "绛县",
    Code: 140826,
    PCode: 140800,
    Level: 2
},
{
    Item: "垣曲县",
    Code: 140827,
    PCode: 140800,
    Level: 2
},
{
    Item: "夏县",
    Code: 140828,
    PCode: 140800,
    Level: 2
},
{
    Item: "平陆县",
    Code: 140829,
    PCode: 140800,
    Level: 2
},
{
    Item: "芮城县",
    Code: 140830,
    PCode: 140800,
    Level: 2
},
{
    Item: "永济市",
    Code: 140881,
    PCode: 140800,
    Level: 2
},
{
    Item: "河津市",
    Code: 140882,
    PCode: 140800,
    Level: 2
},
{
    Item: "忻州市",
    Code: 140900,
    PCode: 14e4,
    Level: 1
},
{
    Item: "市辖区",
    Code: 140901,
    PCode: 140900,
    Level: 2
},
{
    Item: "忻府区",
    Code: 140902,
    PCode: 140900,
    Level: 2
},
{
    Item: "定襄县",
    Code: 140921,
    PCode: 140900,
    Level: 2
},
{
    Item: "五台县",
    Code: 140922,
    PCode: 140900,
    Level: 2
},
{
    Item: "代县",
    Code: 140923,
    PCode: 140900,
    Level: 2
},
{
    Item: "繁峙县",
    Code: 140924,
    PCode: 140900,
    Level: 2
},
{
    Item: "宁武县",
    Code: 140925,
    PCode: 140900,
    Level: 2
},
{
    Item: "静乐县",
    Code: 140926,
    PCode: 140900,
    Level: 2
},
{
    Item: "神池县",
    Code: 140927,
    PCode: 140900,
    Level: 2
},
{
    Item: "五寨县",
    Code: 140928,
    PCode: 140900,
    Level: 2
},
{
    Item: "岢岚县",
    Code: 140929,
    PCode: 140900,
    Level: 2
},
{
    Item: "河曲县",
    Code: 140930,
    PCode: 140900,
    Level: 2
},
{
    Item: "保德县",
    Code: 140931,
    PCode: 140900,
    Level: 2
},
{
    Item: "偏关县",
    Code: 140932,
    PCode: 140900,
    Level: 2
},
{
    Item: "原平市",
    Code: 140981,
    PCode: 140900,
    Level: 2
},
{
    Item: "临汾市",
    Code: 141e3,
    PCode: 14e4,
    Level: 1
},
{
    Item: "市辖区",
    Code: 141001,
    PCode: 141e3,
    Level: 2
},
{
    Item: "尧都区",
    Code: 141002,
    PCode: 141e3,
    Level: 2
},
{
    Item: "曲沃县",
    Code: 141021,
    PCode: 141e3,
    Level: 2
},
{
    Item: "翼城县",
    Code: 141022,
    PCode: 141e3,
    Level: 2
},
{
    Item: "襄汾县",
    Code: 141023,
    PCode: 141e3,
    Level: 2
},
{
    Item: "洪洞县",
    Code: 141024,
    PCode: 141e3,
    Level: 2
},
{
    Item: "古县",
    Code: 141025,
    PCode: 141e3,
    Level: 2
},
{
    Item: "安泽县",
    Code: 141026,
    PCode: 141e3,
    Level: 2
},
{
    Item: "浮山县",
    Code: 141027,
    PCode: 141e3,
    Level: 2
},
{
    Item: "吉县",
    Code: 141028,
    PCode: 141e3,
    Level: 2
},
{
    Item: "乡宁县",
    Code: 141029,
    PCode: 141e3,
    Level: 2
},
{
    Item: "大宁县",
    Code: 141030,
    PCode: 141e3,
    Level: 2
},
{
    Item: "隰县",
    Code: 141031,
    PCode: 141e3,
    Level: 2
},
{
    Item: "永和县",
    Code: 141032,
    PCode: 141e3,
    Level: 2
},
{
    Item: "蒲县",
    Code: 141033,
    PCode: 141e3,
    Level: 2
},
{
    Item: "汾西县",
    Code: 141034,
    PCode: 141e3,
    Level: 2
},
{
    Item: "侯马市",
    Code: 141081,
    PCode: 141e3,
    Level: 2
},
{
    Item: "霍州市",
    Code: 141082,
    PCode: 141e3,
    Level: 2
},
{
    Item: "吕梁市",
    Code: 141100,
    PCode: 14e4,
    Level: 1
},
{
    Item: "市辖区",
    Code: 141101,
    PCode: 141100,
    Level: 2
},
{
    Item: "离石区",
    Code: 141102,
    PCode: 141100,
    Level: 2
},
{
    Item: "文水县",
    Code: 141121,
    PCode: 141100,
    Level: 2
},
{
    Item: "交城县",
    Code: 141122,
    PCode: 141100,
    Level: 2
},
{
    Item: "兴县",
    Code: 141123,
    PCode: 141100,
    Level: 2
},
{
    Item: "临县",
    Code: 141124,
    PCode: 141100,
    Level: 2
},
{
    Item: "柳林县",
    Code: 141125,
    PCode: 141100,
    Level: 2
},
{
    Item: "石楼县",
    Code: 141126,
    PCode: 141100,
    Level: 2
},
{
    Item: "岚县",
    Code: 141127,
    PCode: 141100,
    Level: 2
},
{
    Item: "方山县",
    Code: 141128,
    PCode: 141100,
    Level: 2
},
{
    Item: "中阳县",
    Code: 141129,
    PCode: 141100,
    Level: 2
},
{
    Item: "交口县",
    Code: 141130,
    PCode: 141100,
    Level: 2
},
{
    Item: "孝义市",
    Code: 141181,
    PCode: 141100,
    Level: 2
},
{
    Item: "汾阳市",
    Code: 141182,
    PCode: 141100,
    Level: 2
},
{
    Item: "内蒙古自治区",
    Code: 15e4,
    PCode: 0,
    Level: 0
},
{
    Item: "呼和浩特市",
    Code: 150100,
    PCode: 15e4,
    Level: 1
},
{
    Item: "市辖区",
    Code: 150101,
    PCode: 150100,
    Level: 2
},
{
    Item: "新城区",
    Code: 150102,
    PCode: 150100,
    Level: 2
},
{
    Item: "回民区",
    Code: 150103,
    PCode: 150100,
    Level: 2
},
{
    Item: "玉泉区",
    Code: 150104,
    PCode: 150100,
    Level: 2
},
{
    Item: "赛罕区",
    Code: 150105,
    PCode: 150100,
    Level: 2
},
{
    Item: "土默特左旗",
    Code: 150121,
    PCode: 150100,
    Level: 2
},
{
    Item: "托克托县",
    Code: 150122,
    PCode: 150100,
    Level: 2
},
{
    Item: "和林格尔县",
    Code: 150123,
    PCode: 150100,
    Level: 2
},
{
    Item: "清水河县",
    Code: 150124,
    PCode: 150100,
    Level: 2
},
{
    Item: "武川县",
    Code: 150125,
    PCode: 150100,
    Level: 2
},
{
    Item: "包头市",
    Code: 150200,
    PCode: 15e4,
    Level: 1
},
{
    Item: "市辖区",
    Code: 150201,
    PCode: 150200,
    Level: 2
},
{
    Item: "东河区",
    Code: 150202,
    PCode: 150200,
    Level: 2
},
{
    Item: "昆都仑区",
    Code: 150203,
    PCode: 150200,
    Level: 2
},
{
    Item: "青山区",
    Code: 150204,
    PCode: 150200,
    Level: 2
},
{
    Item: "石拐区",
    Code: 150205,
    PCode: 150200,
    Level: 2
},
{
    Item: "白云鄂博矿区",
    Code: 150206,
    PCode: 150200,
    Level: 2
},
{
    Item: "九原区",
    Code: 150207,
    PCode: 150200,
    Level: 2
},
{
    Item: "土默特右旗",
    Code: 150221,
    PCode: 150200,
    Level: 2
},
{
    Item: "固阳县",
    Code: 150222,
    PCode: 150200,
    Level: 2
},
{
    Item: "达尔罕茂明安联合旗",
    Code: 150223,
    PCode: 150200,
    Level: 2
},
{
    Item: "乌海市",
    Code: 150300,
    PCode: 15e4,
    Level: 1
},
{
    Item: "市辖区",
    Code: 150301,
    PCode: 150300,
    Level: 2
},
{
    Item: "海勃湾区",
    Code: 150302,
    PCode: 150300,
    Level: 2
},
{
    Item: "海南区",
    Code: 150303,
    PCode: 150300,
    Level: 2
},
{
    Item: "乌达区",
    Code: 150304,
    PCode: 150300,
    Level: 2
},
{
    Item: "赤峰市",
    Code: 150400,
    PCode: 15e4,
    Level: 1
},
{
    Item: "市辖区",
    Code: 150401,
    PCode: 150400,
    Level: 2
},
{
    Item: "红山区",
    Code: 150402,
    PCode: 150400,
    Level: 2
},
{
    Item: "元宝山区",
    Code: 150403,
    PCode: 150400,
    Level: 2
},
{
    Item: "松山区",
    Code: 150404,
    PCode: 150400,
    Level: 2
},
{
    Item: "阿鲁科尔沁旗",
    Code: 150421,
    PCode: 150400,
    Level: 2
},
{
    Item: "巴林左旗",
    Code: 150422,
    PCode: 150400,
    Level: 2
},
{
    Item: "巴林右旗",
    Code: 150423,
    PCode: 150400,
    Level: 2
},
{
    Item: "林西县",
    Code: 150424,
    PCode: 150400,
    Level: 2
},
{
    Item: "克什克腾旗",
    Code: 150425,
    PCode: 150400,
    Level: 2
},
{
    Item: "翁牛特旗",
    Code: 150426,
    PCode: 150400,
    Level: 2
},
{
    Item: "喀喇沁旗",
    Code: 150428,
    PCode: 150400,
    Level: 2
},
{
    Item: "宁城县",
    Code: 150429,
    PCode: 150400,
    Level: 2
},
{
    Item: "敖汉旗",
    Code: 150430,
    PCode: 150400,
    Level: 2
},
{
    Item: "通辽市",
    Code: 150500,
    PCode: 15e4,
    Level: 1
},
{
    Item: "市辖区",
    Code: 150501,
    PCode: 150500,
    Level: 2
},
{
    Item: "科尔沁区",
    Code: 150502,
    PCode: 150500,
    Level: 2
},
{
    Item: "科尔沁左翼中旗",
    Code: 150521,
    PCode: 150500,
    Level: 2
},
{
    Item: "科尔沁左翼后旗",
    Code: 150522,
    PCode: 150500,
    Level: 2
},
{
    Item: "开鲁县",
    Code: 150523,
    PCode: 150500,
    Level: 2
},
{
    Item: "库伦旗",
    Code: 150524,
    PCode: 150500,
    Level: 2
},
{
    Item: "奈曼旗",
    Code: 150525,
    PCode: 150500,
    Level: 2
},
{
    Item: "扎鲁特旗",
    Code: 150526,
    PCode: 150500,
    Level: 2
},
{
    Item: "霍林郭勒市",
    Code: 150581,
    PCode: 150500,
    Level: 2
},
{
    Item: "鄂尔多斯市",
    Code: 150600,
    PCode: 15e4,
    Level: 1
},
{
    Item: "市辖区",
    Code: 150601,
    PCode: 150600,
    Level: 2
},
{
    Item: "东胜区",
    Code: 150602,
    PCode: 150600,
    Level: 2
},
{
    Item: "达拉特旗",
    Code: 150621,
    PCode: 150600,
    Level: 2
},
{
    Item: "准格尔旗",
    Code: 150622,
    PCode: 150600,
    Level: 2
},
{
    Item: "鄂托克前旗",
    Code: 150623,
    PCode: 150600,
    Level: 2
},
{
    Item: "鄂托克旗",
    Code: 150624,
    PCode: 150600,
    Level: 2
},
{
    Item: "杭锦旗",
    Code: 150625,
    PCode: 150600,
    Level: 2
},
{
    Item: "乌审旗",
    Code: 150626,
    PCode: 150600,
    Level: 2
},
{
    Item: "伊金霍洛旗",
    Code: 150627,
    PCode: 150600,
    Level: 2
},
{
    Item: "呼伦贝尔市",
    Code: 150700,
    PCode: 15e4,
    Level: 1
},
{
    Item: "市辖区",
    Code: 150701,
    PCode: 150700,
    Level: 2
},
{
    Item: "海拉尔区",
    Code: 150702,
    PCode: 150700,
    Level: 2
},
{
    Item: "扎赉诺尔区",
    Code: 150703,
    PCode: 150700,
    Level: 2
},
{
    Item: "阿荣旗",
    Code: 150721,
    PCode: 150700,
    Level: 2
},
{
    Item: "莫力达瓦达斡尔族自治旗",
    Code: 150722,
    PCode: 150700,
    Level: 2
},
{
    Item: "鄂伦春自治旗",
    Code: 150723,
    PCode: 150700,
    Level: 2
},
{
    Item: "鄂温克族自治旗",
    Code: 150724,
    PCode: 150700,
    Level: 2
},
{
    Item: "陈巴尔虎旗",
    Code: 150725,
    PCode: 150700,
    Level: 2
},
{
    Item: "新巴尔虎左旗",
    Code: 150726,
    PCode: 150700,
    Level: 2
},
{
    Item: "新巴尔虎右旗",
    Code: 150727,
    PCode: 150700,
    Level: 2
},
{
    Item: "满洲里市",
    Code: 150781,
    PCode: 150700,
    Level: 2
},
{
    Item: "牙克石市",
    Code: 150782,
    PCode: 150700,
    Level: 2
},
{
    Item: "扎兰屯市",
    Code: 150783,
    PCode: 150700,
    Level: 2
},
{
    Item: "额尔古纳市",
    Code: 150784,
    PCode: 150700,
    Level: 2
},
{
    Item: "根河市",
    Code: 150785,
    PCode: 150700,
    Level: 2
},
{
    Item: "巴彦淖尔市",
    Code: 150800,
    PCode: 15e4,
    Level: 1
},
{
    Item: "市辖区",
    Code: 150801,
    PCode: 150800,
    Level: 2
},
{
    Item: "临河区",
    Code: 150802,
    PCode: 150800,
    Level: 2
},
{
    Item: "五原县",
    Code: 150821,
    PCode: 150800,
    Level: 2
},
{
    Item: "磴口县",
    Code: 150822,
    PCode: 150800,
    Level: 2
},
{
    Item: "乌拉特前旗",
    Code: 150823,
    PCode: 150800,
    Level: 2
},
{
    Item: "乌拉特中旗",
    Code: 150824,
    PCode: 150800,
    Level: 2
},
{
    Item: "乌拉特后旗",
    Code: 150825,
    PCode: 150800,
    Level: 2
},
{
    Item: "杭锦后旗",
    Code: 150826,
    PCode: 150800,
    Level: 2
},
{
    Item: "乌兰察布市",
    Code: 150900,
    PCode: 15e4,
    Level: 1
},
{
    Item: "市辖区",
    Code: 150901,
    PCode: 150900,
    Level: 2
},
{
    Item: "集宁区",
    Code: 150902,
    PCode: 150900,
    Level: 2
},
{
    Item: "卓资县",
    Code: 150921,
    PCode: 150900,
    Level: 2
},
{
    Item: "化德县",
    Code: 150922,
    PCode: 150900,
    Level: 2
},
{
    Item: "商都县",
    Code: 150923,
    PCode: 150900,
    Level: 2
},
{
    Item: "兴和县",
    Code: 150924,
    PCode: 150900,
    Level: 2
},
{
    Item: "凉城县",
    Code: 150925,
    PCode: 150900,
    Level: 2
},
{
    Item: "察哈尔右翼前旗",
    Code: 150926,
    PCode: 150900,
    Level: 2
},
{
    Item: "察哈尔右翼中旗",
    Code: 150927,
    PCode: 150900,
    Level: 2
},
{
    Item: "察哈尔右翼后旗",
    Code: 150928,
    PCode: 150900,
    Level: 2
},
{
    Item: "四子王旗",
    Code: 150929,
    PCode: 150900,
    Level: 2
},
{
    Item: "丰镇市",
    Code: 150981,
    PCode: 150900,
    Level: 2
},
{
    Item: "兴安盟",
    Code: 152200,
    PCode: 15e4,
    Level: 1
},
{
    Item: "乌兰浩特市",
    Code: 152201,
    PCode: 152200,
    Level: 2
},
{
    Item: "阿尔山市",
    Code: 152202,
    PCode: 152200,
    Level: 2
},
{
    Item: "科尔沁右翼前旗",
    Code: 152221,
    PCode: 152200,
    Level: 2
},
{
    Item: "科尔沁右翼中旗",
    Code: 152222,
    PCode: 152200,
    Level: 2
},
{
    Item: "扎赉特旗",
    Code: 152223,
    PCode: 152200,
    Level: 2
},
{
    Item: "突泉县",
    Code: 152224,
    PCode: 152200,
    Level: 2
},
{
    Item: "锡林郭勒盟",
    Code: 152500,
    PCode: 15e4,
    Level: 1
},
{
    Item: "二连浩特市",
    Code: 152501,
    PCode: 152500,
    Level: 2
},
{
    Item: "锡林浩特市",
    Code: 152502,
    PCode: 152500,
    Level: 2
},
{
    Item: "阿巴嘎旗",
    Code: 152522,
    PCode: 152500,
    Level: 2
},
{
    Item: "苏尼特左旗",
    Code: 152523,
    PCode: 152500,
    Level: 2
},
{
    Item: "苏尼特右旗",
    Code: 152524,
    PCode: 152500,
    Level: 2
},
{
    Item: "东乌珠穆沁旗",
    Code: 152525,
    PCode: 152500,
    Level: 2
},
{
    Item: "西乌珠穆沁旗",
    Code: 152526,
    PCode: 152500,
    Level: 2
},
{
    Item: "太仆寺旗",
    Code: 152527,
    PCode: 152500,
    Level: 2
},
{
    Item: "镶黄旗",
    Code: 152528,
    PCode: 152500,
    Level: 2
},
{
    Item: "正镶白旗",
    Code: 152529,
    PCode: 152500,
    Level: 2
},
{
    Item: "正蓝旗",
    Code: 152530,
    PCode: 152500,
    Level: 2
},
{
    Item: "多伦县",
    Code: 152531,
    PCode: 152500,
    Level: 2
},
{
    Item: "阿拉善盟",
    Code: 152900,
    PCode: 15e4,
    Level: 1
},
{
    Item: "阿拉善左旗",
    Code: 152921,
    PCode: 152900,
    Level: 2
},
{
    Item: "阿拉善右旗",
    Code: 152922,
    PCode: 152900,
    Level: 2
},
{
    Item: "额济纳旗",
    Code: 152923,
    PCode: 152900,
    Level: 2
},
{
    Item: "辽宁省",
    Code: 21e4,
    PCode: 0,
    Level: 0
},
{
    Item: "沈阳市",
    Code: 210100,
    PCode: 21e4,
    Level: 1
},
{
    Item: "市辖区",
    Code: 210101,
    PCode: 210100,
    Level: 2
},
{
    Item: "和平区",
    Code: 210102,
    PCode: 210100,
    Level: 2
},
{
    Item: "沈河区",
    Code: 210103,
    PCode: 210100,
    Level: 2
},
{
    Item: "大东区",
    Code: 210104,
    PCode: 210100,
    Level: 2
},
{
    Item: "皇姑区",
    Code: 210105,
    PCode: 210100,
    Level: 2
},
{
    Item: "铁西区",
    Code: 210106,
    PCode: 210100,
    Level: 2
},
{
    Item: "苏家屯区",
    Code: 210111,
    PCode: 210100,
    Level: 2
},
{
    Item: "浑南区",
    Code: 210112,
    PCode: 210100,
    Level: 2
},
{
    Item: "沈北新区",
    Code: 210113,
    PCode: 210100,
    Level: 2
},
{
    Item: "于洪区",
    Code: 210114,
    PCode: 210100,
    Level: 2
},
{
    Item: "辽中县",
    Code: 210122,
    PCode: 210100,
    Level: 2
},
{
    Item: "康平县",
    Code: 210123,
    PCode: 210100,
    Level: 2
},
{
    Item: "法库县",
    Code: 210124,
    PCode: 210100,
    Level: 2
},
{
    Item: "新民市",
    Code: 210181,
    PCode: 210100,
    Level: 2
},
{
    Item: "大连市",
    Code: 210200,
    PCode: 21e4,
    Level: 1
},
{
    Item: "市辖区",
    Code: 210201,
    PCode: 210200,
    Level: 2
},
{
    Item: "中山区",
    Code: 210202,
    PCode: 210200,
    Level: 2
},
{
    Item: "西岗区",
    Code: 210203,
    PCode: 210200,
    Level: 2
},
{
    Item: "沙河口区",
    Code: 210204,
    PCode: 210200,
    Level: 2
},
{
    Item: "甘井子区",
    Code: 210211,
    PCode: 210200,
    Level: 2
},
{
    Item: "旅顺口区",
    Code: 210212,
    PCode: 210200,
    Level: 2
},
{
    Item: "金州区",
    Code: 210213,
    PCode: 210200,
    Level: 2
},
{
    Item: "长海县",
    Code: 210224,
    PCode: 210200,
    Level: 2
},
{
    Item: "瓦房店市",
    Code: 210281,
    PCode: 210200,
    Level: 2
},
{
    Item: "普兰店市",
    Code: 210282,
    PCode: 210200,
    Level: 2
},
{
    Item: "庄河市",
    Code: 210283,
    PCode: 210200,
    Level: 2
},
{
    Item: "鞍山市",
    Code: 210300,
    PCode: 21e4,
    Level: 1
},
{
    Item: "市辖区",
    Code: 210301,
    PCode: 210300,
    Level: 2
},
{
    Item: "铁东区",
    Code: 210302,
    PCode: 210300,
    Level: 2
},
{
    Item: "铁西区",
    Code: 210303,
    PCode: 210300,
    Level: 2
},
{
    Item: "立山区",
    Code: 210304,
    PCode: 210300,
    Level: 2
},
{
    Item: "千山区",
    Code: 210311,
    PCode: 210300,
    Level: 2
},
{
    Item: "台安县",
    Code: 210321,
    PCode: 210300,
    Level: 2
},
{
    Item: "岫岩满族自治县",
    Code: 210323,
    PCode: 210300,
    Level: 2
},
{
    Item: "海城市",
    Code: 210381,
    PCode: 210300,
    Level: 2
},
{
    Item: "抚顺市",
    Code: 210400,
    PCode: 21e4,
    Level: 1
},
{
    Item: "市辖区",
    Code: 210401,
    PCode: 210400,
    Level: 2
},
{
    Item: "新抚区",
    Code: 210402,
    PCode: 210400,
    Level: 2
},
{
    Item: "东洲区",
    Code: 210403,
    PCode: 210400,
    Level: 2
},
{
    Item: "望花区",
    Code: 210404,
    PCode: 210400,
    Level: 2
},
{
    Item: "顺城区",
    Code: 210411,
    PCode: 210400,
    Level: 2
},
{
    Item: "抚顺县",
    Code: 210421,
    PCode: 210400,
    Level: 2
},
{
    Item: "新宾满族自治县",
    Code: 210422,
    PCode: 210400,
    Level: 2
},
{
    Item: "清原满族自治县",
    Code: 210423,
    PCode: 210400,
    Level: 2
},
{
    Item: "本溪市",
    Code: 210500,
    PCode: 21e4,
    Level: 1
},
{
    Item: "市辖区",
    Code: 210501,
    PCode: 210500,
    Level: 2
},
{
    Item: "平山区",
    Code: 210502,
    PCode: 210500,
    Level: 2
},
{
    Item: "溪湖区",
    Code: 210503,
    PCode: 210500,
    Level: 2
},
{
    Item: "明山区",
    Code: 210504,
    PCode: 210500,
    Level: 2
},
{
    Item: "南芬区",
    Code: 210505,
    PCode: 210500,
    Level: 2
},
{
    Item: "本溪满族自治县",
    Code: 210521,
    PCode: 210500,
    Level: 2
},
{
    Item: "桓仁满族自治县",
    Code: 210522,
    PCode: 210500,
    Level: 2
},
{
    Item: "丹东市",
    Code: 210600,
    PCode: 21e4,
    Level: 1
},
{
    Item: "市辖区",
    Code: 210601,
    PCode: 210600,
    Level: 2
},
{
    Item: "元宝区",
    Code: 210602,
    PCode: 210600,
    Level: 2
},
{
    Item: "振兴区",
    Code: 210603,
    PCode: 210600,
    Level: 2
},
{
    Item: "振安区",
    Code: 210604,
    PCode: 210600,
    Level: 2
},
{
    Item: "宽甸满族自治县",
    Code: 210624,
    PCode: 210600,
    Level: 2
},
{
    Item: "东港市",
    Code: 210681,
    PCode: 210600,
    Level: 2
},
{
    Item: "凤城市",
    Code: 210682,
    PCode: 210600,
    Level: 2
},
{
    Item: "锦州市",
    Code: 210700,
    PCode: 21e4,
    Level: 1
},
{
    Item: "市辖区",
    Code: 210701,
    PCode: 210700,
    Level: 2
},
{
    Item: "古塔区",
    Code: 210702,
    PCode: 210700,
    Level: 2
},
{
    Item: "凌河区",
    Code: 210703,
    PCode: 210700,
    Level: 2
},
{
    Item: "太和区",
    Code: 210711,
    PCode: 210700,
    Level: 2
},
{
    Item: "黑山县",
    Code: 210726,
    PCode: 210700,
    Level: 2
},
{
    Item: "义县",
    Code: 210727,
    PCode: 210700,
    Level: 2
},
{
    Item: "凌海市",
    Code: 210781,
    PCode: 210700,
    Level: 2
},
{
    Item: "北镇市",
    Code: 210782,
    PCode: 210700,
    Level: 2
},
{
    Item: "营口市",
    Code: 210800,
    PCode: 21e4,
    Level: 1
},
{
    Item: "市辖区",
    Code: 210801,
    PCode: 210800,
    Level: 2
},
{
    Item: "站前区",
    Code: 210802,
    PCode: 210800,
    Level: 2
},
{
    Item: "西市区",
    Code: 210803,
    PCode: 210800,
    Level: 2
},
{
    Item: "鲅鱼圈区",
    Code: 210804,
    PCode: 210800,
    Level: 2
},
{
    Item: "老边区",
    Code: 210811,
    PCode: 210800,
    Level: 2
},
{
    Item: "盖州市",
    Code: 210881,
    PCode: 210800,
    Level: 2
},
{
    Item: "大石桥市",
    Code: 210882,
    PCode: 210800,
    Level: 2
},
{
    Item: "阜新市",
    Code: 210900,
    PCode: 21e4,
    Level: 1
},
{
    Item: "市辖区",
    Code: 210901,
    PCode: 210900,
    Level: 2
},
{
    Item: "海州区",
    Code: 210902,
    PCode: 210900,
    Level: 2
},
{
    Item: "新邱区",
    Code: 210903,
    PCode: 210900,
    Level: 2
},
{
    Item: "太平区",
    Code: 210904,
    PCode: 210900,
    Level: 2
},
{
    Item: "清河门区",
    Code: 210905,
    PCode: 210900,
    Level: 2
},
{
    Item: "细河区",
    Code: 210911,
    PCode: 210900,
    Level: 2
},
{
    Item: "阜新蒙古族自治县",
    Code: 210921,
    PCode: 210900,
    Level: 2
},
{
    Item: "彰武县",
    Code: 210922,
    PCode: 210900,
    Level: 2
},
{
    Item: "辽阳市",
    Code: 211e3,
    PCode: 21e4,
    Level: 1
},
{
    Item: "市辖区",
    Code: 211001,
    PCode: 211e3,
    Level: 2
},
{
    Item: "白塔区",
    Code: 211002,
    PCode: 211e3,
    Level: 2
},
{
    Item: "文圣区",
    Code: 211003,
    PCode: 211e3,
    Level: 2
},
{
    Item: "宏伟区",
    Code: 211004,
    PCode: 211e3,
    Level: 2
},
{
    Item: "弓长岭区",
    Code: 211005,
    PCode: 211e3,
    Level: 2
},
{
    Item: "太子河区",
    Code: 211011,
    PCode: 211e3,
    Level: 2
},
{
    Item: "辽阳县",
    Code: 211021,
    PCode: 211e3,
    Level: 2
},
{
    Item: "灯塔市",
    Code: 211081,
    PCode: 211e3,
    Level: 2
},
{
    Item: "盘锦市",
    Code: 211100,
    PCode: 21e4,
    Level: 1
},
{
    Item: "市辖区",
    Code: 211101,
    PCode: 211100,
    Level: 2
},
{
    Item: "双台子区",
    Code: 211102,
    PCode: 211100,
    Level: 2
},
{
    Item: "兴隆台区",
    Code: 211103,
    PCode: 211100,
    Level: 2
},
{
    Item: "大洼县",
    Code: 211121,
    PCode: 211100,
    Level: 2
},
{
    Item: "盘山县",
    Code: 211122,
    PCode: 211100,
    Level: 2
},
{
    Item: "铁岭市",
    Code: 211200,
    PCode: 21e4,
    Level: 1
},
{
    Item: "市辖区",
    Code: 211201,
    PCode: 211200,
    Level: 2
},
{
    Item: "银州区",
    Code: 211202,
    PCode: 211200,
    Level: 2
},
{
    Item: "清河区",
    Code: 211204,
    PCode: 211200,
    Level: 2
},
{
    Item: "铁岭县",
    Code: 211221,
    PCode: 211200,
    Level: 2
},
{
    Item: "西丰县",
    Code: 211223,
    PCode: 211200,
    Level: 2
},
{
    Item: "昌图县",
    Code: 211224,
    PCode: 211200,
    Level: 2
},
{
    Item: "调兵山市",
    Code: 211281,
    PCode: 211200,
    Level: 2
},
{
    Item: "开原市",
    Code: 211282,
    PCode: 211200,
    Level: 2
},
{
    Item: "朝阳市",
    Code: 211300,
    PCode: 21e4,
    Level: 1
},
{
    Item: "市辖区",
    Code: 211301,
    PCode: 211300,
    Level: 2
},
{
    Item: "双塔区",
    Code: 211302,
    PCode: 211300,
    Level: 2
},
{
    Item: "龙城区",
    Code: 211303,
    PCode: 211300,
    Level: 2
},
{
    Item: "朝阳县",
    Code: 211321,
    PCode: 211300,
    Level: 2
},
{
    Item: "建平县",
    Code: 211322,
    PCode: 211300,
    Level: 2
},
{
    Item: "喀喇沁左翼蒙古族自治县",
    Code: 211324,
    PCode: 211300,
    Level: 2
},
{
    Item: "北票市",
    Code: 211381,
    PCode: 211300,
    Level: 2
},
{
    Item: "凌源市",
    Code: 211382,
    PCode: 211300,
    Level: 2
},
{
    Item: "葫芦岛市",
    Code: 211400,
    PCode: 21e4,
    Level: 1
},
{
    Item: "市辖区",
    Code: 211401,
    PCode: 211400,
    Level: 2
},
{
    Item: "连山区",
    Code: 211402,
    PCode: 211400,
    Level: 2
},
{
    Item: "龙港区",
    Code: 211403,
    PCode: 211400,
    Level: 2
},
{
    Item: "南票区",
    Code: 211404,
    PCode: 211400,
    Level: 2
},
{
    Item: "绥中县",
    Code: 211421,
    PCode: 211400,
    Level: 2
},
{
    Item: "建昌县",
    Code: 211422,
    PCode: 211400,
    Level: 2
},
{
    Item: "兴城市",
    Code: 211481,
    PCode: 211400,
    Level: 2
},
{
    Item: "吉林省",
    Code: 22e4,
    PCode: 0,
    Level: 0
},
{
    Item: "长春市",
    Code: 220100,
    PCode: 22e4,
    Level: 1
},
{
    Item: "市辖区",
    Code: 220101,
    PCode: 220100,
    Level: 2
},
{
    Item: "南关区",
    Code: 220102,
    PCode: 220100,
    Level: 2
},
{
    Item: "宽城区",
    Code: 220103,
    PCode: 220100,
    Level: 2
},
{
    Item: "朝阳区",
    Code: 220104,
    PCode: 220100,
    Level: 2
},
{
    Item: "二道区",
    Code: 220105,
    PCode: 220100,
    Level: 2
},
{
    Item: "绿园区",
    Code: 220106,
    PCode: 220100,
    Level: 2
},
{
    Item: "双阳区",
    Code: 220112,
    PCode: 220100,
    Level: 2
},
{
    Item: "九台区",
    Code: 220113,
    PCode: 220100,
    Level: 2
},
{
    Item: "农安县",
    Code: 220122,
    PCode: 220100,
    Level: 2
},
{
    Item: "榆树市",
    Code: 220182,
    PCode: 220100,
    Level: 2
},
{
    Item: "德惠市",
    Code: 220183,
    PCode: 220100,
    Level: 2
},
{
    Item: "吉林市",
    Code: 220200,
    PCode: 22e4,
    Level: 1
},
{
    Item: "市辖区",
    Code: 220201,
    PCode: 220200,
    Level: 2
},
{
    Item: "昌邑区",
    Code: 220202,
    PCode: 220200,
    Level: 2
},
{
    Item: "龙潭区",
    Code: 220203,
    PCode: 220200,
    Level: 2
},
{
    Item: "船营区",
    Code: 220204,
    PCode: 220200,
    Level: 2
},
{
    Item: "丰满区",
    Code: 220211,
    PCode: 220200,
    Level: 2
},
{
    Item: "永吉县",
    Code: 220221,
    PCode: 220200,
    Level: 2
},
{
    Item: "蛟河市",
    Code: 220281,
    PCode: 220200,
    Level: 2
},
{
    Item: "桦甸市",
    Code: 220282,
    PCode: 220200,
    Level: 2
},
{
    Item: "舒兰市",
    Code: 220283,
    PCode: 220200,
    Level: 2
},
{
    Item: "磐石市",
    Code: 220284,
    PCode: 220200,
    Level: 2
},
{
    Item: "四平市",
    Code: 220300,
    PCode: 22e4,
    Level: 1
},
{
    Item: "市辖区",
    Code: 220301,
    PCode: 220300,
    Level: 2
},
{
    Item: "铁西区",
    Code: 220302,
    PCode: 220300,
    Level: 2
},
{
    Item: "铁东区",
    Code: 220303,
    PCode: 220300,
    Level: 2
},
{
    Item: "梨树县",
    Code: 220322,
    PCode: 220300,
    Level: 2
},
{
    Item: "伊通满族自治县",
    Code: 220323,
    PCode: 220300,
    Level: 2
},
{
    Item: "公主岭市",
    Code: 220381,
    PCode: 220300,
    Level: 2
},
{
    Item: "双辽市",
    Code: 220382,
    PCode: 220300,
    Level: 2
},
{
    Item: "辽源市",
    Code: 220400,
    PCode: 22e4,
    Level: 1
},
{
    Item: "市辖区",
    Code: 220401,
    PCode: 220400,
    Level: 2
},
{
    Item: "龙山区",
    Code: 220402,
    PCode: 220400,
    Level: 2
},
{
    Item: "西安区",
    Code: 220403,
    PCode: 220400,
    Level: 2
},
{
    Item: "东丰县",
    Code: 220421,
    PCode: 220400,
    Level: 2
},
{
    Item: "东辽县",
    Code: 220422,
    PCode: 220400,
    Level: 2
},
{
    Item: "通化市",
    Code: 220500,
    PCode: 22e4,
    Level: 1
},
{
    Item: "市辖区",
    Code: 220501,
    PCode: 220500,
    Level: 2
},
{
    Item: "东昌区",
    Code: 220502,
    PCode: 220500,
    Level: 2
},
{
    Item: "二道江区",
    Code: 220503,
    PCode: 220500,
    Level: 2
},
{
    Item: "通化县",
    Code: 220521,
    PCode: 220500,
    Level: 2
},
{
    Item: "辉南县",
    Code: 220523,
    PCode: 220500,
    Level: 2
},
{
    Item: "柳河县",
    Code: 220524,
    PCode: 220500,
    Level: 2
},
{
    Item: "梅河口市",
    Code: 220581,
    PCode: 220500,
    Level: 2
},
{
    Item: "集安市",
    Code: 220582,
    PCode: 220500,
    Level: 2
},
{
    Item: "白山市",
    Code: 220600,
    PCode: 22e4,
    Level: 1
},
{
    Item: "市辖区",
    Code: 220601,
    PCode: 220600,
    Level: 2
},
{
    Item: "浑江区",
    Code: 220602,
    PCode: 220600,
    Level: 2
},
{
    Item: "江源区",
    Code: 220605,
    PCode: 220600,
    Level: 2
},
{
    Item: "抚松县",
    Code: 220621,
    PCode: 220600,
    Level: 2
},
{
    Item: "靖宇县",
    Code: 220622,
    PCode: 220600,
    Level: 2
},
{
    Item: "长白朝鲜族自治县",
    Code: 220623,
    PCode: 220600,
    Level: 2
},
{
    Item: "临江市",
    Code: 220681,
    PCode: 220600,
    Level: 2
},
{
    Item: "松原市",
    Code: 220700,
    PCode: 22e4,
    Level: 1
},
{
    Item: "市辖区",
    Code: 220701,
    PCode: 220700,
    Level: 2
},
{
    Item: "宁江区",
    Code: 220702,
    PCode: 220700,
    Level: 2
},
{
    Item: "前郭尔罗斯蒙古族自治县",
    Code: 220721,
    PCode: 220700,
    Level: 2
},
{
    Item: "长岭县",
    Code: 220722,
    PCode: 220700,
    Level: 2
},
{
    Item: "乾安县",
    Code: 220723,
    PCode: 220700,
    Level: 2
},
{
    Item: "扶余市",
    Code: 220781,
    PCode: 220700,
    Level: 2
},
{
    Item: "白城市",
    Code: 220800,
    PCode: 22e4,
    Level: 1
},
{
    Item: "市辖区",
    Code: 220801,
    PCode: 220800,
    Level: 2
},
{
    Item: "洮北区",
    Code: 220802,
    PCode: 220800,
    Level: 2
},
{
    Item: "镇赉县",
    Code: 220821,
    PCode: 220800,
    Level: 2
},
{
    Item: "通榆县",
    Code: 220822,
    PCode: 220800,
    Level: 2
},
{
    Item: "洮南市",
    Code: 220881,
    PCode: 220800,
    Level: 2
},
{
    Item: "大安市",
    Code: 220882,
    PCode: 220800,
    Level: 2
},
{
    Item: "延边朝鲜族自治州",
    Code: 222400,
    PCode: 22e4,
    Level: 1
},
{
    Item: "延吉市",
    Code: 222401,
    PCode: 222400,
    Level: 2
},
{
    Item: "图们市",
    Code: 222402,
    PCode: 222400,
    Level: 2
},
{
    Item: "敦化市",
    Code: 222403,
    PCode: 222400,
    Level: 2
},
{
    Item: "珲春市",
    Code: 222404,
    PCode: 222400,
    Level: 2
},
{
    Item: "龙井市",
    Code: 222405,
    PCode: 222400,
    Level: 2
},
{
    Item: "和龙市",
    Code: 222406,
    PCode: 222400,
    Level: 2
},
{
    Item: "汪清县",
    Code: 222424,
    PCode: 222400,
    Level: 2
},
{
    Item: "安图县",
    Code: 222426,
    PCode: 222400,
    Level: 2
},
{
    Item: "黑龙江省",
    Code: 23e4,
    PCode: 0,
    Level: 0
},
{
    Item: "哈尔滨市",
    Code: 230100,
    PCode: 23e4,
    Level: 1
},
{
    Item: "市辖区",
    Code: 230101,
    PCode: 230100,
    Level: 2
},
{
    Item: "道里区",
    Code: 230102,
    PCode: 230100,
    Level: 2
},
{
    Item: "南岗区",
    Code: 230103,
    PCode: 230100,
    Level: 2
},
{
    Item: "道外区",
    Code: 230104,
    PCode: 230100,
    Level: 2
},
{
    Item: "平房区",
    Code: 230108,
    PCode: 230100,
    Level: 2
},
{
    Item: "松北区",
    Code: 230109,
    PCode: 230100,
    Level: 2
},
{
    Item: "香坊区",
    Code: 230110,
    PCode: 230100,
    Level: 2
},
{
    Item: "呼兰区",
    Code: 230111,
    PCode: 230100,
    Level: 2
},
{
    Item: "阿城区",
    Code: 230112,
    PCode: 230100,
    Level: 2
},
{
    Item: "双城区",
    Code: 230113,
    PCode: 230100,
    Level: 2
},
{
    Item: "依兰县",
    Code: 230123,
    PCode: 230100,
    Level: 2
},
{
    Item: "方正县",
    Code: 230124,
    PCode: 230100,
    Level: 2
},
{
    Item: "宾县",
    Code: 230125,
    PCode: 230100,
    Level: 2
},
{
    Item: "巴彦县",
    Code: 230126,
    PCode: 230100,
    Level: 2
},
{
    Item: "木兰县",
    Code: 230127,
    PCode: 230100,
    Level: 2
},
{
    Item: "通河县",
    Code: 230128,
    PCode: 230100,
    Level: 2
},
{
    Item: "延寿县",
    Code: 230129,
    PCode: 230100,
    Level: 2
},
{
    Item: "尚志市",
    Code: 230183,
    PCode: 230100,
    Level: 2
},
{
    Item: "五常市",
    Code: 230184,
    PCode: 230100,
    Level: 2
},
{
    Item: "齐齐哈尔市",
    Code: 230200,
    PCode: 23e4,
    Level: 1
},
{
    Item: "市辖区",
    Code: 230201,
    PCode: 230200,
    Level: 2
},
{
    Item: "龙沙区",
    Code: 230202,
    PCode: 230200,
    Level: 2
},
{
    Item: "建华区",
    Code: 230203,
    PCode: 230200,
    Level: 2
},
{
    Item: "铁锋区",
    Code: 230204,
    PCode: 230200,
    Level: 2
},
{
    Item: "昂昂溪区",
    Code: 230205,
    PCode: 230200,
    Level: 2
},
{
    Item: "富拉尔基区",
    Code: 230206,
    PCode: 230200,
    Level: 2
},
{
    Item: "碾子山区",
    Code: 230207,
    PCode: 230200,
    Level: 2
},
{
    Item: "梅里斯达斡尔族区",
    Code: 230208,
    PCode: 230200,
    Level: 2
},
{
    Item: "龙江县",
    Code: 230221,
    PCode: 230200,
    Level: 2
},
{
    Item: "依安县",
    Code: 230223,
    PCode: 230200,
    Level: 2
},
{
    Item: "泰来县",
    Code: 230224,
    PCode: 230200,
    Level: 2
},
{
    Item: "甘南县",
    Code: 230225,
    PCode: 230200,
    Level: 2
},
{
    Item: "富裕县",
    Code: 230227,
    PCode: 230200,
    Level: 2
},
{
    Item: "克山县",
    Code: 230229,
    PCode: 230200,
    Level: 2
},
{
    Item: "克东县",
    Code: 230230,
    PCode: 230200,
    Level: 2
},
{
    Item: "拜泉县",
    Code: 230231,
    PCode: 230200,
    Level: 2
},
{
    Item: "讷河市",
    Code: 230281,
    PCode: 230200,
    Level: 2
},
{
    Item: "鸡西市",
    Code: 230300,
    PCode: 23e4,
    Level: 1
},
{
    Item: "市辖区",
    Code: 230301,
    PCode: 230300,
    Level: 2
},
{
    Item: "鸡冠区",
    Code: 230302,
    PCode: 230300,
    Level: 2
},
{
    Item: "恒山区",
    Code: 230303,
    PCode: 230300,
    Level: 2
},
{
    Item: "滴道区",
    Code: 230304,
    PCode: 230300,
    Level: 2
},
{
    Item: "梨树区",
    Code: 230305,
    PCode: 230300,
    Level: 2
},
{
    Item: "城子河区",
    Code: 230306,
    PCode: 230300,
    Level: 2
},
{
    Item: "麻山区",
    Code: 230307,
    PCode: 230300,
    Level: 2
},
{
    Item: "鸡东县",
    Code: 230321,
    PCode: 230300,
    Level: 2
},
{
    Item: "虎林市",
    Code: 230381,
    PCode: 230300,
    Level: 2
},
{
    Item: "密山市",
    Code: 230382,
    PCode: 230300,
    Level: 2
},
{
    Item: "鹤岗市",
    Code: 230400,
    PCode: 23e4,
    Level: 1
},
{
    Item: "市辖区",
    Code: 230401,
    PCode: 230400,
    Level: 2
},
{
    Item: "向阳区",
    Code: 230402,
    PCode: 230400,
    Level: 2
},
{
    Item: "工农区",
    Code: 230403,
    PCode: 230400,
    Level: 2
},
{
    Item: "南山区",
    Code: 230404,
    PCode: 230400,
    Level: 2
},
{
    Item: "兴安区",
    Code: 230405,
    PCode: 230400,
    Level: 2
},
{
    Item: "东山区",
    Code: 230406,
    PCode: 230400,
    Level: 2
},
{
    Item: "兴山区",
    Code: 230407,
    PCode: 230400,
    Level: 2
},
{
    Item: "萝北县",
    Code: 230421,
    PCode: 230400,
    Level: 2
},
{
    Item: "绥滨县",
    Code: 230422,
    PCode: 230400,
    Level: 2
},
{
    Item: "双鸭山市",
    Code: 230500,
    PCode: 23e4,
    Level: 1
},
{
    Item: "市辖区",
    Code: 230501,
    PCode: 230500,
    Level: 2
},
{
    Item: "尖山区",
    Code: 230502,
    PCode: 230500,
    Level: 2
},
{
    Item: "岭东区",
    Code: 230503,
    PCode: 230500,
    Level: 2
},
{
    Item: "四方台区",
    Code: 230505,
    PCode: 230500,
    Level: 2
},
{
    Item: "宝山区",
    Code: 230506,
    PCode: 230500,
    Level: 2
},
{
    Item: "集贤县",
    Code: 230521,
    PCode: 230500,
    Level: 2
},
{
    Item: "友谊县",
    Code: 230522,
    PCode: 230500,
    Level: 2
},
{
    Item: "宝清县",
    Code: 230523,
    PCode: 230500,
    Level: 2
},
{
    Item: "饶河县",
    Code: 230524,
    PCode: 230500,
    Level: 2
},
{
    Item: "大庆市",
    Code: 230600,
    PCode: 23e4,
    Level: 1
},
{
    Item: "市辖区",
    Code: 230601,
    PCode: 230600,
    Level: 2
},
{
    Item: "萨尔图区",
    Code: 230602,
    PCode: 230600,
    Level: 2
},
{
    Item: "龙凤区",
    Code: 230603,
    PCode: 230600,
    Level: 2
},
{
    Item: "让胡路区",
    Code: 230604,
    PCode: 230600,
    Level: 2
},
{
    Item: "红岗区",
    Code: 230605,
    PCode: 230600,
    Level: 2
},
{
    Item: "大同区",
    Code: 230606,
    PCode: 230600,
    Level: 2
},
{
    Item: "肇州县",
    Code: 230621,
    PCode: 230600,
    Level: 2
},
{
    Item: "肇源县",
    Code: 230622,
    PCode: 230600,
    Level: 2
},
{
    Item: "林甸县",
    Code: 230623,
    PCode: 230600,
    Level: 2
},
{
    Item: "杜尔伯特蒙古族自治县",
    Code: 230624,
    PCode: 230600,
    Level: 2
},
{
    Item: "伊春市",
    Code: 230700,
    PCode: 23e4,
    Level: 1
},
{
    Item: "市辖区",
    Code: 230701,
    PCode: 230700,
    Level: 2
},
{
    Item: "伊春区",
    Code: 230702,
    PCode: 230700,
    Level: 2
},
{
    Item: "南岔区",
    Code: 230703,
    PCode: 230700,
    Level: 2
},
{
    Item: "友好区",
    Code: 230704,
    PCode: 230700,
    Level: 2
},
{
    Item: "西林区",
    Code: 230705,
    PCode: 230700,
    Level: 2
},
{
    Item: "翠峦区",
    Code: 230706,
    PCode: 230700,
    Level: 2
},
{
    Item: "新青区",
    Code: 230707,
    PCode: 230700,
    Level: 2
},
{
    Item: "美溪区",
    Code: 230708,
    PCode: 230700,
    Level: 2
},
{
    Item: "金山屯区",
    Code: 230709,
    PCode: 230700,
    Level: 2
},
{
    Item: "五营区",
    Code: 230710,
    PCode: 230700,
    Level: 2
},
{
    Item: "乌马河区",
    Code: 230711,
    PCode: 230700,
    Level: 2
},
{
    Item: "汤旺河区",
    Code: 230712,
    PCode: 230700,
    Level: 2
},
{
    Item: "带岭区",
    Code: 230713,
    PCode: 230700,
    Level: 2
},
{
    Item: "乌伊岭区",
    Code: 230714,
    PCode: 230700,
    Level: 2
},
{
    Item: "红星区",
    Code: 230715,
    PCode: 230700,
    Level: 2
},
{
    Item: "上甘岭区",
    Code: 230716,
    PCode: 230700,
    Level: 2
},
{
    Item: "嘉荫县",
    Code: 230722,
    PCode: 230700,
    Level: 2
},
{
    Item: "铁力市",
    Code: 230781,
    PCode: 230700,
    Level: 2
},
{
    Item: "佳木斯市",
    Code: 230800,
    PCode: 23e4,
    Level: 1
},
{
    Item: "市辖区",
    Code: 230801,
    PCode: 230800,
    Level: 2
},
{
    Item: "向阳区",
    Code: 230803,
    PCode: 230800,
    Level: 2
},
{
    Item: "前进区",
    Code: 230804,
    PCode: 230800,
    Level: 2
},
{
    Item: "东风区",
    Code: 230805,
    PCode: 230800,
    Level: 2
},
{
    Item: "郊区",
    Code: 230811,
    PCode: 230800,
    Level: 2
},
{
    Item: "桦南县",
    Code: 230822,
    PCode: 230800,
    Level: 2
},
{
    Item: "桦川县",
    Code: 230826,
    PCode: 230800,
    Level: 2
},
{
    Item: "汤原县",
    Code: 230828,
    PCode: 230800,
    Level: 2
},
{
    Item: "抚远县",
    Code: 230833,
    PCode: 230800,
    Level: 2
},
{
    Item: "同江市",
    Code: 230881,
    PCode: 230800,
    Level: 2
},
{
    Item: "富锦市",
    Code: 230882,
    PCode: 230800,
    Level: 2
},
{
    Item: "七台河市",
    Code: 230900,
    PCode: 23e4,
    Level: 1
},
{
    Item: "市辖区",
    Code: 230901,
    PCode: 230900,
    Level: 2
},
{
    Item: "新兴区",
    Code: 230902,
    PCode: 230900,
    Level: 2
},
{
    Item: "桃山区",
    Code: 230903,
    PCode: 230900,
    Level: 2
},
{
    Item: "茄子河区",
    Code: 230904,
    PCode: 230900,
    Level: 2
},
{
    Item: "勃利县",
    Code: 230921,
    PCode: 230900,
    Level: 2
},
{
    Item: "牡丹江市",
    Code: 231e3,
    PCode: 23e4,
    Level: 1
},
{
    Item: "市辖区",
    Code: 231001,
    PCode: 231e3,
    Level: 2
},
{
    Item: "东安区",
    Code: 231002,
    PCode: 231e3,
    Level: 2
},
{
    Item: "阳明区",
    Code: 231003,
    PCode: 231e3,
    Level: 2
},
{
    Item: "爱民区",
    Code: 231004,
    PCode: 231e3,
    Level: 2
},
{
    Item: "西安区",
    Code: 231005,
    PCode: 231e3,
    Level: 2
},
{
    Item: "东宁县",
    Code: 231024,
    PCode: 231e3,
    Level: 2
},
{
    Item: "林口县",
    Code: 231025,
    PCode: 231e3,
    Level: 2
},
{
    Item: "绥芬河市",
    Code: 231081,
    PCode: 231e3,
    Level: 2
},
{
    Item: "海林市",
    Code: 231083,
    PCode: 231e3,
    Level: 2
},
{
    Item: "宁安市",
    Code: 231084,
    PCode: 231e3,
    Level: 2
},
{
    Item: "穆棱市",
    Code: 231085,
    PCode: 231e3,
    Level: 2
},
{
    Item: "黑河市",
    Code: 231100,
    PCode: 23e4,
    Level: 1
},
{
    Item: "市辖区",
    Code: 231101,
    PCode: 231100,
    Level: 2
},
{
    Item: "爱辉区",
    Code: 231102,
    PCode: 231100,
    Level: 2
},
{
    Item: "嫩江县",
    Code: 231121,
    PCode: 231100,
    Level: 2
},
{
    Item: "逊克县",
    Code: 231123,
    PCode: 231100,
    Level: 2
},
{
    Item: "孙吴县",
    Code: 231124,
    PCode: 231100,
    Level: 2
},
{
    Item: "北安市",
    Code: 231181,
    PCode: 231100,
    Level: 2
},
{
    Item: "五大连池市",
    Code: 231182,
    PCode: 231100,
    Level: 2
},
{
    Item: "绥化市",
    Code: 231200,
    PCode: 23e4,
    Level: 1
},
{
    Item: "市辖区",
    Code: 231201,
    PCode: 231200,
    Level: 2
},
{
    Item: "北林区",
    Code: 231202,
    PCode: 231200,
    Level: 2
},
{
    Item: "望奎县",
    Code: 231221,
    PCode: 231200,
    Level: 2
},
{
    Item: "兰西县",
    Code: 231222,
    PCode: 231200,
    Level: 2
},
{
    Item: "青冈县",
    Code: 231223,
    PCode: 231200,
    Level: 2
},
{
    Item: "庆安县",
    Code: 231224,
    PCode: 231200,
    Level: 2
},
{
    Item: "明水县",
    Code: 231225,
    PCode: 231200,
    Level: 2
},
{
    Item: "绥棱县",
    Code: 231226,
    PCode: 231200,
    Level: 2
},
{
    Item: "安达市",
    Code: 231281,
    PCode: 231200,
    Level: 2
},
{
    Item: "肇东市",
    Code: 231282,
    PCode: 231200,
    Level: 2
},
{
    Item: "海伦市",
    Code: 231283,
    PCode: 231200,
    Level: 2
},
{
    Item: "大兴安岭地区",
    Code: 232700,
    PCode: 23e4,
    Level: 1
},
{
    Item: "呼玛县",
    Code: 232721,
    PCode: 232700,
    Level: 2
},
{
    Item: "塔河县",
    Code: 232722,
    PCode: 232700,
    Level: 2
},
{
    Item: "漠河县",
    Code: 232723,
    PCode: 232700,
    Level: 2
},
{
    Item: "上海市",
    Code: 31e4,
    PCode: 0,
    Level: 0
},
{
    Item: "上海市",
    Code: 310100,
    PCode: 31e4,
    Level: 1
},
{
    Item: "黄浦区",
    Code: 310101,
    PCode: 310100,
    Level: 2
},
{
    Item: "徐汇区",
    Code: 310104,
    PCode: 310100,
    Level: 2
},
{
    Item: "长宁区",
    Code: 310105,
    PCode: 310100,
    Level: 2
},
{
    Item: "静安区",
    Code: 310106,
    PCode: 310100,
    Level: 2
},
{
    Item: "普陀区",
    Code: 310107,
    PCode: 310100,
    Level: 2
},
{
    Item: "闸北区",
    Code: 310108,
    PCode: 310100,
    Level: 2
},
{
    Item: "虹口区",
    Code: 310109,
    PCode: 310100,
    Level: 2
},
{
    Item: "杨浦区",
    Code: 310110,
    PCode: 310100,
    Level: 2
},
{
    Item: "闵行区",
    Code: 310112,
    PCode: 310100,
    Level: 2
},
{
    Item: "宝山区",
    Code: 310113,
    PCode: 310100,
    Level: 2
},
{
    Item: "嘉定区",
    Code: 310114,
    PCode: 310100,
    Level: 2
},
{
    Item: "浦东新区",
    Code: 310115,
    PCode: 310100,
    Level: 2
},
{
    Item: "金山区",
    Code: 310116,
    PCode: 310100,
    Level: 2
},
{
    Item: "松江区",
    Code: 310117,
    PCode: 310100,
    Level: 2
},
{
    Item: "青浦区",
    Code: 310118,
    PCode: 310100,
    Level: 2
},
{
    Item: "奉贤区",
    Code: 310120,
    PCode: 310100,
    Level: 2
},
{
    Item: "崇明县",
    Code: 310230,
    PCode: 310100,
    Level: 2
},
{
    Item: "江苏省",
    Code: 32e4,
    PCode: 0,
    Level: 0
},
{
    Item: "南京市",
    Code: 320100,
    PCode: 32e4,
    Level: 1
},
{
    Item: "市辖区",
    Code: 320101,
    PCode: 320100,
    Level: 2
},
{
    Item: "玄武区",
    Code: 320102,
    PCode: 320100,
    Level: 2
},
{
    Item: "秦淮区",
    Code: 320104,
    PCode: 320100,
    Level: 2
},
{
    Item: "建邺区",
    Code: 320105,
    PCode: 320100,
    Level: 2
},
{
    Item: "鼓楼区",
    Code: 320106,
    PCode: 320100,
    Level: 2
},
{
    Item: "浦口区",
    Code: 320111,
    PCode: 320100,
    Level: 2
},
{
    Item: "栖霞区",
    Code: 320113,
    PCode: 320100,
    Level: 2
},
{
    Item: "雨花台区",
    Code: 320114,
    PCode: 320100,
    Level: 2
},
{
    Item: "江宁区",
    Code: 320115,
    PCode: 320100,
    Level: 2
},
{
    Item: "六合区",
    Code: 320116,
    PCode: 320100,
    Level: 2
},
{
    Item: "溧水区",
    Code: 320117,
    PCode: 320100,
    Level: 2
},
{
    Item: "高淳区",
    Code: 320118,
    PCode: 320100,
    Level: 2
},
{
    Item: "无锡市",
    Code: 320200,
    PCode: 32e4,
    Level: 1
},
{
    Item: "市辖区",
    Code: 320201,
    PCode: 320200,
    Level: 2
},
{
    Item: "崇安区",
    Code: 320202,
    PCode: 320200,
    Level: 2
},
{
    Item: "南长区",
    Code: 320203,
    PCode: 320200,
    Level: 2
},
{
    Item: "北塘区",
    Code: 320204,
    PCode: 320200,
    Level: 2
},
{
    Item: "锡山区",
    Code: 320205,
    PCode: 320200,
    Level: 2
},
{
    Item: "惠山区",
    Code: 320206,
    PCode: 320200,
    Level: 2
},
{
    Item: "滨湖区",
    Code: 320211,
    PCode: 320200,
    Level: 2
},
{
    Item: "江阴市",
    Code: 320281,
    PCode: 320200,
    Level: 2
},
{
    Item: "宜兴市",
    Code: 320282,
    PCode: 320200,
    Level: 2
},
{
    Item: "徐州市",
    Code: 320300,
    PCode: 32e4,
    Level: 1
},
{
    Item: "市辖区",
    Code: 320301,
    PCode: 320300,
    Level: 2
},
{
    Item: "鼓楼区",
    Code: 320302,
    PCode: 320300,
    Level: 2
},
{
    Item: "云龙区",
    Code: 320303,
    PCode: 320300,
    Level: 2
},
{
    Item: "贾汪区",
    Code: 320305,
    PCode: 320300,
    Level: 2
},
{
    Item: "泉山区",
    Code: 320311,
    PCode: 320300,
    Level: 2
},
{
    Item: "铜山区",
    Code: 320312,
    PCode: 320300,
    Level: 2
},
{
    Item: "丰县",
    Code: 320321,
    PCode: 320300,
    Level: 2
},
{
    Item: "沛县",
    Code: 320322,
    PCode: 320300,
    Level: 2
},
{
    Item: "睢宁县",
    Code: 320324,
    PCode: 320300,
    Level: 2
},
{
    Item: "新沂市",
    Code: 320381,
    PCode: 320300,
    Level: 2
},
{
    Item: "邳州市",
    Code: 320382,
    PCode: 320300,
    Level: 2
},
{
    Item: "常州市",
    Code: 320400,
    PCode: 32e4,
    Level: 1
},
{
    Item: "市辖区",
    Code: 320401,
    PCode: 320400,
    Level: 2
},
{
    Item: "天宁区",
    Code: 320402,
    PCode: 320400,
    Level: 2
},
{
    Item: "钟楼区",
    Code: 320404,
    PCode: 320400,
    Level: 2
},
{
    Item: "新北区",
    Code: 320411,
    PCode: 320400,
    Level: 2
},
{
    Item: "武进区",
    Code: 320412,
    PCode: 320400,
    Level: 2
},
{
    Item: "金坛区",
    Code: 320413,
    PCode: 320400,
    Level: 2
},
{
    Item: "溧阳市",
    Code: 320481,
    PCode: 320400,
    Level: 2
},
{
    Item: "苏州市",
    Code: 320500,
    PCode: 32e4,
    Level: 1
},
{
    Item: "市辖区",
    Code: 320501,
    PCode: 320500,
    Level: 2
},
{
    Item: "虎丘区",
    Code: 320505,
    PCode: 320500,
    Level: 2
},
{
    Item: "吴中区",
    Code: 320506,
    PCode: 320500,
    Level: 2
},
{
    Item: "相城区",
    Code: 320507,
    PCode: 320500,
    Level: 2
},
{
    Item: "姑苏区",
    Code: 320508,
    PCode: 320500,
    Level: 2
},
{
    Item: "吴江区",
    Code: 320509,
    PCode: 320500,
    Level: 2
},
{
    Item: "常熟市",
    Code: 320581,
    PCode: 320500,
    Level: 2
},
{
    Item: "张家港市",
    Code: 320582,
    PCode: 320500,
    Level: 2
},
{
    Item: "昆山市",
    Code: 320583,
    PCode: 320500,
    Level: 2
},
{
    Item: "太仓市",
    Code: 320585,
    PCode: 320500,
    Level: 2
},
{
    Item: "南通市",
    Code: 320600,
    PCode: 32e4,
    Level: 1
},
{
    Item: "市辖区",
    Code: 320601,
    PCode: 320600,
    Level: 2
},
{
    Item: "崇川区",
    Code: 320602,
    PCode: 320600,
    Level: 2
},
{
    Item: "港闸区",
    Code: 320611,
    PCode: 320600,
    Level: 2
},
{
    Item: "通州区",
    Code: 320612,
    PCode: 320600,
    Level: 2
},
{
    Item: "海安县",
    Code: 320621,
    PCode: 320600,
    Level: 2
},
{
    Item: "如东县",
    Code: 320623,
    PCode: 320600,
    Level: 2
},
{
    Item: "启东市",
    Code: 320681,
    PCode: 320600,
    Level: 2
},
{
    Item: "如皋市",
    Code: 320682,
    PCode: 320600,
    Level: 2
},
{
    Item: "海门市",
    Code: 320684,
    PCode: 320600,
    Level: 2
},
{
    Item: "连云港市",
    Code: 320700,
    PCode: 32e4,
    Level: 1
},
{
    Item: "市辖区",
    Code: 320701,
    PCode: 320700,
    Level: 2
},
{
    Item: "连云区",
    Code: 320703,
    PCode: 320700,
    Level: 2
},
{
    Item: "海州区",
    Code: 320706,
    PCode: 320700,
    Level: 2
},
{
    Item: "赣榆区",
    Code: 320707,
    PCode: 320700,
    Level: 2
},
{
    Item: "东海县",
    Code: 320722,
    PCode: 320700,
    Level: 2
},
{
    Item: "灌云县",
    Code: 320723,
    PCode: 320700,
    Level: 2
},
{
    Item: "灌南县",
    Code: 320724,
    PCode: 320700,
    Level: 2
},
{
    Item: "淮安市",
    Code: 320800,
    PCode: 32e4,
    Level: 1
},
{
    Item: "市辖区",
    Code: 320801,
    PCode: 320800,
    Level: 2
},
{
    Item: "清河区",
    Code: 320802,
    PCode: 320800,
    Level: 2
},
{
    Item: "淮安区",
    Code: 320803,
    PCode: 320800,
    Level: 2
},
{
    Item: "淮阴区",
    Code: 320804,
    PCode: 320800,
    Level: 2
},
{
    Item: "清浦区",
    Code: 320811,
    PCode: 320800,
    Level: 2
},
{
    Item: "涟水县",
    Code: 320826,
    PCode: 320800,
    Level: 2
},
{
    Item: "洪泽县",
    Code: 320829,
    PCode: 320800,
    Level: 2
},
{
    Item: "盱眙县",
    Code: 320830,
    PCode: 320800,
    Level: 2
},
{
    Item: "金湖县",
    Code: 320831,
    PCode: 320800,
    Level: 2
},
{
    Item: "盐城市",
    Code: 320900,
    PCode: 32e4,
    Level: 1
},
{
    Item: "市辖区",
    Code: 320901,
    PCode: 320900,
    Level: 2
},
{
    Item: "亭湖区",
    Code: 320902,
    PCode: 320900,
    Level: 2
},
{
    Item: "盐都区",
    Code: 320903,
    PCode: 320900,
    Level: 2
},
{
    Item: "大丰区",
    Code: 320904,
    PCode: 320900,
    Level: 2
},
{
    Item: "响水县",
    Code: 320921,
    PCode: 320900,
    Level: 2
},
{
    Item: "滨海县",
    Code: 320922,
    PCode: 320900,
    Level: 2
},
{
    Item: "阜宁县",
    Code: 320923,
    PCode: 320900,
    Level: 2
},
{
    Item: "射阳县",
    Code: 320924,
    PCode: 320900,
    Level: 2
},
{
    Item: "建湖县",
    Code: 320925,
    PCode: 320900,
    Level: 2
},
{
    Item: "东台市",
    Code: 320981,
    PCode: 320900,
    Level: 2
},
{
    Item: "扬州市",
    Code: 321e3,
    PCode: 32e4,
    Level: 1
},
{
    Item: "市辖区",
    Code: 321001,
    PCode: 321e3,
    Level: 2
},
{
    Item: "广陵区",
    Code: 321002,
    PCode: 321e3,
    Level: 2
},
{
    Item: "邗江区",
    Code: 321003,
    PCode: 321e3,
    Level: 2
},
{
    Item: "江都区",
    Code: 321012,
    PCode: 321e3,
    Level: 2
},
{
    Item: "宝应县",
    Code: 321023,
    PCode: 321e3,
    Level: 2
},
{
    Item: "仪征市",
    Code: 321081,
    PCode: 321e3,
    Level: 2
},
{
    Item: "高邮市",
    Code: 321084,
    PCode: 321e3,
    Level: 2
},
{
    Item: "镇江市",
    Code: 321100,
    PCode: 32e4,
    Level: 1
},
{
    Item: "市辖区",
    Code: 321101,
    PCode: 321100,
    Level: 2
},
{
    Item: "京口区",
    Code: 321102,
    PCode: 321100,
    Level: 2
},
{
    Item: "润州区",
    Code: 321111,
    PCode: 321100,
    Level: 2
},
{
    Item: "丹徒区",
    Code: 321112,
    PCode: 321100,
    Level: 2
},
{
    Item: "丹阳市",
    Code: 321181,
    PCode: 321100,
    Level: 2
},
{
    Item: "扬中市",
    Code: 321182,
    PCode: 321100,
    Level: 2
},
{
    Item: "句容市",
    Code: 321183,
    PCode: 321100,
    Level: 2
},
{
    Item: "泰州市",
    Code: 321200,
    PCode: 32e4,
    Level: 1
},
{
    Item: "市辖区",
    Code: 321201,
    PCode: 321200,
    Level: 2
},
{
    Item: "海陵区",
    Code: 321202,
    PCode: 321200,
    Level: 2
},
{
    Item: "高港区",
    Code: 321203,
    PCode: 321200,
    Level: 2
},
{
    Item: "姜堰区",
    Code: 321204,
    PCode: 321200,
    Level: 2
},
{
    Item: "兴化市",
    Code: 321281,
    PCode: 321200,
    Level: 2
},
{
    Item: "靖江市",
    Code: 321282,
    PCode: 321200,
    Level: 2
},
{
    Item: "泰兴市",
    Code: 321283,
    PCode: 321200,
    Level: 2
},
{
    Item: "宿迁市",
    Code: 321300,
    PCode: 32e4,
    Level: 1
},
{
    Item: "市辖区",
    Code: 321301,
    PCode: 321300,
    Level: 2
},
{
    Item: "宿城区",
    Code: 321302,
    PCode: 321300,
    Level: 2
},
{
    Item: "宿豫区",
    Code: 321311,
    PCode: 321300,
    Level: 2
},
{
    Item: "沭阳县",
    Code: 321322,
    PCode: 321300,
    Level: 2
},
{
    Item: "泗阳县",
    Code: 321323,
    PCode: 321300,
    Level: 2
},
{
    Item: "泗洪县",
    Code: 321324,
    PCode: 321300,
    Level: 2
},
{
    Item: "浙江省",
    Code: 33e4,
    PCode: 0,
    Level: 0
},
{
    Item: "杭州市",
    Code: 330100,
    PCode: 33e4,
    Level: 1
},
{
    Item: "市辖区",
    Code: 330101,
    PCode: 330100,
    Level: 2
},
{
    Item: "上城区",
    Code: 330102,
    PCode: 330100,
    Level: 2
},
{
    Item: "下城区",
    Code: 330103,
    PCode: 330100,
    Level: 2
},
{
    Item: "江干区",
    Code: 330104,
    PCode: 330100,
    Level: 2
},
{
    Item: "拱墅区",
    Code: 330105,
    PCode: 330100,
    Level: 2
},
{
    Item: "西湖区",
    Code: 330106,
    PCode: 330100,
    Level: 2
},
{
    Item: "滨江区",
    Code: 330108,
    PCode: 330100,
    Level: 2
},
{
    Item: "萧山区",
    Code: 330109,
    PCode: 330100,
    Level: 2
},
{
    Item: "余杭区",
    Code: 330110,
    PCode: 330100,
    Level: 2
},
{
    Item: "富阳区",
    Code: 330111,
    PCode: 330100,
    Level: 2
},
{
    Item: "桐庐县",
    Code: 330122,
    PCode: 330100,
    Level: 2
},
{
    Item: "淳安县",
    Code: 330127,
    PCode: 330100,
    Level: 2
},
{
    Item: "建德市",
    Code: 330182,
    PCode: 330100,
    Level: 2
},
{
    Item: "临安市",
    Code: 330185,
    PCode: 330100,
    Level: 2
},
{
    Item: "宁波市",
    Code: 330200,
    PCode: 33e4,
    Level: 1
},
{
    Item: "市辖区",
    Code: 330201,
    PCode: 330200,
    Level: 2
},
{
    Item: "海曙区",
    Code: 330203,
    PCode: 330200,
    Level: 2
},
{
    Item: "江东区",
    Code: 330204,
    PCode: 330200,
    Level: 2
},
{
    Item: "江北区",
    Code: 330205,
    PCode: 330200,
    Level: 2
},
{
    Item: "北仑区",
    Code: 330206,
    PCode: 330200,
    Level: 2
},
{
    Item: "镇海区",
    Code: 330211,
    PCode: 330200,
    Level: 2
},
{
    Item: "鄞州区",
    Code: 330212,
    PCode: 330200,
    Level: 2
},
{
    Item: "象山县",
    Code: 330225,
    PCode: 330200,
    Level: 2
},
{
    Item: "宁海县",
    Code: 330226,
    PCode: 330200,
    Level: 2
},
{
    Item: "余姚市",
    Code: 330281,
    PCode: 330200,
    Level: 2
},
{
    Item: "慈溪市",
    Code: 330282,
    PCode: 330200,
    Level: 2
},
{
    Item: "奉化市",
    Code: 330283,
    PCode: 330200,
    Level: 2
},
{
    Item: "温州市",
    Code: 330300,
    PCode: 33e4,
    Level: 1
},
{
    Item: "市辖区",
    Code: 330301,
    PCode: 330300,
    Level: 2
},
{
    Item: "鹿城区",
    Code: 330302,
    PCode: 330300,
    Level: 2
},
{
    Item: "龙湾区",
    Code: 330303,
    PCode: 330300,
    Level: 2
},
{
    Item: "瓯海区",
    Code: 330304,
    PCode: 330300,
    Level: 2
},
{
    Item: "洞头区",
    Code: 330305,
    PCode: 330300,
    Level: 2
},
{
    Item: "永嘉县",
    Code: 330324,
    PCode: 330300,
    Level: 2
},
{
    Item: "平阳县",
    Code: 330326,
    PCode: 330300,
    Level: 2
},
{
    Item: "苍南县",
    Code: 330327,
    PCode: 330300,
    Level: 2
},
{
    Item: "文成县",
    Code: 330328,
    PCode: 330300,
    Level: 2
},
{
    Item: "泰顺县",
    Code: 330329,
    PCode: 330300,
    Level: 2
},
{
    Item: "瑞安市",
    Code: 330381,
    PCode: 330300,
    Level: 2
},
{
    Item: "乐清市",
    Code: 330382,
    PCode: 330300,
    Level: 2
},
{
    Item: "嘉兴市",
    Code: 330400,
    PCode: 33e4,
    Level: 1
},
{
    Item: "市辖区",
    Code: 330401,
    PCode: 330400,
    Level: 2
},
{
    Item: "南湖区",
    Code: 330402,
    PCode: 330400,
    Level: 2
},
{
    Item: "秀洲区",
    Code: 330411,
    PCode: 330400,
    Level: 2
},
{
    Item: "嘉善县",
    Code: 330421,
    PCode: 330400,
    Level: 2
},
{
    Item: "海盐县",
    Code: 330424,
    PCode: 330400,
    Level: 2
},
{
    Item: "海宁市",
    Code: 330481,
    PCode: 330400,
    Level: 2
},
{
    Item: "平湖市",
    Code: 330482,
    PCode: 330400,
    Level: 2
},
{
    Item: "桐乡市",
    Code: 330483,
    PCode: 330400,
    Level: 2
},
{
    Item: "湖州市",
    Code: 330500,
    PCode: 33e4,
    Level: 1
},
{
    Item: "市辖区",
    Code: 330501,
    PCode: 330500,
    Level: 2
},
{
    Item: "吴兴区",
    Code: 330502,
    PCode: 330500,
    Level: 2
},
{
    Item: "南浔区",
    Code: 330503,
    PCode: 330500,
    Level: 2
},
{
    Item: "德清县",
    Code: 330521,
    PCode: 330500,
    Level: 2
},
{
    Item: "长兴县",
    Code: 330522,
    PCode: 330500,
    Level: 2
},
{
    Item: "安吉县",
    Code: 330523,
    PCode: 330500,
    Level: 2
},
{
    Item: "绍兴市",
    Code: 330600,
    PCode: 33e4,
    Level: 1
},
{
    Item: "市辖区",
    Code: 330601,
    PCode: 330600,
    Level: 2
},
{
    Item: "越城区",
    Code: 330602,
    PCode: 330600,
    Level: 2
},
{
    Item: "柯桥区",
    Code: 330603,
    PCode: 330600,
    Level: 2
},
{
    Item: "上虞区",
    Code: 330604,
    PCode: 330600,
    Level: 2
},
{
    Item: "新昌县",
    Code: 330624,
    PCode: 330600,
    Level: 2
},
{
    Item: "诸暨市",
    Code: 330681,
    PCode: 330600,
    Level: 2
},
{
    Item: "嵊州市",
    Code: 330683,
    PCode: 330600,
    Level: 2
},
{
    Item: "金华市",
    Code: 330700,
    PCode: 33e4,
    Level: 1
},
{
    Item: "市辖区",
    Code: 330701,
    PCode: 330700,
    Level: 2
},
{
    Item: "婺城区",
    Code: 330702,
    PCode: 330700,
    Level: 2
},
{
    Item: "金东区",
    Code: 330703,
    PCode: 330700,
    Level: 2
},
{
    Item: "武义县",
    Code: 330723,
    PCode: 330700,
    Level: 2
},
{
    Item: "浦江县",
    Code: 330726,
    PCode: 330700,
    Level: 2
},
{
    Item: "磐安县",
    Code: 330727,
    PCode: 330700,
    Level: 2
},
{
    Item: "兰溪市",
    Code: 330781,
    PCode: 330700,
    Level: 2
},
{
    Item: "义乌市",
    Code: 330782,
    PCode: 330700,
    Level: 2
},
{
    Item: "东阳市",
    Code: 330783,
    PCode: 330700,
    Level: 2
},
{
    Item: "永康市",
    Code: 330784,
    PCode: 330700,
    Level: 2
},
{
    Item: "衢州市",
    Code: 330800,
    PCode: 33e4,
    Level: 1
},
{
    Item: "市辖区",
    Code: 330801,
    PCode: 330800,
    Level: 2
},
{
    Item: "柯城区",
    Code: 330802,
    PCode: 330800,
    Level: 2
},
{
    Item: "衢江区",
    Code: 330803,
    PCode: 330800,
    Level: 2
},
{
    Item: "常山县",
    Code: 330822,
    PCode: 330800,
    Level: 2
},
{
    Item: "开化县",
    Code: 330824,
    PCode: 330800,
    Level: 2
},
{
    Item: "龙游县",
    Code: 330825,
    PCode: 330800,
    Level: 2
},
{
    Item: "江山市",
    Code: 330881,
    PCode: 330800,
    Level: 2
},
{
    Item: "舟山市",
    Code: 330900,
    PCode: 33e4,
    Level: 1
},
{
    Item: "市辖区",
    Code: 330901,
    PCode: 330900,
    Level: 2
},
{
    Item: "定海区",
    Code: 330902,
    PCode: 330900,
    Level: 2
},
{
    Item: "普陀区",
    Code: 330903,
    PCode: 330900,
    Level: 2
},
{
    Item: "岱山县",
    Code: 330921,
    PCode: 330900,
    Level: 2
},
{
    Item: "嵊泗县",
    Code: 330922,
    PCode: 330900,
    Level: 2
},
{
    Item: "台州市",
    Code: 331e3,
    PCode: 33e4,
    Level: 1
},
{
    Item: "市辖区",
    Code: 331001,
    PCode: 331e3,
    Level: 2
},
{
    Item: "椒江区",
    Code: 331002,
    PCode: 331e3,
    Level: 2
},
{
    Item: "黄岩区",
    Code: 331003,
    PCode: 331e3,
    Level: 2
},
{
    Item: "路桥区",
    Code: 331004,
    PCode: 331e3,
    Level: 2
},
{
    Item: "玉环县",
    Code: 331021,
    PCode: 331e3,
    Level: 2
},
{
    Item: "三门县",
    Code: 331022,
    PCode: 331e3,
    Level: 2
},
{
    Item: "天台县",
    Code: 331023,
    PCode: 331e3,
    Level: 2
},
{
    Item: "仙居县",
    Code: 331024,
    PCode: 331e3,
    Level: 2
},
{
    Item: "温岭市",
    Code: 331081,
    PCode: 331e3,
    Level: 2
},
{
    Item: "临海市",
    Code: 331082,
    PCode: 331e3,
    Level: 2
},
{
    Item: "丽水市",
    Code: 331100,
    PCode: 33e4,
    Level: 1
},
{
    Item: "市辖区",
    Code: 331101,
    PCode: 331100,
    Level: 2
},
{
    Item: "莲都区",
    Code: 331102,
    PCode: 331100,
    Level: 2
},
{
    Item: "青田县",
    Code: 331121,
    PCode: 331100,
    Level: 2
},
{
    Item: "缙云县",
    Code: 331122,
    PCode: 331100,
    Level: 2
},
{
    Item: "遂昌县",
    Code: 331123,
    PCode: 331100,
    Level: 2
},
{
    Item: "松阳县",
    Code: 331124,
    PCode: 331100,
    Level: 2
},
{
    Item: "云和县",
    Code: 331125,
    PCode: 331100,
    Level: 2
},
{
    Item: "庆元县",
    Code: 331126,
    PCode: 331100,
    Level: 2
},
{
    Item: "景宁畲族自治县",
    Code: 331127,
    PCode: 331100,
    Level: 2
},
{
    Item: "龙泉市",
    Code: 331181,
    PCode: 331100,
    Level: 2
},
{
    Item: "安徽省",
    Code: 34e4,
    PCode: 0,
    Level: 0
},
{
    Item: "合肥市",
    Code: 340100,
    PCode: 34e4,
    Level: 1
},
{
    Item: "市辖区",
    Code: 340101,
    PCode: 340100,
    Level: 2
},
{
    Item: "瑶海区",
    Code: 340102,
    PCode: 340100,
    Level: 2
},
{
    Item: "庐阳区",
    Code: 340103,
    PCode: 340100,
    Level: 2
},
{
    Item: "蜀山区",
    Code: 340104,
    PCode: 340100,
    Level: 2
},
{
    Item: "包河区",
    Code: 340111,
    PCode: 340100,
    Level: 2
},
{
    Item: "长丰县",
    Code: 340121,
    PCode: 340100,
    Level: 2
},
{
    Item: "肥东县",
    Code: 340122,
    PCode: 340100,
    Level: 2
},
{
    Item: "肥西县",
    Code: 340123,
    PCode: 340100,
    Level: 2
},
{
    Item: "庐江县",
    Code: 340124,
    PCode: 340100,
    Level: 2
},
{
    Item: "巢湖市",
    Code: 340181,
    PCode: 340100,
    Level: 2
},
{
    Item: "芜湖市",
    Code: 340200,
    PCode: 34e4,
    Level: 1
},
{
    Item: "市辖区",
    Code: 340201,
    PCode: 340200,
    Level: 2
},
{
    Item: "镜湖区",
    Code: 340202,
    PCode: 340200,
    Level: 2
},
{
    Item: "弋江区",
    Code: 340203,
    PCode: 340200,
    Level: 2
},
{
    Item: "鸠江区",
    Code: 340207,
    PCode: 340200,
    Level: 2
},
{
    Item: "三山区",
    Code: 340208,
    PCode: 340200,
    Level: 2
},
{
    Item: "芜湖县",
    Code: 340221,
    PCode: 340200,
    Level: 2
},
{
    Item: "繁昌县",
    Code: 340222,
    PCode: 340200,
    Level: 2
},
{
    Item: "南陵县",
    Code: 340223,
    PCode: 340200,
    Level: 2
},
{
    Item: "无为县",
    Code: 340225,
    PCode: 340200,
    Level: 2
},
{
    Item: "蚌埠市",
    Code: 340300,
    PCode: 34e4,
    Level: 1
},
{
    Item: "市辖区",
    Code: 340301,
    PCode: 340300,
    Level: 2
},
{
    Item: "龙子湖区",
    Code: 340302,
    PCode: 340300,
    Level: 2
},
{
    Item: "蚌山区",
    Code: 340303,
    PCode: 340300,
    Level: 2
},
{
    Item: "禹会区",
    Code: 340304,
    PCode: 340300,
    Level: 2
},
{
    Item: "淮上区",
    Code: 340311,
    PCode: 340300,
    Level: 2
},
{
    Item: "怀远县",
    Code: 340321,
    PCode: 340300,
    Level: 2
},
{
    Item: "五河县",
    Code: 340322,
    PCode: 340300,
    Level: 2
},
{
    Item: "固镇县",
    Code: 340323,
    PCode: 340300,
    Level: 2
},
{
    Item: "淮南市",
    Code: 340400,
    PCode: 34e4,
    Level: 1
},
{
    Item: "市辖区",
    Code: 340401,
    PCode: 340400,
    Level: 2
},
{
    Item: "大通区",
    Code: 340402,
    PCode: 340400,
    Level: 2
},
{
    Item: "田家庵区",
    Code: 340403,
    PCode: 340400,
    Level: 2
},
{
    Item: "谢家集区",
    Code: 340404,
    PCode: 340400,
    Level: 2
},
{
    Item: "八公山区",
    Code: 340405,
    PCode: 340400,
    Level: 2
},
{
    Item: "潘集区",
    Code: 340406,
    PCode: 340400,
    Level: 2
},
{
    Item: "凤台县",
    Code: 340421,
    PCode: 340400,
    Level: 2
},
{
    Item: "马鞍山市",
    Code: 340500,
    PCode: 34e4,
    Level: 1
},
{
    Item: "市辖区",
    Code: 340501,
    PCode: 340500,
    Level: 2
},
{
    Item: "花山区",
    Code: 340503,
    PCode: 340500,
    Level: 2
},
{
    Item: "雨山区",
    Code: 340504,
    PCode: 340500,
    Level: 2
},
{
    Item: "博望区",
    Code: 340506,
    PCode: 340500,
    Level: 2
},
{
    Item: "当涂县",
    Code: 340521,
    PCode: 340500,
    Level: 2
},
{
    Item: "含山县",
    Code: 340522,
    PCode: 340500,
    Level: 2
},
{
    Item: "和县",
    Code: 340523,
    PCode: 340500,
    Level: 2
},
{
    Item: "淮北市",
    Code: 340600,
    PCode: 34e4,
    Level: 1
},
{
    Item: "市辖区",
    Code: 340601,
    PCode: 340600,
    Level: 2
},
{
    Item: "杜集区",
    Code: 340602,
    PCode: 340600,
    Level: 2
},
{
    Item: "相山区",
    Code: 340603,
    PCode: 340600,
    Level: 2
},
{
    Item: "烈山区",
    Code: 340604,
    PCode: 340600,
    Level: 2
},
{
    Item: "濉溪县",
    Code: 340621,
    PCode: 340600,
    Level: 2
},
{
    Item: "铜陵市",
    Code: 340700,
    PCode: 34e4,
    Level: 1
},
{
    Item: "市辖区",
    Code: 340701,
    PCode: 340700,
    Level: 2
},
{
    Item: "铜官山区",
    Code: 340702,
    PCode: 340700,
    Level: 2
},
{
    Item: "狮子山区",
    Code: 340703,
    PCode: 340700,
    Level: 2
},
{
    Item: "郊区",
    Code: 340711,
    PCode: 340700,
    Level: 2
},
{
    Item: "铜陵县",
    Code: 340721,
    PCode: 340700,
    Level: 2
},
{
    Item: "安庆市",
    Code: 340800,
    PCode: 34e4,
    Level: 1
},
{
    Item: "市辖区",
    Code: 340801,
    PCode: 340800,
    Level: 2
},
{
    Item: "迎江区",
    Code: 340802,
    PCode: 340800,
    Level: 2
},
{
    Item: "大观区",
    Code: 340803,
    PCode: 340800,
    Level: 2
},
{
    Item: "宜秀区",
    Code: 340811,
    PCode: 340800,
    Level: 2
},
{
    Item: "怀宁县",
    Code: 340822,
    PCode: 340800,
    Level: 2
},
{
    Item: "枞阳县",
    Code: 340823,
    PCode: 340800,
    Level: 2
},
{
    Item: "潜山县",
    Code: 340824,
    PCode: 340800,
    Level: 2
},
{
    Item: "太湖县",
    Code: 340825,
    PCode: 340800,
    Level: 2
},
{
    Item: "宿松县",
    Code: 340826,
    PCode: 340800,
    Level: 2
},
{
    Item: "望江县",
    Code: 340827,
    PCode: 340800,
    Level: 2
},
{
    Item: "岳西县",
    Code: 340828,
    PCode: 340800,
    Level: 2
},
{
    Item: "桐城市",
    Code: 340881,
    PCode: 340800,
    Level: 2
},
{
    Item: "黄山市",
    Code: 341e3,
    PCode: 34e4,
    Level: 1
},
{
    Item: "市辖区",
    Code: 341001,
    PCode: 341e3,
    Level: 2
},
{
    Item: "屯溪区",
    Code: 341002,
    PCode: 341e3,
    Level: 2
},
{
    Item: "黄山区",
    Code: 341003,
    PCode: 341e3,
    Level: 2
},
{
    Item: "徽州区",
    Code: 341004,
    PCode: 341e3,
    Level: 2
},
{
    Item: "歙县",
    Code: 341021,
    PCode: 341e3,
    Level: 2
},
{
    Item: "休宁县",
    Code: 341022,
    PCode: 341e3,
    Level: 2
},
{
    Item: "黟县",
    Code: 341023,
    PCode: 341e3,
    Level: 2
},
{
    Item: "祁门县",
    Code: 341024,
    PCode: 341e3,
    Level: 2
},
{
    Item: "滁州市",
    Code: 341100,
    PCode: 34e4,
    Level: 1
},
{
    Item: "市辖区",
    Code: 341101,
    PCode: 341100,
    Level: 2
},
{
    Item: "琅琊区",
    Code: 341102,
    PCode: 341100,
    Level: 2
},
{
    Item: "南谯区",
    Code: 341103,
    PCode: 341100,
    Level: 2
},
{
    Item: "来安县",
    Code: 341122,
    PCode: 341100,
    Level: 2
},
{
    Item: "全椒县",
    Code: 341124,
    PCode: 341100,
    Level: 2
},
{
    Item: "定远县",
    Code: 341125,
    PCode: 341100,
    Level: 2
},
{
    Item: "凤阳县",
    Code: 341126,
    PCode: 341100,
    Level: 2
},
{
    Item: "天长市",
    Code: 341181,
    PCode: 341100,
    Level: 2
},
{
    Item: "明光市",
    Code: 341182,
    PCode: 341100,
    Level: 2
},
{
    Item: "阜阳市",
    Code: 341200,
    PCode: 34e4,
    Level: 1
},
{
    Item: "市辖区",
    Code: 341201,
    PCode: 341200,
    Level: 2
},
{
    Item: "颍州区",
    Code: 341202,
    PCode: 341200,
    Level: 2
},
{
    Item: "颍东区",
    Code: 341203,
    PCode: 341200,
    Level: 2
},
{
    Item: "颍泉区",
    Code: 341204,
    PCode: 341200,
    Level: 2
},
{
    Item: "临泉县",
    Code: 341221,
    PCode: 341200,
    Level: 2
},
{
    Item: "太和县",
    Code: 341222,
    PCode: 341200,
    Level: 2
},
{
    Item: "阜南县",
    Code: 341225,
    PCode: 341200,
    Level: 2
},
{
    Item: "颍上县",
    Code: 341226,
    PCode: 341200,
    Level: 2
},
{
    Item: "界首市",
    Code: 341282,
    PCode: 341200,
    Level: 2
},
{
    Item: "宿州市",
    Code: 341300,
    PCode: 34e4,
    Level: 1
},
{
    Item: "市辖区",
    Code: 341301,
    PCode: 341300,
    Level: 2
},
{
    Item: "埇桥区",
    Code: 341302,
    PCode: 341300,
    Level: 2
},
{
    Item: "砀山县",
    Code: 341321,
    PCode: 341300,
    Level: 2
},
{
    Item: "萧县",
    Code: 341322,
    PCode: 341300,
    Level: 2
},
{
    Item: "灵璧县",
    Code: 341323,
    PCode: 341300,
    Level: 2
},
{
    Item: "泗县",
    Code: 341324,
    PCode: 341300,
    Level: 2
},
{
    Item: "六安市",
    Code: 341500,
    PCode: 34e4,
    Level: 1
},
{
    Item: "市辖区",
    Code: 341501,
    PCode: 341500,
    Level: 2
},
{
    Item: "金安区",
    Code: 341502,
    PCode: 341500,
    Level: 2
},
{
    Item: "裕安区",
    Code: 341503,
    PCode: 341500,
    Level: 2
},
{
    Item: "寿县",
    Code: 341521,
    PCode: 341500,
    Level: 2
},
{
    Item: "霍邱县",
    Code: 341522,
    PCode: 341500,
    Level: 2
},
{
    Item: "舒城县",
    Code: 341523,
    PCode: 341500,
    Level: 2
},
{
    Item: "金寨县",
    Code: 341524,
    PCode: 341500,
    Level: 2
},
{
    Item: "霍山县",
    Code: 341525,
    PCode: 341500,
    Level: 2
},
{
    Item: "亳州市",
    Code: 341600,
    PCode: 34e4,
    Level: 1
},
{
    Item: "市辖区",
    Code: 341601,
    PCode: 341600,
    Level: 2
},
{
    Item: "谯城区",
    Code: 341602,
    PCode: 341600,
    Level: 2
},
{
    Item: "涡阳县",
    Code: 341621,
    PCode: 341600,
    Level: 2
},
{
    Item: "蒙城县",
    Code: 341622,
    PCode: 341600,
    Level: 2
},
{
    Item: "利辛县",
    Code: 341623,
    PCode: 341600,
    Level: 2
},
{
    Item: "池州市",
    Code: 341700,
    PCode: 34e4,
    Level: 1
},
{
    Item: "市辖区",
    Code: 341701,
    PCode: 341700,
    Level: 2
},
{
    Item: "贵池区",
    Code: 341702,
    PCode: 341700,
    Level: 2
},
{
    Item: "东至县",
    Code: 341721,
    PCode: 341700,
    Level: 2
},
{
    Item: "石台县",
    Code: 341722,
    PCode: 341700,
    Level: 2
},
{
    Item: "青阳县",
    Code: 341723,
    PCode: 341700,
    Level: 2
},
{
    Item: "宣城市",
    Code: 341800,
    PCode: 34e4,
    Level: 1
},
{
    Item: "市辖区",
    Code: 341801,
    PCode: 341800,
    Level: 2
},
{
    Item: "宣州区",
    Code: 341802,
    PCode: 341800,
    Level: 2
},
{
    Item: "郎溪县",
    Code: 341821,
    PCode: 341800,
    Level: 2
},
{
    Item: "广德县",
    Code: 341822,
    PCode: 341800,
    Level: 2
},
{
    Item: "泾县",
    Code: 341823,
    PCode: 341800,
    Level: 2
},
{
    Item: "绩溪县",
    Code: 341824,
    PCode: 341800,
    Level: 2
},
{
    Item: "旌德县",
    Code: 341825,
    PCode: 341800,
    Level: 2
},
{
    Item: "宁国市",
    Code: 341881,
    PCode: 341800,
    Level: 2
},
{
    Item: "福建省",
    Code: 35e4,
    PCode: 0,
    Level: 0
},
{
    Item: "福州市",
    Code: 350100,
    PCode: 35e4,
    Level: 1
},
{
    Item: "市辖区",
    Code: 350101,
    PCode: 350100,
    Level: 2
},
{
    Item: "鼓楼区",
    Code: 350102,
    PCode: 350100,
    Level: 2
},
{
    Item: "台江区",
    Code: 350103,
    PCode: 350100,
    Level: 2
},
{
    Item: "仓山区",
    Code: 350104,
    PCode: 350100,
    Level: 2
},
{
    Item: "马尾区",
    Code: 350105,
    PCode: 350100,
    Level: 2
},
{
    Item: "晋安区",
    Code: 350111,
    PCode: 350100,
    Level: 2
},
{
    Item: "闽侯县",
    Code: 350121,
    PCode: 350100,
    Level: 2
},
{
    Item: "连江县",
    Code: 350122,
    PCode: 350100,
    Level: 2
},
{
    Item: "罗源县",
    Code: 350123,
    PCode: 350100,
    Level: 2
},
{
    Item: "闽清县",
    Code: 350124,
    PCode: 350100,
    Level: 2
},
{
    Item: "永泰县",
    Code: 350125,
    PCode: 350100,
    Level: 2
},
{
    Item: "平潭县",
    Code: 350128,
    PCode: 350100,
    Level: 2
},
{
    Item: "福清市",
    Code: 350181,
    PCode: 350100,
    Level: 2
},
{
    Item: "长乐市",
    Code: 350182,
    PCode: 350100,
    Level: 2
},
{
    Item: "厦门市",
    Code: 350200,
    PCode: 35e4,
    Level: 1
},
{
    Item: "市辖区",
    Code: 350201,
    PCode: 350200,
    Level: 2
},
{
    Item: "思明区",
    Code: 350203,
    PCode: 350200,
    Level: 2
},
{
    Item: "海沧区",
    Code: 350205,
    PCode: 350200,
    Level: 2
},
{
    Item: "湖里区",
    Code: 350206,
    PCode: 350200,
    Level: 2
},
{
    Item: "集美区",
    Code: 350211,
    PCode: 350200,
    Level: 2
},
{
    Item: "同安区",
    Code: 350212,
    PCode: 350200,
    Level: 2
},
{
    Item: "翔安区",
    Code: 350213,
    PCode: 350200,
    Level: 2
},
{
    Item: "莆田市",
    Code: 350300,
    PCode: 35e4,
    Level: 1
},
{
    Item: "市辖区",
    Code: 350301,
    PCode: 350300,
    Level: 2
},
{
    Item: "城厢区",
    Code: 350302,
    PCode: 350300,
    Level: 2
},
{
    Item: "涵江区",
    Code: 350303,
    PCode: 350300,
    Level: 2
},
{
    Item: "荔城区",
    Code: 350304,
    PCode: 350300,
    Level: 2
},
{
    Item: "秀屿区",
    Code: 350305,
    PCode: 350300,
    Level: 2
},
{
    Item: "仙游县",
    Code: 350322,
    PCode: 350300,
    Level: 2
},
{
    Item: "三明市",
    Code: 350400,
    PCode: 35e4,
    Level: 1
},
{
    Item: "市辖区",
    Code: 350401,
    PCode: 350400,
    Level: 2
},
{
    Item: "梅列区",
    Code: 350402,
    PCode: 350400,
    Level: 2
},
{
    Item: "三元区",
    Code: 350403,
    PCode: 350400,
    Level: 2
},
{
    Item: "明溪县",
    Code: 350421,
    PCode: 350400,
    Level: 2
},
{
    Item: "清流县",
    Code: 350423,
    PCode: 350400,
    Level: 2
},
{
    Item: "宁化县",
    Code: 350424,
    PCode: 350400,
    Level: 2
},
{
    Item: "大田县",
    Code: 350425,
    PCode: 350400,
    Level: 2
},
{
    Item: "尤溪县",
    Code: 350426,
    PCode: 350400,
    Level: 2
},
{
    Item: "沙县",
    Code: 350427,
    PCode: 350400,
    Level: 2
},
{
    Item: "将乐县",
    Code: 350428,
    PCode: 350400,
    Level: 2
},
{
    Item: "泰宁县",
    Code: 350429,
    PCode: 350400,
    Level: 2
},
{
    Item: "建宁县",
    Code: 350430,
    PCode: 350400,
    Level: 2
},
{
    Item: "永安市",
    Code: 350481,
    PCode: 350400,
    Level: 2
},
{
    Item: "泉州市",
    Code: 350500,
    PCode: 35e4,
    Level: 1
},
{
    Item: "市辖区",
    Code: 350501,
    PCode: 350500,
    Level: 2
},
{
    Item: "鲤城区",
    Code: 350502,
    PCode: 350500,
    Level: 2
},
{
    Item: "丰泽区",
    Code: 350503,
    PCode: 350500,
    Level: 2
},
{
    Item: "洛江区",
    Code: 350504,
    PCode: 350500,
    Level: 2
},
{
    Item: "泉港区",
    Code: 350505,
    PCode: 350500,
    Level: 2
},
{
    Item: "惠安县",
    Code: 350521,
    PCode: 350500,
    Level: 2
},
{
    Item: "安溪县",
    Code: 350524,
    PCode: 350500,
    Level: 2
},
{
    Item: "永春县",
    Code: 350525,
    PCode: 350500,
    Level: 2
},
{
    Item: "德化县",
    Code: 350526,
    PCode: 350500,
    Level: 2
},
{
    Item: "金门县",
    Code: 350527,
    PCode: 350500,
    Level: 2
},
{
    Item: "石狮市",
    Code: 350581,
    PCode: 350500,
    Level: 2
},
{
    Item: "晋江市",
    Code: 350582,
    PCode: 350500,
    Level: 2
},
{
    Item: "南安市",
    Code: 350583,
    PCode: 350500,
    Level: 2
},
{
    Item: "漳州市",
    Code: 350600,
    PCode: 35e4,
    Level: 1
},
{
    Item: "市辖区",
    Code: 350601,
    PCode: 350600,
    Level: 2
},
{
    Item: "芗城区",
    Code: 350602,
    PCode: 350600,
    Level: 2
},
{
    Item: "龙文区",
    Code: 350603,
    PCode: 350600,
    Level: 2
},
{
    Item: "云霄县",
    Code: 350622,
    PCode: 350600,
    Level: 2
},
{
    Item: "漳浦县",
    Code: 350623,
    PCode: 350600,
    Level: 2
},
{
    Item: "诏安县",
    Code: 350624,
    PCode: 350600,
    Level: 2
},
{
    Item: "长泰县",
    Code: 350625,
    PCode: 350600,
    Level: 2
},
{
    Item: "东山县",
    Code: 350626,
    PCode: 350600,
    Level: 2
},
{
    Item: "南靖县",
    Code: 350627,
    PCode: 350600,
    Level: 2
},
{
    Item: "平和县",
    Code: 350628,
    PCode: 350600,
    Level: 2
},
{
    Item: "华安县",
    Code: 350629,
    PCode: 350600,
    Level: 2
},
{
    Item: "龙海市",
    Code: 350681,
    PCode: 350600,
    Level: 2
},
{
    Item: "南平市",
    Code: 350700,
    PCode: 35e4,
    Level: 1
},
{
    Item: "市辖区",
    Code: 350701,
    PCode: 350700,
    Level: 2
},
{
    Item: "延平区",
    Code: 350702,
    PCode: 350700,
    Level: 2
},
{
    Item: "建阳区",
    Code: 350703,
    PCode: 350700,
    Level: 2
},
{
    Item: "顺昌县",
    Code: 350721,
    PCode: 350700,
    Level: 2
},
{
    Item: "浦城县",
    Code: 350722,
    PCode: 350700,
    Level: 2
},
{
    Item: "光泽县",
    Code: 350723,
    PCode: 350700,
    Level: 2
},
{
    Item: "松溪县",
    Code: 350724,
    PCode: 350700,
    Level: 2
},
{
    Item: "政和县",
    Code: 350725,
    PCode: 350700,
    Level: 2
},
{
    Item: "邵武市",
    Code: 350781,
    PCode: 350700,
    Level: 2
},
{
    Item: "武夷山市",
    Code: 350782,
    PCode: 350700,
    Level: 2
},
{
    Item: "建瓯市",
    Code: 350783,
    PCode: 350700,
    Level: 2
},
{
    Item: "龙岩市",
    Code: 350800,
    PCode: 35e4,
    Level: 1
},
{
    Item: "市辖区",
    Code: 350801,
    PCode: 350800,
    Level: 2
},
{
    Item: "新罗区",
    Code: 350802,
    PCode: 350800,
    Level: 2
},
{
    Item: "永定区",
    Code: 350803,
    PCode: 350800,
    Level: 2
},
{
    Item: "长汀县",
    Code: 350821,
    PCode: 350800,
    Level: 2
},
{
    Item: "上杭县",
    Code: 350823,
    PCode: 350800,
    Level: 2
},
{
    Item: "武平县",
    Code: 350824,
    PCode: 350800,
    Level: 2
},
{
    Item: "连城县",
    Code: 350825,
    PCode: 350800,
    Level: 2
},
{
    Item: "漳平市",
    Code: 350881,
    PCode: 350800,
    Level: 2
},
{
    Item: "宁德市",
    Code: 350900,
    PCode: 35e4,
    Level: 1
},
{
    Item: "市辖区",
    Code: 350901,
    PCode: 350900,
    Level: 2
},
{
    Item: "蕉城区",
    Code: 350902,
    PCode: 350900,
    Level: 2
},
{
    Item: "霞浦县",
    Code: 350921,
    PCode: 350900,
    Level: 2
},
{
    Item: "古田县",
    Code: 350922,
    PCode: 350900,
    Level: 2
},
{
    Item: "屏南县",
    Code: 350923,
    PCode: 350900,
    Level: 2
},
{
    Item: "寿宁县",
    Code: 350924,
    PCode: 350900,
    Level: 2
},
{
    Item: "周宁县",
    Code: 350925,
    PCode: 350900,
    Level: 2
},
{
    Item: "柘荣县",
    Code: 350926,
    PCode: 350900,
    Level: 2
},
{
    Item: "福安市",
    Code: 350981,
    PCode: 350900,
    Level: 2
},
{
    Item: "福鼎市",
    Code: 350982,
    PCode: 350900,
    Level: 2
},
{
    Item: "江西省",
    Code: 36e4,
    PCode: 0,
    Level: 0
},
{
    Item: "南昌市",
    Code: 360100,
    PCode: 36e4,
    Level: 1
},
{
    Item: "市辖区",
    Code: 360101,
    PCode: 360100,
    Level: 2
},
{
    Item: "东湖区",
    Code: 360102,
    PCode: 360100,
    Level: 2
},
{
    Item: "西湖区",
    Code: 360103,
    PCode: 360100,
    Level: 2
},
{
    Item: "青云谱区",
    Code: 360104,
    PCode: 360100,
    Level: 2
},
{
    Item: "湾里区",
    Code: 360105,
    PCode: 360100,
    Level: 2
},
{
    Item: "青山湖区",
    Code: 360111,
    PCode: 360100,
    Level: 2
},
{
    Item: "新建区",
    Code: 360112,
    PCode: 360100,
    Level: 2
},
{
    Item: "南昌县",
    Code: 360121,
    PCode: 360100,
    Level: 2
},
{
    Item: "安义县",
    Code: 360123,
    PCode: 360100,
    Level: 2
},
{
    Item: "进贤县",
    Code: 360124,
    PCode: 360100,
    Level: 2
},
{
    Item: "景德镇市",
    Code: 360200,
    PCode: 36e4,
    Level: 1
},
{
    Item: "市辖区",
    Code: 360201,
    PCode: 360200,
    Level: 2
},
{
    Item: "昌江区",
    Code: 360202,
    PCode: 360200,
    Level: 2
},
{
    Item: "珠山区",
    Code: 360203,
    PCode: 360200,
    Level: 2
},
{
    Item: "浮梁县",
    Code: 360222,
    PCode: 360200,
    Level: 2
},
{
    Item: "乐平市",
    Code: 360281,
    PCode: 360200,
    Level: 2
},
{
    Item: "萍乡市",
    Code: 360300,
    PCode: 36e4,
    Level: 1
},
{
    Item: "市辖区",
    Code: 360301,
    PCode: 360300,
    Level: 2
},
{
    Item: "安源区",
    Code: 360302,
    PCode: 360300,
    Level: 2
},
{
    Item: "湘东区",
    Code: 360313,
    PCode: 360300,
    Level: 2
},
{
    Item: "莲花县",
    Code: 360321,
    PCode: 360300,
    Level: 2
},
{
    Item: "上栗县",
    Code: 360322,
    PCode: 360300,
    Level: 2
},
{
    Item: "芦溪县",
    Code: 360323,
    PCode: 360300,
    Level: 2
},
{
    Item: "九江市",
    Code: 360400,
    PCode: 36e4,
    Level: 1
},
{
    Item: "市辖区",
    Code: 360401,
    PCode: 360400,
    Level: 2
},
{
    Item: "庐山区",
    Code: 360402,
    PCode: 360400,
    Level: 2
},
{
    Item: "浔阳区",
    Code: 360403,
    PCode: 360400,
    Level: 2
},
{
    Item: "九江县",
    Code: 360421,
    PCode: 360400,
    Level: 2
},
{
    Item: "武宁县",
    Code: 360423,
    PCode: 360400,
    Level: 2
},
{
    Item: "修水县",
    Code: 360424,
    PCode: 360400,
    Level: 2
},
{
    Item: "永修县",
    Code: 360425,
    PCode: 360400,
    Level: 2
},
{
    Item: "德安县",
    Code: 360426,
    PCode: 360400,
    Level: 2
},
{
    Item: "星子县",
    Code: 360427,
    PCode: 360400,
    Level: 2
},
{
    Item: "都昌县",
    Code: 360428,
    PCode: 360400,
    Level: 2
},
{
    Item: "湖口县",
    Code: 360429,
    PCode: 360400,
    Level: 2
},
{
    Item: "彭泽县",
    Code: 360430,
    PCode: 360400,
    Level: 2
},
{
    Item: "瑞昌市",
    Code: 360481,
    PCode: 360400,
    Level: 2
},
{
    Item: "共青城市",
    Code: 360482,
    PCode: 360400,
    Level: 2
},
{
    Item: "新余市",
    Code: 360500,
    PCode: 36e4,
    Level: 1
},
{
    Item: "市辖区",
    Code: 360501,
    PCode: 360500,
    Level: 2
},
{
    Item: "渝水区",
    Code: 360502,
    PCode: 360500,
    Level: 2
},
{
    Item: "分宜县",
    Code: 360521,
    PCode: 360500,
    Level: 2
},
{
    Item: "鹰潭市",
    Code: 360600,
    PCode: 36e4,
    Level: 1
},
{
    Item: "市辖区",
    Code: 360601,
    PCode: 360600,
    Level: 2
},
{
    Item: "月湖区",
    Code: 360602,
    PCode: 360600,
    Level: 2
},
{
    Item: "余江县",
    Code: 360622,
    PCode: 360600,
    Level: 2
},
{
    Item: "贵溪市",
    Code: 360681,
    PCode: 360600,
    Level: 2
},
{
    Item: "赣州市",
    Code: 360700,
    PCode: 36e4,
    Level: 1
},
{
    Item: "市辖区",
    Code: 360701,
    PCode: 360700,
    Level: 2
},
{
    Item: "章贡区",
    Code: 360702,
    PCode: 360700,
    Level: 2
},
{
    Item: "南康区",
    Code: 360703,
    PCode: 360700,
    Level: 2
},
{
    Item: "赣县",
    Code: 360721,
    PCode: 360700,
    Level: 2
},
{
    Item: "信丰县",
    Code: 360722,
    PCode: 360700,
    Level: 2
},
{
    Item: "大余县",
    Code: 360723,
    PCode: 360700,
    Level: 2
},
{
    Item: "上犹县",
    Code: 360724,
    PCode: 360700,
    Level: 2
},
{
    Item: "崇义县",
    Code: 360725,
    PCode: 360700,
    Level: 2
},
{
    Item: "安远县",
    Code: 360726,
    PCode: 360700,
    Level: 2
},
{
    Item: "龙南县",
    Code: 360727,
    PCode: 360700,
    Level: 2
},
{
    Item: "定南县",
    Code: 360728,
    PCode: 360700,
    Level: 2
},
{
    Item: "全南县",
    Code: 360729,
    PCode: 360700,
    Level: 2
},
{
    Item: "宁都县",
    Code: 360730,
    PCode: 360700,
    Level: 2
},
{
    Item: "于都县",
    Code: 360731,
    PCode: 360700,
    Level: 2
},
{
    Item: "兴国县",
    Code: 360732,
    PCode: 360700,
    Level: 2
},
{
    Item: "会昌县",
    Code: 360733,
    PCode: 360700,
    Level: 2
},
{
    Item: "寻乌县",
    Code: 360734,
    PCode: 360700,
    Level: 2
},
{
    Item: "石城县",
    Code: 360735,
    PCode: 360700,
    Level: 2
},
{
    Item: "瑞金市",
    Code: 360781,
    PCode: 360700,
    Level: 2
},
{
    Item: "吉安市",
    Code: 360800,
    PCode: 36e4,
    Level: 1
},
{
    Item: "市辖区",
    Code: 360801,
    PCode: 360800,
    Level: 2
},
{
    Item: "吉州区",
    Code: 360802,
    PCode: 360800,
    Level: 2
},
{
    Item: "青原区",
    Code: 360803,
    PCode: 360800,
    Level: 2
},
{
    Item: "吉安县",
    Code: 360821,
    PCode: 360800,
    Level: 2
},
{
    Item: "吉水县",
    Code: 360822,
    PCode: 360800,
    Level: 2
},
{
    Item: "峡江县",
    Code: 360823,
    PCode: 360800,
    Level: 2
},
{
    Item: "新干县",
    Code: 360824,
    PCode: 360800,
    Level: 2
},
{
    Item: "永丰县",
    Code: 360825,
    PCode: 360800,
    Level: 2
},
{
    Item: "泰和县",
    Code: 360826,
    PCode: 360800,
    Level: 2
},
{
    Item: "遂川县",
    Code: 360827,
    PCode: 360800,
    Level: 2
},
{
    Item: "万安县",
    Code: 360828,
    PCode: 360800,
    Level: 2
},
{
    Item: "安福县",
    Code: 360829,
    PCode: 360800,
    Level: 2
},
{
    Item: "永新县",
    Code: 360830,
    PCode: 360800,
    Level: 2
},
{
    Item: "井冈山市",
    Code: 360881,
    PCode: 360800,
    Level: 2
},
{
    Item: "宜春市",
    Code: 360900,
    PCode: 36e4,
    Level: 1
},
{
    Item: "市辖区",
    Code: 360901,
    PCode: 360900,
    Level: 2
},
{
    Item: "袁州区",
    Code: 360902,
    PCode: 360900,
    Level: 2
},
{
    Item: "奉新县",
    Code: 360921,
    PCode: 360900,
    Level: 2
},
{
    Item: "万载县",
    Code: 360922,
    PCode: 360900,
    Level: 2
},
{
    Item: "上高县",
    Code: 360923,
    PCode: 360900,
    Level: 2
},
{
    Item: "宜丰县",
    Code: 360924,
    PCode: 360900,
    Level: 2
},
{
    Item: "靖安县",
    Code: 360925,
    PCode: 360900,
    Level: 2
},
{
    Item: "铜鼓县",
    Code: 360926,
    PCode: 360900,
    Level: 2
},
{
    Item: "丰城市",
    Code: 360981,
    PCode: 360900,
    Level: 2
},
{
    Item: "樟树市",
    Code: 360982,
    PCode: 360900,
    Level: 2
},
{
    Item: "高安市",
    Code: 360983,
    PCode: 360900,
    Level: 2
},
{
    Item: "抚州市",
    Code: 361e3,
    PCode: 36e4,
    Level: 1
},
{
    Item: "市辖区",
    Code: 361001,
    PCode: 361e3,
    Level: 2
},
{
    Item: "临川区",
    Code: 361002,
    PCode: 361e3,
    Level: 2
},
{
    Item: "南城县",
    Code: 361021,
    PCode: 361e3,
    Level: 2
},
{
    Item: "黎川县",
    Code: 361022,
    PCode: 361e3,
    Level: 2
},
{
    Item: "南丰县",
    Code: 361023,
    PCode: 361e3,
    Level: 2
},
{
    Item: "崇仁县",
    Code: 361024,
    PCode: 361e3,
    Level: 2
},
{
    Item: "乐安县",
    Code: 361025,
    PCode: 361e3,
    Level: 2
},
{
    Item: "宜黄县",
    Code: 361026,
    PCode: 361e3,
    Level: 2
},
{
    Item: "金溪县",
    Code: 361027,
    PCode: 361e3,
    Level: 2
},
{
    Item: "资溪县",
    Code: 361028,
    PCode: 361e3,
    Level: 2
},
{
    Item: "东乡县",
    Code: 361029,
    PCode: 361e3,
    Level: 2
},
{
    Item: "广昌县",
    Code: 361030,
    PCode: 361e3,
    Level: 2
},
{
    Item: "上饶市",
    Code: 361100,
    PCode: 36e4,
    Level: 1
},
{
    Item: "市辖区",
    Code: 361101,
    PCode: 361100,
    Level: 2
},
{
    Item: "信州区",
    Code: 361102,
    PCode: 361100,
    Level: 2
},
{
    Item: "广丰区",
    Code: 361103,
    PCode: 361100,
    Level: 2
},
{
    Item: "上饶县",
    Code: 361121,
    PCode: 361100,
    Level: 2
},
{
    Item: "玉山县",
    Code: 361123,
    PCode: 361100,
    Level: 2
},
{
    Item: "铅山县",
    Code: 361124,
    PCode: 361100,
    Level: 2
},
{
    Item: "横峰县",
    Code: 361125,
    PCode: 361100,
    Level: 2
},
{
    Item: "弋阳县",
    Code: 361126,
    PCode: 361100,
    Level: 2
},
{
    Item: "余干县",
    Code: 361127,
    PCode: 361100,
    Level: 2
},
{
    Item: "鄱阳县",
    Code: 361128,
    PCode: 361100,
    Level: 2
},
{
    Item: "万年县",
    Code: 361129,
    PCode: 361100,
    Level: 2
},
{
    Item: "婺源县",
    Code: 361130,
    PCode: 361100,
    Level: 2
},
{
    Item: "德兴市",
    Code: 361181,
    PCode: 361100,
    Level: 2
},
{
    Item: "山东省",
    Code: 37e4,
    PCode: 0,
    Level: 0
},
{
    Item: "济南市",
    Code: 370100,
    PCode: 37e4,
    Level: 1
},
{
    Item: "市辖区",
    Code: 370101,
    PCode: 370100,
    Level: 2
},
{
    Item: "历下区",
    Code: 370102,
    PCode: 370100,
    Level: 2
},
{
    Item: "市中区",
    Code: 370103,
    PCode: 370100,
    Level: 2
},
{
    Item: "槐荫区",
    Code: 370104,
    PCode: 370100,
    Level: 2
},
{
    Item: "天桥区",
    Code: 370105,
    PCode: 370100,
    Level: 2
},
{
    Item: "历城区",
    Code: 370112,
    PCode: 370100,
    Level: 2
},
{
    Item: "长清区",
    Code: 370113,
    PCode: 370100,
    Level: 2
},
{
    Item: "平阴县",
    Code: 370124,
    PCode: 370100,
    Level: 2
},
{
    Item: "济阳县",
    Code: 370125,
    PCode: 370100,
    Level: 2
},
{
    Item: "商河县",
    Code: 370126,
    PCode: 370100,
    Level: 2
},
{
    Item: "章丘市",
    Code: 370181,
    PCode: 370100,
    Level: 2
},
{
    Item: "青岛市",
    Code: 370200,
    PCode: 37e4,
    Level: 1
},
{
    Item: "市辖区",
    Code: 370201,
    PCode: 370200,
    Level: 2
},
{
    Item: "市南区",
    Code: 370202,
    PCode: 370200,
    Level: 2
},
{
    Item: "市北区",
    Code: 370203,
    PCode: 370200,
    Level: 2
},
{
    Item: "黄岛区",
    Code: 370211,
    PCode: 370200,
    Level: 2
},
{
    Item: "崂山区",
    Code: 370212,
    PCode: 370200,
    Level: 2
},
{
    Item: "李沧区",
    Code: 370213,
    PCode: 370200,
    Level: 2
},
{
    Item: "城阳区",
    Code: 370214,
    PCode: 370200,
    Level: 2
},
{
    Item: "胶州市",
    Code: 370281,
    PCode: 370200,
    Level: 2
},
{
    Item: "即墨市",
    Code: 370282,
    PCode: 370200,
    Level: 2
},
{
    Item: "平度市",
    Code: 370283,
    PCode: 370200,
    Level: 2
},
{
    Item: "莱西市",
    Code: 370285,
    PCode: 370200,
    Level: 2
},
{
    Item: "淄博市",
    Code: 370300,
    PCode: 37e4,
    Level: 1
},
{
    Item: "市辖区",
    Code: 370301,
    PCode: 370300,
    Level: 2
},
{
    Item: "淄川区",
    Code: 370302,
    PCode: 370300,
    Level: 2
},
{
    Item: "张店区",
    Code: 370303,
    PCode: 370300,
    Level: 2
},
{
    Item: "博山区",
    Code: 370304,
    PCode: 370300,
    Level: 2
},
{
    Item: "临淄区",
    Code: 370305,
    PCode: 370300,
    Level: 2
},
{
    Item: "周村区",
    Code: 370306,
    PCode: 370300,
    Level: 2
},
{
    Item: "桓台县",
    Code: 370321,
    PCode: 370300,
    Level: 2
},
{
    Item: "高青县",
    Code: 370322,
    PCode: 370300,
    Level: 2
},
{
    Item: "沂源县",
    Code: 370323,
    PCode: 370300,
    Level: 2
},
{
    Item: "枣庄市",
    Code: 370400,
    PCode: 37e4,
    Level: 1
},
{
    Item: "市辖区",
    Code: 370401,
    PCode: 370400,
    Level: 2
},
{
    Item: "市中区",
    Code: 370402,
    PCode: 370400,
    Level: 2
},
{
    Item: "薛城区",
    Code: 370403,
    PCode: 370400,
    Level: 2
},
{
    Item: "峄城区",
    Code: 370404,
    PCode: 370400,
    Level: 2
},
{
    Item: "台儿庄区",
    Code: 370405,
    PCode: 370400,
    Level: 2
},
{
    Item: "山亭区",
    Code: 370406,
    PCode: 370400,
    Level: 2
},
{
    Item: "滕州市",
    Code: 370481,
    PCode: 370400,
    Level: 2
},
{
    Item: "东营市",
    Code: 370500,
    PCode: 37e4,
    Level: 1
},
{
    Item: "市辖区",
    Code: 370501,
    PCode: 370500,
    Level: 2
},
{
    Item: "东营区",
    Code: 370502,
    PCode: 370500,
    Level: 2
},
{
    Item: "河口区",
    Code: 370503,
    PCode: 370500,
    Level: 2
},
{
    Item: "垦利县",
    Code: 370521,
    PCode: 370500,
    Level: 2
},
{
    Item: "利津县",
    Code: 370522,
    PCode: 370500,
    Level: 2
},
{
    Item: "广饶县",
    Code: 370523,
    PCode: 370500,
    Level: 2
},
{
    Item: "烟台市",
    Code: 370600,
    PCode: 37e4,
    Level: 1
},
{
    Item: "市辖区",
    Code: 370601,
    PCode: 370600,
    Level: 2
},
{
    Item: "芝罘区",
    Code: 370602,
    PCode: 370600,
    Level: 2
},
{
    Item: "福山区",
    Code: 370611,
    PCode: 370600,
    Level: 2
},
{
    Item: "牟平区",
    Code: 370612,
    PCode: 370600,
    Level: 2
},
{
    Item: "莱山区",
    Code: 370613,
    PCode: 370600,
    Level: 2
},
{
    Item: "长岛县",
    Code: 370634,
    PCode: 370600,
    Level: 2
},
{
    Item: "龙口市",
    Code: 370681,
    PCode: 370600,
    Level: 2
},
{
    Item: "莱阳市",
    Code: 370682,
    PCode: 370600,
    Level: 2
},
{
    Item: "莱州市",
    Code: 370683,
    PCode: 370600,
    Level: 2
},
{
    Item: "蓬莱市",
    Code: 370684,
    PCode: 370600,
    Level: 2
},
{
    Item: "招远市",
    Code: 370685,
    PCode: 370600,
    Level: 2
},
{
    Item: "栖霞市",
    Code: 370686,
    PCode: 370600,
    Level: 2
},
{
    Item: "海阳市",
    Code: 370687,
    PCode: 370600,
    Level: 2
},
{
    Item: "潍坊市",
    Code: 370700,
    PCode: 37e4,
    Level: 1
},
{
    Item: "市辖区",
    Code: 370701,
    PCode: 370700,
    Level: 2
},
{
    Item: "潍城区",
    Code: 370702,
    PCode: 370700,
    Level: 2
},
{
    Item: "寒亭区",
    Code: 370703,
    PCode: 370700,
    Level: 2
},
{
    Item: "坊子区",
    Code: 370704,
    PCode: 370700,
    Level: 2
},
{
    Item: "奎文区",
    Code: 370705,
    PCode: 370700,
    Level: 2
},
{
    Item: "临朐县",
    Code: 370724,
    PCode: 370700,
    Level: 2
},
{
    Item: "昌乐县",
    Code: 370725,
    PCode: 370700,
    Level: 2
},
{
    Item: "青州市",
    Code: 370781,
    PCode: 370700,
    Level: 2
},
{
    Item: "诸城市",
    Code: 370782,
    PCode: 370700,
    Level: 2
},
{
    Item: "寿光市",
    Code: 370783,
    PCode: 370700,
    Level: 2
},
{
    Item: "安丘市",
    Code: 370784,
    PCode: 370700,
    Level: 2
},
{
    Item: "高密市",
    Code: 370785,
    PCode: 370700,
    Level: 2
},
{
    Item: "昌邑市",
    Code: 370786,
    PCode: 370700,
    Level: 2
},
{
    Item: "济宁市",
    Code: 370800,
    PCode: 37e4,
    Level: 1
},
{
    Item: "市辖区",
    Code: 370801,
    PCode: 370800,
    Level: 2
},
{
    Item: "任城区",
    Code: 370811,
    PCode: 370800,
    Level: 2
},
{
    Item: "兖州区",
    Code: 370812,
    PCode: 370800,
    Level: 2
},
{
    Item: "微山县",
    Code: 370826,
    PCode: 370800,
    Level: 2
},
{
    Item: "鱼台县",
    Code: 370827,
    PCode: 370800,
    Level: 2
},
{
    Item: "金乡县",
    Code: 370828,
    PCode: 370800,
    Level: 2
},
{
    Item: "嘉祥县",
    Code: 370829,
    PCode: 370800,
    Level: 2
},
{
    Item: "汶上县",
    Code: 370830,
    PCode: 370800,
    Level: 2
},
{
    Item: "泗水县",
    Code: 370831,
    PCode: 370800,
    Level: 2
},
{
    Item: "梁山县",
    Code: 370832,
    PCode: 370800,
    Level: 2
},
{
    Item: "曲阜市",
    Code: 370881,
    PCode: 370800,
    Level: 2
},
{
    Item: "邹城市",
    Code: 370883,
    PCode: 370800,
    Level: 2
},
{
    Item: "泰安市",
    Code: 370900,
    PCode: 37e4,
    Level: 1
},
{
    Item: "市辖区",
    Code: 370901,
    PCode: 370900,
    Level: 2
},
{
    Item: "泰山区",
    Code: 370902,
    PCode: 370900,
    Level: 2
},
{
    Item: "岱岳区",
    Code: 370911,
    PCode: 370900,
    Level: 2
},
{
    Item: "宁阳县",
    Code: 370921,
    PCode: 370900,
    Level: 2
},
{
    Item: "东平县",
    Code: 370923,
    PCode: 370900,
    Level: 2
},
{
    Item: "新泰市",
    Code: 370982,
    PCode: 370900,
    Level: 2
},
{
    Item: "肥城市",
    Code: 370983,
    PCode: 370900,
    Level: 2
},
{
    Item: "威海市",
    Code: 371e3,
    PCode: 37e4,
    Level: 1
},
{
    Item: "市辖区",
    Code: 371001,
    PCode: 371e3,
    Level: 2
},
{
    Item: "环翠区",
    Code: 371002,
    PCode: 371e3,
    Level: 2
},
{
    Item: "文登区",
    Code: 371003,
    PCode: 371e3,
    Level: 2
},
{
    Item: "荣成市",
    Code: 371082,
    PCode: 371e3,
    Level: 2
},
{
    Item: "乳山市",
    Code: 371083,
    PCode: 371e3,
    Level: 2
},
{
    Item: "日照市",
    Code: 371100,
    PCode: 37e4,
    Level: 1
},
{
    Item: "市辖区",
    Code: 371101,
    PCode: 371100,
    Level: 2
},
{
    Item: "东港区",
    Code: 371102,
    PCode: 371100,
    Level: 2
},
{
    Item: "岚山区",
    Code: 371103,
    PCode: 371100,
    Level: 2
},
{
    Item: "五莲县",
    Code: 371121,
    PCode: 371100,
    Level: 2
},
{
    Item: "莒县",
    Code: 371122,
    PCode: 371100,
    Level: 2
},
{
    Item: "莱芜市",
    Code: 371200,
    PCode: 37e4,
    Level: 1
},
{
    Item: "市辖区",
    Code: 371201,
    PCode: 371200,
    Level: 2
},
{
    Item: "莱城区",
    Code: 371202,
    PCode: 371200,
    Level: 2
},
{
    Item: "钢城区",
    Code: 371203,
    PCode: 371200,
    Level: 2
},
{
    Item: "临沂市",
    Code: 371300,
    PCode: 37e4,
    Level: 1
},
{
    Item: "市辖区",
    Code: 371301,
    PCode: 371300,
    Level: 2
},
{
    Item: "兰山区",
    Code: 371302,
    PCode: 371300,
    Level: 2
},
{
    Item: "罗庄区",
    Code: 371311,
    PCode: 371300,
    Level: 2
},
{
    Item: "河东区",
    Code: 371312,
    PCode: 371300,
    Level: 2
},
{
    Item: "沂南县",
    Code: 371321,
    PCode: 371300,
    Level: 2
},
{
    Item: "郯城县",
    Code: 371322,
    PCode: 371300,
    Level: 2
},
{
    Item: "沂水县",
    Code: 371323,
    PCode: 371300,
    Level: 2
},
{
    Item: "兰陵县",
    Code: 371324,
    PCode: 371300,
    Level: 2
},
{
    Item: "费县",
    Code: 371325,
    PCode: 371300,
    Level: 2
},
{
    Item: "平邑县",
    Code: 371326,
    PCode: 371300,
    Level: 2
},
{
    Item: "莒南县",
    Code: 371327,
    PCode: 371300,
    Level: 2
},
{
    Item: "蒙阴县",
    Code: 371328,
    PCode: 371300,
    Level: 2
},
{
    Item: "临沭县",
    Code: 371329,
    PCode: 371300,
    Level: 2
},
{
    Item: "德州市",
    Code: 371400,
    PCode: 37e4,
    Level: 1
},
{
    Item: "市辖区",
    Code: 371401,
    PCode: 371400,
    Level: 2
},
{
    Item: "德城区",
    Code: 371402,
    PCode: 371400,
    Level: 2
},
{
    Item: "陵城区",
    Code: 371403,
    PCode: 371400,
    Level: 2
},
{
    Item: "宁津县",
    Code: 371422,
    PCode: 371400,
    Level: 2
},
{
    Item: "庆云县",
    Code: 371423,
    PCode: 371400,
    Level: 2
},
{
    Item: "临邑县",
    Code: 371424,
    PCode: 371400,
    Level: 2
},
{
    Item: "齐河县",
    Code: 371425,
    PCode: 371400,
    Level: 2
},
{
    Item: "平原县",
    Code: 371426,
    PCode: 371400,
    Level: 2
},
{
    Item: "夏津县",
    Code: 371427,
    PCode: 371400,
    Level: 2
},
{
    Item: "武城县",
    Code: 371428,
    PCode: 371400,
    Level: 2
},
{
    Item: "乐陵市",
    Code: 371481,
    PCode: 371400,
    Level: 2
},
{
    Item: "禹城市",
    Code: 371482,
    PCode: 371400,
    Level: 2
},
{
    Item: "聊城市",
    Code: 371500,
    PCode: 37e4,
    Level: 1
},
{
    Item: "市辖区",
    Code: 371501,
    PCode: 371500,
    Level: 2
},
{
    Item: "东昌府区",
    Code: 371502,
    PCode: 371500,
    Level: 2
},
{
    Item: "阳谷县",
    Code: 371521,
    PCode: 371500,
    Level: 2
},
{
    Item: "莘县",
    Code: 371522,
    PCode: 371500,
    Level: 2
},
{
    Item: "茌平县",
    Code: 371523,
    PCode: 371500,
    Level: 2
},
{
    Item: "东阿县",
    Code: 371524,
    PCode: 371500,
    Level: 2
},
{
    Item: "冠县",
    Code: 371525,
    PCode: 371500,
    Level: 2
},
{
    Item: "高唐县",
    Code: 371526,
    PCode: 371500,
    Level: 2
},
{
    Item: "临清市",
    Code: 371581,
    PCode: 371500,
    Level: 2
},
{
    Item: "滨州市",
    Code: 371600,
    PCode: 37e4,
    Level: 1
},
{
    Item: "市辖区",
    Code: 371601,
    PCode: 371600,
    Level: 2
},
{
    Item: "滨城区",
    Code: 371602,
    PCode: 371600,
    Level: 2
},
{
    Item: "沾化区",
    Code: 371603,
    PCode: 371600,
    Level: 2
},
{
    Item: "惠民县",
    Code: 371621,
    PCode: 371600,
    Level: 2
},
{
    Item: "阳信县",
    Code: 371622,
    PCode: 371600,
    Level: 2
},
{
    Item: "无棣县",
    Code: 371623,
    PCode: 371600,
    Level: 2
},
{
    Item: "博兴县",
    Code: 371625,
    PCode: 371600,
    Level: 2
},
{
    Item: "邹平县",
    Code: 371626,
    PCode: 371600,
    Level: 2
},
{
    Item: "菏泽市",
    Code: 371700,
    PCode: 37e4,
    Level: 1
},
{
    Item: "市辖区",
    Code: 371701,
    PCode: 371700,
    Level: 2
},
{
    Item: "牡丹区",
    Code: 371702,
    PCode: 371700,
    Level: 2
},
{
    Item: "曹县",
    Code: 371721,
    PCode: 371700,
    Level: 2
},
{
    Item: "单县",
    Code: 371722,
    PCode: 371700,
    Level: 2
},
{
    Item: "成武县",
    Code: 371723,
    PCode: 371700,
    Level: 2
},
{
    Item: "巨野县",
    Code: 371724,
    PCode: 371700,
    Level: 2
},
{
    Item: "郓城县",
    Code: 371725,
    PCode: 371700,
    Level: 2
},
{
    Item: "鄄城县",
    Code: 371726,
    PCode: 371700,
    Level: 2
},
{
    Item: "定陶县",
    Code: 371727,
    PCode: 371700,
    Level: 2
},
{
    Item: "东明县",
    Code: 371728,
    PCode: 371700,
    Level: 2
},
{
    Item: "河南省",
    Code: 41e4,
    PCode: 0,
    Level: 0
},
{
    Item: "郑州市",
    Code: 410100,
    PCode: 41e4,
    Level: 1
},
{
    Item: "市辖区",
    Code: 410101,
    PCode: 410100,
    Level: 2
},
{
    Item: "中原区",
    Code: 410102,
    PCode: 410100,
    Level: 2
},
{
    Item: "二七区",
    Code: 410103,
    PCode: 410100,
    Level: 2
},
{
    Item: "管城回族区",
    Code: 410104,
    PCode: 410100,
    Level: 2
},
{
    Item: "金水区",
    Code: 410105,
    PCode: 410100,
    Level: 2
},
{
    Item: "上街区",
    Code: 410106,
    PCode: 410100,
    Level: 2
},
{
    Item: "惠济区",
    Code: 410108,
    PCode: 410100,
    Level: 2
},
{
    Item: "中牟县",
    Code: 410122,
    PCode: 410100,
    Level: 2
},
{
    Item: "巩义市",
    Code: 410181,
    PCode: 410100,
    Level: 2
},
{
    Item: "荥阳市",
    Code: 410182,
    PCode: 410100,
    Level: 2
},
{
    Item: "新密市",
    Code: 410183,
    PCode: 410100,
    Level: 2
},
{
    Item: "新郑市",
    Code: 410184,
    PCode: 410100,
    Level: 2
},
{
    Item: "登封市",
    Code: 410185,
    PCode: 410100,
    Level: 2
},
{
    Item: "开封市",
    Code: 410200,
    PCode: 41e4,
    Level: 1
},
{
    Item: "市辖区",
    Code: 410201,
    PCode: 410200,
    Level: 2
},
{
    Item: "龙亭区",
    Code: 410202,
    PCode: 410200,
    Level: 2
},
{
    Item: "顺河回族区",
    Code: 410203,
    PCode: 410200,
    Level: 2
},
{
    Item: "鼓楼区",
    Code: 410204,
    PCode: 410200,
    Level: 2
},
{
    Item: "禹王台区",
    Code: 410205,
    PCode: 410200,
    Level: 2
},
{
    Item: "金明区",
    Code: 410211,
    PCode: 410200,
    Level: 2
},
{
    Item: "祥符区",
    Code: 410212,
    PCode: 410200,
    Level: 2
},
{
    Item: "杞县",
    Code: 410221,
    PCode: 410200,
    Level: 2
},
{
    Item: "通许县",
    Code: 410222,
    PCode: 410200,
    Level: 2
},
{
    Item: "尉氏县",
    Code: 410223,
    PCode: 410200,
    Level: 2
},
{
    Item: "开封县",
    Code: 410224,
    PCode: 410200,
    Level: 2
},
{
    Item: "兰考县",
    Code: 410225,
    PCode: 410200,
    Level: 2
},
{
    Item: "洛阳市",
    Code: 410300,
    PCode: 41e4,
    Level: 1
},
{
    Item: "市辖区",
    Code: 410301,
    PCode: 410300,
    Level: 2
},
{
    Item: "老城区",
    Code: 410302,
    PCode: 410300,
    Level: 2
},
{
    Item: "西工区",
    Code: 410303,
    PCode: 410300,
    Level: 2
},
{
    Item: "瀍河回族区",
    Code: 410304,
    PCode: 410300,
    Level: 2
},
{
    Item: "涧西区",
    Code: 410305,
    PCode: 410300,
    Level: 2
},
{
    Item: "吉利区",
    Code: 410306,
    PCode: 410300,
    Level: 2
},
{
    Item: "洛龙区",
    Code: 410311,
    PCode: 410300,
    Level: 2
},
{
    Item: "孟津县",
    Code: 410322,
    PCode: 410300,
    Level: 2
},
{
    Item: "新安县",
    Code: 410323,
    PCode: 410300,
    Level: 2
},
{
    Item: "栾川县",
    Code: 410324,
    PCode: 410300,
    Level: 2
},
{
    Item: "嵩县",
    Code: 410325,
    PCode: 410300,
    Level: 2
},
{
    Item: "汝阳县",
    Code: 410326,
    PCode: 410300,
    Level: 2
},
{
    Item: "宜阳县",
    Code: 410327,
    PCode: 410300,
    Level: 2
},
{
    Item: "洛宁县",
    Code: 410328,
    PCode: 410300,
    Level: 2
},
{
    Item: "伊川县",
    Code: 410329,
    PCode: 410300,
    Level: 2
},
{
    Item: "偃师市",
    Code: 410381,
    PCode: 410300,
    Level: 2
},
{
    Item: "平顶山市",
    Code: 410400,
    PCode: 41e4,
    Level: 1
},
{
    Item: "市辖区",
    Code: 410401,
    PCode: 410400,
    Level: 2
},
{
    Item: "新华区",
    Code: 410402,
    PCode: 410400,
    Level: 2
},
{
    Item: "卫东区",
    Code: 410403,
    PCode: 410400,
    Level: 2
},
{
    Item: "石龙区",
    Code: 410404,
    PCode: 410400,
    Level: 2
},
{
    Item: "湛河区",
    Code: 410411,
    PCode: 410400,
    Level: 2
},
{
    Item: "宝丰县",
    Code: 410421,
    PCode: 410400,
    Level: 2
},
{
    Item: "叶县",
    Code: 410422,
    PCode: 410400,
    Level: 2
},
{
    Item: "鲁山县",
    Code: 410423,
    PCode: 410400,
    Level: 2
},
{
    Item: "郏县",
    Code: 410425,
    PCode: 410400,
    Level: 2
},
{
    Item: "舞钢市",
    Code: 410481,
    PCode: 410400,
    Level: 2
},
{
    Item: "汝州市",
    Code: 410482,
    PCode: 410400,
    Level: 2
},
{
    Item: "安阳市",
    Code: 410500,
    PCode: 41e4,
    Level: 1
},
{
    Item: "市辖区",
    Code: 410501,
    PCode: 410500,
    Level: 2
},
{
    Item: "文峰区",
    Code: 410502,
    PCode: 410500,
    Level: 2
},
{
    Item: "北关区",
    Code: 410503,
    PCode: 410500,
    Level: 2
},
{
    Item: "殷都区",
    Code: 410505,
    PCode: 410500,
    Level: 2
},
{
    Item: "龙安区",
    Code: 410506,
    PCode: 410500,
    Level: 2
},
{
    Item: "安阳县",
    Code: 410522,
    PCode: 410500,
    Level: 2
},
{
    Item: "汤阴县",
    Code: 410523,
    PCode: 410500,
    Level: 2
},
{
    Item: "滑县",
    Code: 410526,
    PCode: 410500,
    Level: 2
},
{
    Item: "内黄县",
    Code: 410527,
    PCode: 410500,
    Level: 2
},
{
    Item: "林州市",
    Code: 410581,
    PCode: 410500,
    Level: 2
},
{
    Item: "鹤壁市",
    Code: 410600,
    PCode: 41e4,
    Level: 1
},
{
    Item: "市辖区",
    Code: 410601,
    PCode: 410600,
    Level: 2
},
{
    Item: "鹤山区",
    Code: 410602,
    PCode: 410600,
    Level: 2
},
{
    Item: "山城区",
    Code: 410603,
    PCode: 410600,
    Level: 2
},
{
    Item: "淇滨区",
    Code: 410611,
    PCode: 410600,
    Level: 2
},
{
    Item: "浚县",
    Code: 410621,
    PCode: 410600,
    Level: 2
},
{
    Item: "淇县",
    Code: 410622,
    PCode: 410600,
    Level: 2
},
{
    Item: "新乡市",
    Code: 410700,
    PCode: 41e4,
    Level: 1
},
{
    Item: "市辖区",
    Code: 410701,
    PCode: 410700,
    Level: 2
},
{
    Item: "红旗区",
    Code: 410702,
    PCode: 410700,
    Level: 2
},
{
    Item: "卫滨区",
    Code: 410703,
    PCode: 410700,
    Level: 2
},
{
    Item: "凤泉区",
    Code: 410704,
    PCode: 410700,
    Level: 2
},
{
    Item: "牧野区",
    Code: 410711,
    PCode: 410700,
    Level: 2
},
{
    Item: "新乡县",
    Code: 410721,
    PCode: 410700,
    Level: 2
},
{
    Item: "获嘉县",
    Code: 410724,
    PCode: 410700,
    Level: 2
},
{
    Item: "原阳县",
    Code: 410725,
    PCode: 410700,
    Level: 2
},
{
    Item: "延津县",
    Code: 410726,
    PCode: 410700,
    Level: 2
},
{
    Item: "封丘县",
    Code: 410727,
    PCode: 410700,
    Level: 2
},
{
    Item: "长垣县",
    Code: 410728,
    PCode: 410700,
    Level: 2
},
{
    Item: "卫辉市",
    Code: 410781,
    PCode: 410700,
    Level: 2
},
{
    Item: "辉县市",
    Code: 410782,
    PCode: 410700,
    Level: 2
},
{
    Item: "焦作市",
    Code: 410800,
    PCode: 41e4,
    Level: 1
},
{
    Item: "市辖区",
    Code: 410801,
    PCode: 410800,
    Level: 2
},
{
    Item: "解放区",
    Code: 410802,
    PCode: 410800,
    Level: 2
},
{
    Item: "中站区",
    Code: 410803,
    PCode: 410800,
    Level: 2
},
{
    Item: "马村区",
    Code: 410804,
    PCode: 410800,
    Level: 2
},
{
    Item: "山阳区",
    Code: 410811,
    PCode: 410800,
    Level: 2
},
{
    Item: "修武县",
    Code: 410821,
    PCode: 410800,
    Level: 2
},
{
    Item: "博爱县",
    Code: 410822,
    PCode: 410800,
    Level: 2
},
{
    Item: "武陟县",
    Code: 410823,
    PCode: 410800,
    Level: 2
},
{
    Item: "温县",
    Code: 410825,
    PCode: 410800,
    Level: 2
},
{
    Item: "沁阳市",
    Code: 410882,
    PCode: 410800,
    Level: 2
},
{
    Item: "孟州市",
    Code: 410883,
    PCode: 410800,
    Level: 2
},
{
    Item: "濮阳市",
    Code: 410900,
    PCode: 41e4,
    Level: 1
},
{
    Item: "市辖区",
    Code: 410901,
    PCode: 410900,
    Level: 2
},
{
    Item: "华龙区",
    Code: 410902,
    PCode: 410900,
    Level: 2
},
{
    Item: "清丰县",
    Code: 410922,
    PCode: 410900,
    Level: 2
},
{
    Item: "南乐县",
    Code: 410923,
    PCode: 410900,
    Level: 2
},
{
    Item: "范县",
    Code: 410926,
    PCode: 410900,
    Level: 2
},
{
    Item: "台前县",
    Code: 410927,
    PCode: 410900,
    Level: 2
},
{
    Item: "濮阳县",
    Code: 410928,
    PCode: 410900,
    Level: 2
},
{
    Item: "许昌市",
    Code: 411e3,
    PCode: 41e4,
    Level: 1
},
{
    Item: "市辖区",
    Code: 411001,
    PCode: 411e3,
    Level: 2
},
{
    Item: "魏都区",
    Code: 411002,
    PCode: 411e3,
    Level: 2
},
{
    Item: "许昌县",
    Code: 411023,
    PCode: 411e3,
    Level: 2
},
{
    Item: "鄢陵县",
    Code: 411024,
    PCode: 411e3,
    Level: 2
},
{
    Item: "襄城县",
    Code: 411025,
    PCode: 411e3,
    Level: 2
},
{
    Item: "禹州市",
    Code: 411081,
    PCode: 411e3,
    Level: 2
},
{
    Item: "长葛市",
    Code: 411082,
    PCode: 411e3,
    Level: 2
},
{
    Item: "漯河市",
    Code: 411100,
    PCode: 41e4,
    Level: 1
},
{
    Item: "市辖区",
    Code: 411101,
    PCode: 411100,
    Level: 2
},
{
    Item: "源汇区",
    Code: 411102,
    PCode: 411100,
    Level: 2
},
{
    Item: "郾城区",
    Code: 411103,
    PCode: 411100,
    Level: 2
},
{
    Item: "召陵区",
    Code: 411104,
    PCode: 411100,
    Level: 2
},
{
    Item: "舞阳县",
    Code: 411121,
    PCode: 411100,
    Level: 2
},
{
    Item: "临颍县",
    Code: 411122,
    PCode: 411100,
    Level: 2
},
{
    Item: "三门峡市",
    Code: 411200,
    PCode: 41e4,
    Level: 1
},
{
    Item: "市辖区",
    Code: 411201,
    PCode: 411200,
    Level: 2
},
{
    Item: "湖滨区",
    Code: 411202,
    PCode: 411200,
    Level: 2
},
{
    Item: "渑池县",
    Code: 411221,
    PCode: 411200,
    Level: 2
},
{
    Item: "陕县",
    Code: 411222,
    PCode: 411200,
    Level: 2
},
{
    Item: "卢氏县",
    Code: 411224,
    PCode: 411200,
    Level: 2
},
{
    Item: "义马市",
    Code: 411281,
    PCode: 411200,
    Level: 2
},
{
    Item: "灵宝市",
    Code: 411282,
    PCode: 411200,
    Level: 2
},
{
    Item: "南阳市",
    Code: 411300,
    PCode: 41e4,
    Level: 1
},
{
    Item: "市辖区",
    Code: 411301,
    PCode: 411300,
    Level: 2
},
{
    Item: "宛城区",
    Code: 411302,
    PCode: 411300,
    Level: 2
},
{
    Item: "卧龙区",
    Code: 411303,
    PCode: 411300,
    Level: 2
},
{
    Item: "南召县",
    Code: 411321,
    PCode: 411300,
    Level: 2
},
{
    Item: "方城县",
    Code: 411322,
    PCode: 411300,
    Level: 2
},
{
    Item: "西峡县",
    Code: 411323,
    PCode: 411300,
    Level: 2
},
{
    Item: "镇平县",
    Code: 411324,
    PCode: 411300,
    Level: 2
},
{
    Item: "内乡县",
    Code: 411325,
    PCode: 411300,
    Level: 2
},
{
    Item: "淅川县",
    Code: 411326,
    PCode: 411300,
    Level: 2
},
{
    Item: "社旗县",
    Code: 411327,
    PCode: 411300,
    Level: 2
},
{
    Item: "唐河县",
    Code: 411328,
    PCode: 411300,
    Level: 2
},
{
    Item: "新野县",
    Code: 411329,
    PCode: 411300,
    Level: 2
},
{
    Item: "桐柏县",
    Code: 411330,
    PCode: 411300,
    Level: 2
},
{
    Item: "邓州市",
    Code: 411381,
    PCode: 411300,
    Level: 2
},
{
    Item: "商丘市",
    Code: 411400,
    PCode: 41e4,
    Level: 1
},
{
    Item: "市辖区",
    Code: 411401,
    PCode: 411400,
    Level: 2
},
{
    Item: "梁园区",
    Code: 411402,
    PCode: 411400,
    Level: 2
},
{
    Item: "睢阳区",
    Code: 411403,
    PCode: 411400,
    Level: 2
},
{
    Item: "民权县",
    Code: 411421,
    PCode: 411400,
    Level: 2
},
{
    Item: "睢县",
    Code: 411422,
    PCode: 411400,
    Level: 2
},
{
    Item: "宁陵县",
    Code: 411423,
    PCode: 411400,
    Level: 2
},
{
    Item: "柘城县",
    Code: 411424,
    PCode: 411400,
    Level: 2
},
{
    Item: "虞城县",
    Code: 411425,
    PCode: 411400,
    Level: 2
},
{
    Item: "夏邑县",
    Code: 411426,
    PCode: 411400,
    Level: 2
},
{
    Item: "永城市",
    Code: 411481,
    PCode: 411400,
    Level: 2
},
{
    Item: "信阳市",
    Code: 411500,
    PCode: 41e4,
    Level: 1
},
{
    Item: "市辖区",
    Code: 411501,
    PCode: 411500,
    Level: 2
},
{
    Item: "浉河区",
    Code: 411502,
    PCode: 411500,
    Level: 2
},
{
    Item: "平桥区",
    Code: 411503,
    PCode: 411500,
    Level: 2
},
{
    Item: "罗山县",
    Code: 411521,
    PCode: 411500,
    Level: 2
},
{
    Item: "光山县",
    Code: 411522,
    PCode: 411500,
    Level: 2
},
{
    Item: "新县",
    Code: 411523,
    PCode: 411500,
    Level: 2
},
{
    Item: "商城县",
    Code: 411524,
    PCode: 411500,
    Level: 2
},
{
    Item: "固始县",
    Code: 411525,
    PCode: 411500,
    Level: 2
},
{
    Item: "潢川县",
    Code: 411526,
    PCode: 411500,
    Level: 2
},
{
    Item: "淮滨县",
    Code: 411527,
    PCode: 411500,
    Level: 2
},
{
    Item: "息县",
    Code: 411528,
    PCode: 411500,
    Level: 2
},
{
    Item: "周口市",
    Code: 411600,
    PCode: 41e4,
    Level: 1
},
{
    Item: "市辖区",
    Code: 411601,
    PCode: 411600,
    Level: 2
},
{
    Item: "川汇区",
    Code: 411602,
    PCode: 411600,
    Level: 2
},
{
    Item: "扶沟县",
    Code: 411621,
    PCode: 411600,
    Level: 2
},
{
    Item: "西华县",
    Code: 411622,
    PCode: 411600,
    Level: 2
},
{
    Item: "商水县",
    Code: 411623,
    PCode: 411600,
    Level: 2
},
{
    Item: "沈丘县",
    Code: 411624,
    PCode: 411600,
    Level: 2
},
{
    Item: "郸城县",
    Code: 411625,
    PCode: 411600,
    Level: 2
},
{
    Item: "淮阳县",
    Code: 411626,
    PCode: 411600,
    Level: 2
},
{
    Item: "太康县",
    Code: 411627,
    PCode: 411600,
    Level: 2
},
{
    Item: "鹿邑县",
    Code: 411628,
    PCode: 411600,
    Level: 2
},
{
    Item: "项城市",
    Code: 411681,
    PCode: 411600,
    Level: 2
},
{
    Item: "驻马店市",
    Code: 411700,
    PCode: 41e4,
    Level: 1
},
{
    Item: "市辖区",
    Code: 411701,
    PCode: 411700,
    Level: 2
},
{
    Item: "驿城区",
    Code: 411702,
    PCode: 411700,
    Level: 2
},
{
    Item: "西平县",
    Code: 411721,
    PCode: 411700,
    Level: 2
},
{
    Item: "上蔡县",
    Code: 411722,
    PCode: 411700,
    Level: 2
},
{
    Item: "平舆县",
    Code: 411723,
    PCode: 411700,
    Level: 2
},
{
    Item: "正阳县",
    Code: 411724,
    PCode: 411700,
    Level: 2
},
{
    Item: "确山县",
    Code: 411725,
    PCode: 411700,
    Level: 2
},
{
    Item: "泌阳县",
    Code: 411726,
    PCode: 411700,
    Level: 2
},
{
    Item: "汝南县",
    Code: 411727,
    PCode: 411700,
    Level: 2
},
{
    Item: "遂平县",
    Code: 411728,
    PCode: 411700,
    Level: 2
},
{
    Item: "新蔡县",
    Code: 411729,
    PCode: 411700,
    Level: 2
},
{
    Item: "省直辖县级行政区划",
    Code: 419e3,
    PCode: 41e4,
    Level: 1
},
{
    Item: "济源市",
    Code: 419001,
    PCode: 419e3,
    Level: 2
},
{
    Item: "湖北省",
    Code: 42e4,
    PCode: 0,
    Level: 0
},
{
    Item: "武汉市",
    Code: 420100,
    PCode: 42e4,
    Level: 1
},
{
    Item: "市辖区",
    Code: 420101,
    PCode: 420100,
    Level: 2
},
{
    Item: "江岸区",
    Code: 420102,
    PCode: 420100,
    Level: 2
},
{
    Item: "江汉区",
    Code: 420103,
    PCode: 420100,
    Level: 2
},
{
    Item: "硚口区",
    Code: 420104,
    PCode: 420100,
    Level: 2
},
{
    Item: "汉阳区",
    Code: 420105,
    PCode: 420100,
    Level: 2
},
{
    Item: "武昌区",
    Code: 420106,
    PCode: 420100,
    Level: 2
},
{
    Item: "青山区",
    Code: 420107,
    PCode: 420100,
    Level: 2
},
{
    Item: "洪山区",
    Code: 420111,
    PCode: 420100,
    Level: 2
},
{
    Item: "东西湖区",
    Code: 420112,
    PCode: 420100,
    Level: 2
},
{
    Item: "汉南区",
    Code: 420113,
    PCode: 420100,
    Level: 2
},
{
    Item: "蔡甸区",
    Code: 420114,
    PCode: 420100,
    Level: 2
},
{
    Item: "江夏区",
    Code: 420115,
    PCode: 420100,
    Level: 2
},
{
    Item: "黄陂区",
    Code: 420116,
    PCode: 420100,
    Level: 2
},
{
    Item: "新洲区",
    Code: 420117,
    PCode: 420100,
    Level: 2
},
{
    Item: "黄石市",
    Code: 420200,
    PCode: 42e4,
    Level: 1
},
{
    Item: "市辖区",
    Code: 420201,
    PCode: 420200,
    Level: 2
},
{
    Item: "黄石港区",
    Code: 420202,
    PCode: 420200,
    Level: 2
},
{
    Item: "西塞山区",
    Code: 420203,
    PCode: 420200,
    Level: 2
},
{
    Item: "下陆区",
    Code: 420204,
    PCode: 420200,
    Level: 2
},
{
    Item: "铁山区",
    Code: 420205,
    PCode: 420200,
    Level: 2
},
{
    Item: "阳新县",
    Code: 420222,
    PCode: 420200,
    Level: 2
},
{
    Item: "大冶市",
    Code: 420281,
    PCode: 420200,
    Level: 2
},
{
    Item: "十堰市",
    Code: 420300,
    PCode: 42e4,
    Level: 1
},
{
    Item: "市辖区",
    Code: 420301,
    PCode: 420300,
    Level: 2
},
{
    Item: "茅箭区",
    Code: 420302,
    PCode: 420300,
    Level: 2
},
{
    Item: "张湾区",
    Code: 420303,
    PCode: 420300,
    Level: 2
},
{
    Item: "郧阳区",
    Code: 420304,
    PCode: 420300,
    Level: 2
},
{
    Item: "郧西县",
    Code: 420322,
    PCode: 420300,
    Level: 2
},
{
    Item: "竹山县",
    Code: 420323,
    PCode: 420300,
    Level: 2
},
{
    Item: "竹溪县",
    Code: 420324,
    PCode: 420300,
    Level: 2
},
{
    Item: "房县",
    Code: 420325,
    PCode: 420300,
    Level: 2
},
{
    Item: "丹江口市",
    Code: 420381,
    PCode: 420300,
    Level: 2
},
{
    Item: "宜昌市",
    Code: 420500,
    PCode: 42e4,
    Level: 1
},
{
    Item: "市辖区",
    Code: 420501,
    PCode: 420500,
    Level: 2
},
{
    Item: "西陵区",
    Code: 420502,
    PCode: 420500,
    Level: 2
},
{
    Item: "伍家岗区",
    Code: 420503,
    PCode: 420500,
    Level: 2
},
{
    Item: "点军区",
    Code: 420504,
    PCode: 420500,
    Level: 2
},
{
    Item: "猇亭区",
    Code: 420505,
    PCode: 420500,
    Level: 2
},
{
    Item: "夷陵区",
    Code: 420506,
    PCode: 420500,
    Level: 2
},
{
    Item: "远安县",
    Code: 420525,
    PCode: 420500,
    Level: 2
},
{
    Item: "兴山县",
    Code: 420526,
    PCode: 420500,
    Level: 2
},
{
    Item: "秭归县",
    Code: 420527,
    PCode: 420500,
    Level: 2
},
{
    Item: "长阳土家族自治县",
    Code: 420528,
    PCode: 420500,
    Level: 2
},
{
    Item: "五峰土家族自治县",
    Code: 420529,
    PCode: 420500,
    Level: 2
},
{
    Item: "宜都市",
    Code: 420581,
    PCode: 420500,
    Level: 2
},
{
    Item: "当阳市",
    Code: 420582,
    PCode: 420500,
    Level: 2
},
{
    Item: "枝江市",
    Code: 420583,
    PCode: 420500,
    Level: 2
},
{
    Item: "襄阳市",
    Code: 420600,
    PCode: 42e4,
    Level: 1
},
{
    Item: "市辖区",
    Code: 420601,
    PCode: 420600,
    Level: 2
},
{
    Item: "襄城区",
    Code: 420602,
    PCode: 420600,
    Level: 2
},
{
    Item: "樊城区",
    Code: 420606,
    PCode: 420600,
    Level: 2
},
{
    Item: "襄州区",
    Code: 420607,
    PCode: 420600,
    Level: 2
},
{
    Item: "南漳县",
    Code: 420624,
    PCode: 420600,
    Level: 2
},
{
    Item: "谷城县",
    Code: 420625,
    PCode: 420600,
    Level: 2
},
{
    Item: "保康县",
    Code: 420626,
    PCode: 420600,
    Level: 2
},
{
    Item: "老河口市",
    Code: 420682,
    PCode: 420600,
    Level: 2
},
{
    Item: "枣阳市",
    Code: 420683,
    PCode: 420600,
    Level: 2
},
{
    Item: "宜城市",
    Code: 420684,
    PCode: 420600,
    Level: 2
},
{
    Item: "鄂州市",
    Code: 420700,
    PCode: 42e4,
    Level: 1
},
{
    Item: "市辖区",
    Code: 420701,
    PCode: 420700,
    Level: 2
},
{
    Item: "梁子湖区",
    Code: 420702,
    PCode: 420700,
    Level: 2
},
{
    Item: "华容区",
    Code: 420703,
    PCode: 420700,
    Level: 2
},
{
    Item: "鄂城区",
    Code: 420704,
    PCode: 420700,
    Level: 2
},
{
    Item: "荆门市",
    Code: 420800,
    PCode: 42e4,
    Level: 1
},
{
    Item: "市辖区",
    Code: 420801,
    PCode: 420800,
    Level: 2
},
{
    Item: "东宝区",
    Code: 420802,
    PCode: 420800,
    Level: 2
},
{
    Item: "掇刀区",
    Code: 420804,
    PCode: 420800,
    Level: 2
},
{
    Item: "京山县",
    Code: 420821,
    PCode: 420800,
    Level: 2
},
{
    Item: "沙洋县",
    Code: 420822,
    PCode: 420800,
    Level: 2
},
{
    Item: "钟祥市",
    Code: 420881,
    PCode: 420800,
    Level: 2
},
{
    Item: "孝感市",
    Code: 420900,
    PCode: 42e4,
    Level: 1
},
{
    Item: "市辖区",
    Code: 420901,
    PCode: 420900,
    Level: 2
},
{
    Item: "孝南区",
    Code: 420902,
    PCode: 420900,
    Level: 2
},
{
    Item: "孝昌县",
    Code: 420921,
    PCode: 420900,
    Level: 2
},
{
    Item: "大悟县",
    Code: 420922,
    PCode: 420900,
    Level: 2
},
{
    Item: "云梦县",
    Code: 420923,
    PCode: 420900,
    Level: 2
},
{
    Item: "应城市",
    Code: 420981,
    PCode: 420900,
    Level: 2
},
{
    Item: "安陆市",
    Code: 420982,
    PCode: 420900,
    Level: 2
},
{
    Item: "汉川市",
    Code: 420984,
    PCode: 420900,
    Level: 2
},
{
    Item: "荆州市",
    Code: 421e3,
    PCode: 42e4,
    Level: 1
},
{
    Item: "市辖区",
    Code: 421001,
    PCode: 421e3,
    Level: 2
},
{
    Item: "沙市区",
    Code: 421002,
    PCode: 421e3,
    Level: 2
},
{
    Item: "荆州区",
    Code: 421003,
    PCode: 421e3,
    Level: 2
},
{
    Item: "公安县",
    Code: 421022,
    PCode: 421e3,
    Level: 2
},
{
    Item: "监利县",
    Code: 421023,
    PCode: 421e3,
    Level: 2
},
{
    Item: "江陵县",
    Code: 421024,
    PCode: 421e3,
    Level: 2
},
{
    Item: "石首市",
    Code: 421081,
    PCode: 421e3,
    Level: 2
},
{
    Item: "洪湖市",
    Code: 421083,
    PCode: 421e3,
    Level: 2
},
{
    Item: "松滋市",
    Code: 421087,
    PCode: 421e3,
    Level: 2
},
{
    Item: "黄冈市",
    Code: 421100,
    PCode: 42e4,
    Level: 1
},
{
    Item: "市辖区",
    Code: 421101,
    PCode: 421100,
    Level: 2
},
{
    Item: "黄州区",
    Code: 421102,
    PCode: 421100,
    Level: 2
},
{
    Item: "团风县",
    Code: 421121,
    PCode: 421100,
    Level: 2
},
{
    Item: "红安县",
    Code: 421122,
    PCode: 421100,
    Level: 2
},
{
    Item: "罗田县",
    Code: 421123,
    PCode: 421100,
    Level: 2
},
{
    Item: "英山县",
    Code: 421124,
    PCode: 421100,
    Level: 2
},
{
    Item: "浠水县",
    Code: 421125,
    PCode: 421100,
    Level: 2
},
{
    Item: "蕲春县",
    Code: 421126,
    PCode: 421100,
    Level: 2
},
{
    Item: "黄梅县",
    Code: 421127,
    PCode: 421100,
    Level: 2
},
{
    Item: "麻城市",
    Code: 421181,
    PCode: 421100,
    Level: 2
},
{
    Item: "武穴市",
    Code: 421182,
    PCode: 421100,
    Level: 2
},
{
    Item: "咸宁市",
    Code: 421200,
    PCode: 42e4,
    Level: 1
},
{
    Item: "市辖区",
    Code: 421201,
    PCode: 421200,
    Level: 2
},
{
    Item: "咸安区",
    Code: 421202,
    PCode: 421200,
    Level: 2
},
{
    Item: "嘉鱼县",
    Code: 421221,
    PCode: 421200,
    Level: 2
},
{
    Item: "通城县",
    Code: 421222,
    PCode: 421200,
    Level: 2
},
{
    Item: "崇阳县",
    Code: 421223,
    PCode: 421200,
    Level: 2
},
{
    Item: "通山县",
    Code: 421224,
    PCode: 421200,
    Level: 2
},
{
    Item: "赤壁市",
    Code: 421281,
    PCode: 421200,
    Level: 2
},
{
    Item: "随州市",
    Code: 421300,
    PCode: 42e4,
    Level: 1
},
{
    Item: "市辖区",
    Code: 421301,
    PCode: 421300,
    Level: 2
},
{
    Item: "曾都区",
    Code: 421303,
    PCode: 421300,
    Level: 2
},
{
    Item: "随县",
    Code: 421321,
    PCode: 421300,
    Level: 2
},
{
    Item: "广水市",
    Code: 421381,
    PCode: 421300,
    Level: 2
},
{
    Item: "恩施土家族苗族自治州",
    Code: 422800,
    PCode: 42e4,
    Level: 1
},
{
    Item: "恩施市",
    Code: 422801,
    PCode: 422800,
    Level: 2
},
{
    Item: "利川市",
    Code: 422802,
    PCode: 422800,
    Level: 2
},
{
    Item: "建始县",
    Code: 422822,
    PCode: 422800,
    Level: 2
},
{
    Item: "巴东县",
    Code: 422823,
    PCode: 422800,
    Level: 2
},
{
    Item: "宣恩县",
    Code: 422825,
    PCode: 422800,
    Level: 2
},
{
    Item: "咸丰县",
    Code: 422826,
    PCode: 422800,
    Level: 2
},
{
    Item: "来凤县",
    Code: 422827,
    PCode: 422800,
    Level: 2
},
{
    Item: "鹤峰县",
    Code: 422828,
    PCode: 422800,
    Level: 2
},
{
    Item: "省直辖县级行政区划",
    Code: 429e3,
    PCode: 42e4,
    Level: 1
},
{
    Item: "仙桃市",
    Code: 429004,
    PCode: 429e3,
    Level: 2
},
{
    Item: "潜江市",
    Code: 429005,
    PCode: 429e3,
    Level: 2
},
{
    Item: "天门市",
    Code: 429006,
    PCode: 429e3,
    Level: 2
},
{
    Item: "神农架林区",
    Code: 429021,
    PCode: 429e3,
    Level: 2
},
{
    Item: "湖南省",
    Code: 43e4,
    PCode: 0,
    Level: 0
},
{
    Item: "长沙市",
    Code: 430100,
    PCode: 43e4,
    Level: 1
},
{
    Item: "市辖区",
    Code: 430101,
    PCode: 430100,
    Level: 2
},
{
    Item: "芙蓉区",
    Code: 430102,
    PCode: 430100,
    Level: 2
},
{
    Item: "天心区",
    Code: 430103,
    PCode: 430100,
    Level: 2
},
{
    Item: "岳麓区",
    Code: 430104,
    PCode: 430100,
    Level: 2
},
{
    Item: "开福区",
    Code: 430105,
    PCode: 430100,
    Level: 2
},
{
    Item: "雨花区",
    Code: 430111,
    PCode: 430100,
    Level: 2
},
{
    Item: "望城区",
    Code: 430112,
    PCode: 430100,
    Level: 2
},
{
    Item: "长沙县",
    Code: 430121,
    PCode: 430100,
    Level: 2
},
{
    Item: "宁乡县",
    Code: 430124,
    PCode: 430100,
    Level: 2
},
{
    Item: "浏阳市",
    Code: 430181,
    PCode: 430100,
    Level: 2
},
{
    Item: "株洲市",
    Code: 430200,
    PCode: 43e4,
    Level: 1
},
{
    Item: "市辖区",
    Code: 430201,
    PCode: 430200,
    Level: 2
},
{
    Item: "荷塘区",
    Code: 430202,
    PCode: 430200,
    Level: 2
},
{
    Item: "芦淞区",
    Code: 430203,
    PCode: 430200,
    Level: 2
},
{
    Item: "石峰区",
    Code: 430204,
    PCode: 430200,
    Level: 2
},
{
    Item: "天元区",
    Code: 430211,
    PCode: 430200,
    Level: 2
},
{
    Item: "株洲县",
    Code: 430221,
    PCode: 430200,
    Level: 2
},
{
    Item: "攸县",
    Code: 430223,
    PCode: 430200,
    Level: 2
},
{
    Item: "茶陵县",
    Code: 430224,
    PCode: 430200,
    Level: 2
},
{
    Item: "炎陵县",
    Code: 430225,
    PCode: 430200,
    Level: 2
},
{
    Item: "醴陵市",
    Code: 430281,
    PCode: 430200,
    Level: 2
},
{
    Item: "湘潭市",
    Code: 430300,
    PCode: 43e4,
    Level: 1
},
{
    Item: "市辖区",
    Code: 430301,
    PCode: 430300,
    Level: 2
},
{
    Item: "雨湖区",
    Code: 430302,
    PCode: 430300,
    Level: 2
},
{
    Item: "岳塘区",
    Code: 430304,
    PCode: 430300,
    Level: 2
},
{
    Item: "湘潭县",
    Code: 430321,
    PCode: 430300,
    Level: 2
},
{
    Item: "湘乡市",
    Code: 430381,
    PCode: 430300,
    Level: 2
},
{
    Item: "韶山市",
    Code: 430382,
    PCode: 430300,
    Level: 2
},
{
    Item: "衡阳市",
    Code: 430400,
    PCode: 43e4,
    Level: 1
},
{
    Item: "市辖区",
    Code: 430401,
    PCode: 430400,
    Level: 2
},
{
    Item: "珠晖区",
    Code: 430405,
    PCode: 430400,
    Level: 2
},
{
    Item: "雁峰区",
    Code: 430406,
    PCode: 430400,
    Level: 2
},
{
    Item: "石鼓区",
    Code: 430407,
    PCode: 430400,
    Level: 2
},
{
    Item: "蒸湘区",
    Code: 430408,
    PCode: 430400,
    Level: 2
},
{
    Item: "南岳区",
    Code: 430412,
    PCode: 430400,
    Level: 2
},
{
    Item: "衡阳县",
    Code: 430421,
    PCode: 430400,
    Level: 2
},
{
    Item: "衡南县",
    Code: 430422,
    PCode: 430400,
    Level: 2
},
{
    Item: "衡山县",
    Code: 430423,
    PCode: 430400,
    Level: 2
},
{
    Item: "衡东县",
    Code: 430424,
    PCode: 430400,
    Level: 2
},
{
    Item: "祁东县",
    Code: 430426,
    PCode: 430400,
    Level: 2
},
{
    Item: "耒阳市",
    Code: 430481,
    PCode: 430400,
    Level: 2
},
{
    Item: "常宁市",
    Code: 430482,
    PCode: 430400,
    Level: 2
},
{
    Item: "邵阳市",
    Code: 430500,
    PCode: 43e4,
    Level: 1
},
{
    Item: "市辖区",
    Code: 430501,
    PCode: 430500,
    Level: 2
},
{
    Item: "双清区",
    Code: 430502,
    PCode: 430500,
    Level: 2
},
{
    Item: "大祥区",
    Code: 430503,
    PCode: 430500,
    Level: 2
},
{
    Item: "北塔区",
    Code: 430511,
    PCode: 430500,
    Level: 2
},
{
    Item: "邵东县",
    Code: 430521,
    PCode: 430500,
    Level: 2
},
{
    Item: "新邵县",
    Code: 430522,
    PCode: 430500,
    Level: 2
},
{
    Item: "邵阳县",
    Code: 430523,
    PCode: 430500,
    Level: 2
},
{
    Item: "隆回县",
    Code: 430524,
    PCode: 430500,
    Level: 2
},
{
    Item: "洞口县",
    Code: 430525,
    PCode: 430500,
    Level: 2
},
{
    Item: "绥宁县",
    Code: 430527,
    PCode: 430500,
    Level: 2
},
{
    Item: "新宁县",
    Code: 430528,
    PCode: 430500,
    Level: 2
},
{
    Item: "城步苗族自治县",
    Code: 430529,
    PCode: 430500,
    Level: 2
},
{
    Item: "武冈市",
    Code: 430581,
    PCode: 430500,
    Level: 2
},
{
    Item: "岳阳市",
    Code: 430600,
    PCode: 43e4,
    Level: 1
},
{
    Item: "市辖区",
    Code: 430601,
    PCode: 430600,
    Level: 2
},
{
    Item: "岳阳楼区",
    Code: 430602,
    PCode: 430600,
    Level: 2
},
{
    Item: "云溪区",
    Code: 430603,
    PCode: 430600,
    Level: 2
},
{
    Item: "君山区",
    Code: 430611,
    PCode: 430600,
    Level: 2
},
{
    Item: "岳阳县",
    Code: 430621,
    PCode: 430600,
    Level: 2
},
{
    Item: "华容县",
    Code: 430623,
    PCode: 430600,
    Level: 2
},
{
    Item: "湘阴县",
    Code: 430624,
    PCode: 430600,
    Level: 2
},
{
    Item: "平江县",
    Code: 430626,
    PCode: 430600,
    Level: 2
},
{
    Item: "汨罗市",
    Code: 430681,
    PCode: 430600,
    Level: 2
},
{
    Item: "临湘市",
    Code: 430682,
    PCode: 430600,
    Level: 2
},
{
    Item: "常德市",
    Code: 430700,
    PCode: 43e4,
    Level: 1
},
{
    Item: "市辖区",
    Code: 430701,
    PCode: 430700,
    Level: 2
},
{
    Item: "武陵区",
    Code: 430702,
    PCode: 430700,
    Level: 2
},
{
    Item: "鼎城区",
    Code: 430703,
    PCode: 430700,
    Level: 2
},
{
    Item: "安乡县",
    Code: 430721,
    PCode: 430700,
    Level: 2
},
{
    Item: "汉寿县",
    Code: 430722,
    PCode: 430700,
    Level: 2
},
{
    Item: "澧县",
    Code: 430723,
    PCode: 430700,
    Level: 2
},
{
    Item: "临澧县",
    Code: 430724,
    PCode: 430700,
    Level: 2
},
{
    Item: "桃源县",
    Code: 430725,
    PCode: 430700,
    Level: 2
},
{
    Item: "石门县",
    Code: 430726,
    PCode: 430700,
    Level: 2
},
{
    Item: "津市市",
    Code: 430781,
    PCode: 430700,
    Level: 2
},
{
    Item: "张家界市",
    Code: 430800,
    PCode: 43e4,
    Level: 1
},
{
    Item: "市辖区",
    Code: 430801,
    PCode: 430800,
    Level: 2
},
{
    Item: "永定区",
    Code: 430802,
    PCode: 430800,
    Level: 2
},
{
    Item: "武陵源区",
    Code: 430811,
    PCode: 430800,
    Level: 2
},
{
    Item: "慈利县",
    Code: 430821,
    PCode: 430800,
    Level: 2
},
{
    Item: "桑植县",
    Code: 430822,
    PCode: 430800,
    Level: 2
},
{
    Item: "益阳市",
    Code: 430900,
    PCode: 43e4,
    Level: 1
},
{
    Item: "市辖区",
    Code: 430901,
    PCode: 430900,
    Level: 2
},
{
    Item: "资阳区",
    Code: 430902,
    PCode: 430900,
    Level: 2
},
{
    Item: "赫山区",
    Code: 430903,
    PCode: 430900,
    Level: 2
},
{
    Item: "南县",
    Code: 430921,
    PCode: 430900,
    Level: 2
},
{
    Item: "桃江县",
    Code: 430922,
    PCode: 430900,
    Level: 2
},
{
    Item: "安化县",
    Code: 430923,
    PCode: 430900,
    Level: 2
},
{
    Item: "沅江市",
    Code: 430981,
    PCode: 430900,
    Level: 2
},
{
    Item: "郴州市",
    Code: 431e3,
    PCode: 43e4,
    Level: 1
},
{
    Item: "市辖区",
    Code: 431001,
    PCode: 431e3,
    Level: 2
},
{
    Item: "北湖区",
    Code: 431002,
    PCode: 431e3,
    Level: 2
},
{
    Item: "苏仙区",
    Code: 431003,
    PCode: 431e3,
    Level: 2
},
{
    Item: "桂阳县",
    Code: 431021,
    PCode: 431e3,
    Level: 2
},
{
    Item: "宜章县",
    Code: 431022,
    PCode: 431e3,
    Level: 2
},
{
    Item: "永兴县",
    Code: 431023,
    PCode: 431e3,
    Level: 2
},
{
    Item: "嘉禾县",
    Code: 431024,
    PCode: 431e3,
    Level: 2
},
{
    Item: "临武县",
    Code: 431025,
    PCode: 431e3,
    Level: 2
},
{
    Item: "汝城县",
    Code: 431026,
    PCode: 431e3,
    Level: 2
},
{
    Item: "桂东县",
    Code: 431027,
    PCode: 431e3,
    Level: 2
},
{
    Item: "安仁县",
    Code: 431028,
    PCode: 431e3,
    Level: 2
},
{
    Item: "资兴市",
    Code: 431081,
    PCode: 431e3,
    Level: 2
},
{
    Item: "永州市",
    Code: 431100,
    PCode: 43e4,
    Level: 1
},
{
    Item: "市辖区",
    Code: 431101,
    PCode: 431100,
    Level: 2
},
{
    Item: "零陵区",
    Code: 431102,
    PCode: 431100,
    Level: 2
},
{
    Item: "冷水滩区",
    Code: 431103,
    PCode: 431100,
    Level: 2
},
{
    Item: "祁阳县",
    Code: 431121,
    PCode: 431100,
    Level: 2
},
{
    Item: "东安县",
    Code: 431122,
    PCode: 431100,
    Level: 2
},
{
    Item: "双牌县",
    Code: 431123,
    PCode: 431100,
    Level: 2
},
{
    Item: "道县",
    Code: 431124,
    PCode: 431100,
    Level: 2
},
{
    Item: "江永县",
    Code: 431125,
    PCode: 431100,
    Level: 2
},
{
    Item: "宁远县",
    Code: 431126,
    PCode: 431100,
    Level: 2
},
{
    Item: "蓝山县",
    Code: 431127,
    PCode: 431100,
    Level: 2
},
{
    Item: "新田县",
    Code: 431128,
    PCode: 431100,
    Level: 2
},
{
    Item: "江华瑶族自治县",
    Code: 431129,
    PCode: 431100,
    Level: 2
},
{
    Item: "怀化市",
    Code: 431200,
    PCode: 43e4,
    Level: 1
},
{
    Item: "市辖区",
    Code: 431201,
    PCode: 431200,
    Level: 2
},
{
    Item: "鹤城区",
    Code: 431202,
    PCode: 431200,
    Level: 2
},
{
    Item: "中方县",
    Code: 431221,
    PCode: 431200,
    Level: 2
},
{
    Item: "沅陵县",
    Code: 431222,
    PCode: 431200,
    Level: 2
},
{
    Item: "辰溪县",
    Code: 431223,
    PCode: 431200,
    Level: 2
},
{
    Item: "溆浦县",
    Code: 431224,
    PCode: 431200,
    Level: 2
},
{
    Item: "会同县",
    Code: 431225,
    PCode: 431200,
    Level: 2
},
{
    Item: "麻阳苗族自治县",
    Code: 431226,
    PCode: 431200,
    Level: 2
},
{
    Item: "新晃侗族自治县",
    Code: 431227,
    PCode: 431200,
    Level: 2
},
{
    Item: "芷江侗族自治县",
    Code: 431228,
    PCode: 431200,
    Level: 2
},
{
    Item: "靖州苗族侗族自治县",
    Code: 431229,
    PCode: 431200,
    Level: 2
},
{
    Item: "通道侗族自治县",
    Code: 431230,
    PCode: 431200,
    Level: 2
},
{
    Item: "洪江市",
    Code: 431281,
    PCode: 431200,
    Level: 2
},
{
    Item: "娄底市",
    Code: 431300,
    PCode: 43e4,
    Level: 1
},
{
    Item: "市辖区",
    Code: 431301,
    PCode: 431300,
    Level: 2
},
{
    Item: "娄星区",
    Code: 431302,
    PCode: 431300,
    Level: 2
},
{
    Item: "双峰县",
    Code: 431321,
    PCode: 431300,
    Level: 2
},
{
    Item: "新化县",
    Code: 431322,
    PCode: 431300,
    Level: 2
},
{
    Item: "冷水江市",
    Code: 431381,
    PCode: 431300,
    Level: 2
},
{
    Item: "涟源市",
    Code: 431382,
    PCode: 431300,
    Level: 2
},
{
    Item: "湘西土家族苗族自治州",
    Code: 433100,
    PCode: 43e4,
    Level: 1
},
{
    Item: "吉首市",
    Code: 433101,
    PCode: 433100,
    Level: 2
},
{
    Item: "泸溪县",
    Code: 433122,
    PCode: 433100,
    Level: 2
},
{
    Item: "凤凰县",
    Code: 433123,
    PCode: 433100,
    Level: 2
},
{
    Item: "花垣县",
    Code: 433124,
    PCode: 433100,
    Level: 2
},
{
    Item: "保靖县",
    Code: 433125,
    PCode: 433100,
    Level: 2
},
{
    Item: "古丈县",
    Code: 433126,
    PCode: 433100,
    Level: 2
},
{
    Item: "永顺县",
    Code: 433127,
    PCode: 433100,
    Level: 2
},
{
    Item: "龙山县",
    Code: 433130,
    PCode: 433100,
    Level: 2
},
{
    Item: "广东省",
    Code: 44e4,
    PCode: 0,
    Level: 0
},
{
    Item: "广州市",
    Code: 440100,
    PCode: 44e4,
    Level: 1
},
{
    Item: "市辖区",
    Code: 440101,
    PCode: 440100,
    Level: 2
},
{
    Item: "荔湾区",
    Code: 440103,
    PCode: 440100,
    Level: 2
},
{
    Item: "越秀区",
    Code: 440104,
    PCode: 440100,
    Level: 2
},
{
    Item: "海珠区",
    Code: 440105,
    PCode: 440100,
    Level: 2
},
{
    Item: "天河区",
    Code: 440106,
    PCode: 440100,
    Level: 2
},
{
    Item: "白云区",
    Code: 440111,
    PCode: 440100,
    Level: 2
},
{
    Item: "黄埔区",
    Code: 440112,
    PCode: 440100,
    Level: 2
},
{
    Item: "番禺区",
    Code: 440113,
    PCode: 440100,
    Level: 2
},
{
    Item: "花都区",
    Code: 440114,
    PCode: 440100,
    Level: 2
},
{
    Item: "南沙区",
    Code: 440115,
    PCode: 440100,
    Level: 2
},
{
    Item: "从化区",
    Code: 440117,
    PCode: 440100,
    Level: 2
},
{
    Item: "增城区",
    Code: 440118,
    PCode: 440100,
    Level: 2
},
{
    Item: "韶关市",
    Code: 440200,
    PCode: 44e4,
    Level: 1
},
{
    Item: "市辖区",
    Code: 440201,
    PCode: 440200,
    Level: 2
},
{
    Item: "武江区",
    Code: 440203,
    PCode: 440200,
    Level: 2
},
{
    Item: "浈江区",
    Code: 440204,
    PCode: 440200,
    Level: 2
},
{
    Item: "曲江区",
    Code: 440205,
    PCode: 440200,
    Level: 2
},
{
    Item: "始兴县",
    Code: 440222,
    PCode: 440200,
    Level: 2
},
{
    Item: "仁化县",
    Code: 440224,
    PCode: 440200,
    Level: 2
},
{
    Item: "翁源县",
    Code: 440229,
    PCode: 440200,
    Level: 2
},
{
    Item: "乳源瑶族自治县",
    Code: 440232,
    PCode: 440200,
    Level: 2
},
{
    Item: "新丰县",
    Code: 440233,
    PCode: 440200,
    Level: 2
},
{
    Item: "乐昌市",
    Code: 440281,
    PCode: 440200,
    Level: 2
},
{
    Item: "南雄市",
    Code: 440282,
    PCode: 440200,
    Level: 2
},
{
    Item: "深圳市",
    Code: 440300,
    PCode: 44e4,
    Level: 1
},
{
    Item: "市辖区",
    Code: 440301,
    PCode: 440300,
    Level: 2
},
{
    Item: "罗湖区",
    Code: 440303,
    PCode: 440300,
    Level: 2
},
{
    Item: "福田区",
    Code: 440304,
    PCode: 440300,
    Level: 2
},
{
    Item: "南山区",
    Code: 440305,
    PCode: 440300,
    Level: 2
},
{
    Item: "宝安区",
    Code: 440306,
    PCode: 440300,
    Level: 2
},
{
    Item: "龙岗区",
    Code: 440307,
    PCode: 440300,
    Level: 2
},
{
    Item: "盐田区",
    Code: 440308,
    PCode: 440300,
    Level: 2
},
{
    Item: "珠海市",
    Code: 440400,
    PCode: 44e4,
    Level: 1
},
{
    Item: "市辖区",
    Code: 440401,
    PCode: 440400,
    Level: 2
},
{
    Item: "香洲区",
    Code: 440402,
    PCode: 440400,
    Level: 2
},
{
    Item: "斗门区",
    Code: 440403,
    PCode: 440400,
    Level: 2
},
{
    Item: "金湾区",
    Code: 440404,
    PCode: 440400,
    Level: 2
},
{
    Item: "汕头市",
    Code: 440500,
    PCode: 44e4,
    Level: 1
},
{
    Item: "市辖区",
    Code: 440501,
    PCode: 440500,
    Level: 2
},
{
    Item: "龙湖区",
    Code: 440507,
    PCode: 440500,
    Level: 2
},
{
    Item: "金平区",
    Code: 440511,
    PCode: 440500,
    Level: 2
},
{
    Item: "濠江区",
    Code: 440512,
    PCode: 440500,
    Level: 2
},
{
    Item: "潮阳区",
    Code: 440513,
    PCode: 440500,
    Level: 2
},
{
    Item: "潮南区",
    Code: 440514,
    PCode: 440500,
    Level: 2
},
{
    Item: "澄海区",
    Code: 440515,
    PCode: 440500,
    Level: 2
},
{
    Item: "南澳县",
    Code: 440523,
    PCode: 440500,
    Level: 2
},
{
    Item: "佛山市",
    Code: 440600,
    PCode: 44e4,
    Level: 1
},
{
    Item: "市辖区",
    Code: 440601,
    PCode: 440600,
    Level: 2
},
{
    Item: "禅城区",
    Code: 440604,
    PCode: 440600,
    Level: 2
},
{
    Item: "南海区",
    Code: 440605,
    PCode: 440600,
    Level: 2
},
{
    Item: "顺德区",
    Code: 440606,
    PCode: 440600,
    Level: 2
},
{
    Item: "三水区",
    Code: 440607,
    PCode: 440600,
    Level: 2
},
{
    Item: "高明区",
    Code: 440608,
    PCode: 440600,
    Level: 2
},
{
    Item: "江门市",
    Code: 440700,
    PCode: 44e4,
    Level: 1
},
{
    Item: "市辖区",
    Code: 440701,
    PCode: 440700,
    Level: 2
},
{
    Item: "蓬江区",
    Code: 440703,
    PCode: 440700,
    Level: 2
},
{
    Item: "江海区",
    Code: 440704,
    PCode: 440700,
    Level: 2
},
{
    Item: "新会区",
    Code: 440705,
    PCode: 440700,
    Level: 2
},
{
    Item: "台山市",
    Code: 440781,
    PCode: 440700,
    Level: 2
},
{
    Item: "开平市",
    Code: 440783,
    PCode: 440700,
    Level: 2
},
{
    Item: "鹤山市",
    Code: 440784,
    PCode: 440700,
    Level: 2
},
{
    Item: "恩平市",
    Code: 440785,
    PCode: 440700,
    Level: 2
},
{
    Item: "湛江市",
    Code: 440800,
    PCode: 44e4,
    Level: 1
},
{
    Item: "市辖区",
    Code: 440801,
    PCode: 440800,
    Level: 2
},
{
    Item: "赤坎区",
    Code: 440802,
    PCode: 440800,
    Level: 2
},
{
    Item: "霞山区",
    Code: 440803,
    PCode: 440800,
    Level: 2
},
{
    Item: "坡头区",
    Code: 440804,
    PCode: 440800,
    Level: 2
},
{
    Item: "麻章区",
    Code: 440811,
    PCode: 440800,
    Level: 2
},
{
    Item: "遂溪县",
    Code: 440823,
    PCode: 440800,
    Level: 2
},
{
    Item: "徐闻县",
    Code: 440825,
    PCode: 440800,
    Level: 2
},
{
    Item: "廉江市",
    Code: 440881,
    PCode: 440800,
    Level: 2
},
{
    Item: "雷州市",
    Code: 440882,
    PCode: 440800,
    Level: 2
},
{
    Item: "吴川市",
    Code: 440883,
    PCode: 440800,
    Level: 2
},
{
    Item: "茂名市",
    Code: 440900,
    PCode: 44e4,
    Level: 1
},
{
    Item: "市辖区",
    Code: 440901,
    PCode: 440900,
    Level: 2
},
{
    Item: "茂南区",
    Code: 440902,
    PCode: 440900,
    Level: 2
},
{
    Item: "电白区",
    Code: 440904,
    PCode: 440900,
    Level: 2
},
{
    Item: "高州市",
    Code: 440981,
    PCode: 440900,
    Level: 2
},
{
    Item: "化州市",
    Code: 440982,
    PCode: 440900,
    Level: 2
},
{
    Item: "信宜市",
    Code: 440983,
    PCode: 440900,
    Level: 2
},
{
    Item: "肇庆市",
    Code: 441200,
    PCode: 44e4,
    Level: 1
},
{
    Item: "市辖区",
    Code: 441201,
    PCode: 441200,
    Level: 2
},
{
    Item: "端州区",
    Code: 441202,
    PCode: 441200,
    Level: 2
},
{
    Item: "鼎湖区",
    Code: 441203,
    PCode: 441200,
    Level: 2
},
{
    Item: "高要区",
    Code: 441204,
    PCode: 441200,
    Level: 2
},
{
    Item: "广宁县",
    Code: 441223,
    PCode: 441200,
    Level: 2
},
{
    Item: "怀集县",
    Code: 441224,
    PCode: 441200,
    Level: 2
},
{
    Item: "封开县",
    Code: 441225,
    PCode: 441200,
    Level: 2
},
{
    Item: "德庆县",
    Code: 441226,
    PCode: 441200,
    Level: 2
},
{
    Item: "四会市",
    Code: 441284,
    PCode: 441200,
    Level: 2
},
{
    Item: "惠州市",
    Code: 441300,
    PCode: 44e4,
    Level: 1
},
{
    Item: "市辖区",
    Code: 441301,
    PCode: 441300,
    Level: 2
},
{
    Item: "惠城区",
    Code: 441302,
    PCode: 441300,
    Level: 2
},
{
    Item: "惠阳区",
    Code: 441303,
    PCode: 441300,
    Level: 2
},
{
    Item: "博罗县",
    Code: 441322,
    PCode: 441300,
    Level: 2
},
{
    Item: "惠东县",
    Code: 441323,
    PCode: 441300,
    Level: 2
},
{
    Item: "龙门县",
    Code: 441324,
    PCode: 441300,
    Level: 2
},
{
    Item: "梅州市",
    Code: 441400,
    PCode: 44e4,
    Level: 1
},
{
    Item: "市辖区",
    Code: 441401,
    PCode: 441400,
    Level: 2
},
{
    Item: "梅江区",
    Code: 441402,
    PCode: 441400,
    Level: 2
},
{
    Item: "梅县区",
    Code: 441403,
    PCode: 441400,
    Level: 2
},
{
    Item: "大埔县",
    Code: 441422,
    PCode: 441400,
    Level: 2
},
{
    Item: "丰顺县",
    Code: 441423,
    PCode: 441400,
    Level: 2
},
{
    Item: "五华县",
    Code: 441424,
    PCode: 441400,
    Level: 2
},
{
    Item: "平远县",
    Code: 441426,
    PCode: 441400,
    Level: 2
},
{
    Item: "蕉岭县",
    Code: 441427,
    PCode: 441400,
    Level: 2
},
{
    Item: "兴宁市",
    Code: 441481,
    PCode: 441400,
    Level: 2
},
{
    Item: "汕尾市",
    Code: 441500,
    PCode: 44e4,
    Level: 1
},
{
    Item: "市辖区",
    Code: 441501,
    PCode: 441500,
    Level: 2
},
{
    Item: "城区",
    Code: 441502,
    PCode: 441500,
    Level: 2
},
{
    Item: "海丰县",
    Code: 441521,
    PCode: 441500,
    Level: 2
},
{
    Item: "陆河县",
    Code: 441523,
    PCode: 441500,
    Level: 2
},
{
    Item: "陆丰市",
    Code: 441581,
    PCode: 441500,
    Level: 2
},
{
    Item: "河源市",
    Code: 441600,
    PCode: 44e4,
    Level: 1
},
{
    Item: "市辖区",
    Code: 441601,
    PCode: 441600,
    Level: 2
},
{
    Item: "源城区",
    Code: 441602,
    PCode: 441600,
    Level: 2
},
{
    Item: "紫金县",
    Code: 441621,
    PCode: 441600,
    Level: 2
},
{
    Item: "龙川县",
    Code: 441622,
    PCode: 441600,
    Level: 2
},
{
    Item: "连平县",
    Code: 441623,
    PCode: 441600,
    Level: 2
},
{
    Item: "和平县",
    Code: 441624,
    PCode: 441600,
    Level: 2
},
{
    Item: "东源县",
    Code: 441625,
    PCode: 441600,
    Level: 2
},
{
    Item: "阳江市",
    Code: 441700,
    PCode: 44e4,
    Level: 1
},
{
    Item: "市辖区",
    Code: 441701,
    PCode: 441700,
    Level: 2
},
{
    Item: "江城区",
    Code: 441702,
    PCode: 441700,
    Level: 2
},
{
    Item: "阳东区",
    Code: 441704,
    PCode: 441700,
    Level: 2
},
{
    Item: "阳西县",
    Code: 441721,
    PCode: 441700,
    Level: 2
},
{
    Item: "阳春市",
    Code: 441781,
    PCode: 441700,
    Level: 2
},
{
    Item: "清远市",
    Code: 441800,
    PCode: 44e4,
    Level: 1
},
{
    Item: "市辖区",
    Code: 441801,
    PCode: 441800,
    Level: 2
},
{
    Item: "清城区",
    Code: 441802,
    PCode: 441800,
    Level: 2
},
{
    Item: "清新区",
    Code: 441803,
    PCode: 441800,
    Level: 2
},
{
    Item: "佛冈县",
    Code: 441821,
    PCode: 441800,
    Level: 2
},
{
    Item: "阳山县",
    Code: 441823,
    PCode: 441800,
    Level: 2
},
{
    Item: "连山壮族瑶族自治县",
    Code: 441825,
    PCode: 441800,
    Level: 2
},
{
    Item: "连南瑶族自治县",
    Code: 441826,
    PCode: 441800,
    Level: 2
},
{
    Item: "英德市",
    Code: 441881,
    PCode: 441800,
    Level: 2
},
{
    Item: "连州市",
    Code: 441882,
    PCode: 441800,
    Level: 2
},
{
    Item: "东莞市",
    Code: 441900,
    PCode: 44e4,
    Level: 1
},
{
    Item: "中山市",
    Code: 442e3,
    PCode: 44e4,
    Level: 1
},
{
    Item: "潮州市",
    Code: 445100,
    PCode: 44e4,
    Level: 1
},
{
    Item: "市辖区",
    Code: 445101,
    PCode: 445100,
    Level: 2
},
{
    Item: "湘桥区",
    Code: 445102,
    PCode: 445100,
    Level: 2
},
{
    Item: "潮安区",
    Code: 445103,
    PCode: 445100,
    Level: 2
},
{
    Item: "饶平县",
    Code: 445122,
    PCode: 445100,
    Level: 2
},
{
    Item: "揭阳市",
    Code: 445200,
    PCode: 44e4,
    Level: 1
},
{
    Item: "市辖区",
    Code: 445201,
    PCode: 445200,
    Level: 2
},
{
    Item: "榕城区",
    Code: 445202,
    PCode: 445200,
    Level: 2
},
{
    Item: "揭东区",
    Code: 445203,
    PCode: 445200,
    Level: 2
},
{
    Item: "揭西县",
    Code: 445222,
    PCode: 445200,
    Level: 2
},
{
    Item: "惠来县",
    Code: 445224,
    PCode: 445200,
    Level: 2
},
{
    Item: "普宁市",
    Code: 445281,
    PCode: 445200,
    Level: 2
},
{
    Item: "云浮市",
    Code: 445300,
    PCode: 44e4,
    Level: 1
},
{
    Item: "市辖区",
    Code: 445301,
    PCode: 445300,
    Level: 2
},
{
    Item: "云城区",
    Code: 445302,
    PCode: 445300,
    Level: 2
},
{
    Item: "云安区",
    Code: 445303,
    PCode: 445300,
    Level: 2
},
{
    Item: "新兴县",
    Code: 445321,
    PCode: 445300,
    Level: 2
},
{
    Item: "郁南县",
    Code: 445322,
    PCode: 445300,
    Level: 2
},
{
    Item: "罗定市",
    Code: 445381,
    PCode: 445300,
    Level: 2
},
{
    Item: "广西壮族自治区",
    Code: 45e4,
    PCode: 0,
    Level: 0
},
{
    Item: "南宁市",
    Code: 450100,
    PCode: 45e4,
    Level: 1
},
{
    Item: "市辖区",
    Code: 450101,
    PCode: 450100,
    Level: 2
},
{
    Item: "兴宁区",
    Code: 450102,
    PCode: 450100,
    Level: 2
},
{
    Item: "青秀区",
    Code: 450103,
    PCode: 450100,
    Level: 2
},
{
    Item: "江南区",
    Code: 450105,
    PCode: 450100,
    Level: 2
},
{
    Item: "西乡塘区",
    Code: 450107,
    PCode: 450100,
    Level: 2
},
{
    Item: "良庆区",
    Code: 450108,
    PCode: 450100,
    Level: 2
},
{
    Item: "邕宁区",
    Code: 450109,
    PCode: 450100,
    Level: 2
},
{
    Item: "武鸣区",
    Code: 450110,
    PCode: 450100,
    Level: 2
},
{
    Item: "隆安县",
    Code: 450123,
    PCode: 450100,
    Level: 2
},
{
    Item: "马山县",
    Code: 450124,
    PCode: 450100,
    Level: 2
},
{
    Item: "上林县",
    Code: 450125,
    PCode: 450100,
    Level: 2
},
{
    Item: "宾阳县",
    Code: 450126,
    PCode: 450100,
    Level: 2
},
{
    Item: "横县",
    Code: 450127,
    PCode: 450100,
    Level: 2
},
{
    Item: "柳州市",
    Code: 450200,
    PCode: 45e4,
    Level: 1
},
{
    Item: "市辖区",
    Code: 450201,
    PCode: 450200,
    Level: 2
},
{
    Item: "城中区",
    Code: 450202,
    PCode: 450200,
    Level: 2
},
{
    Item: "鱼峰区",
    Code: 450203,
    PCode: 450200,
    Level: 2
},
{
    Item: "柳南区",
    Code: 450204,
    PCode: 450200,
    Level: 2
},
{
    Item: "柳北区",
    Code: 450205,
    PCode: 450200,
    Level: 2
},
{
    Item: "柳江县",
    Code: 450221,
    PCode: 450200,
    Level: 2
},
{
    Item: "柳城县",
    Code: 450222,
    PCode: 450200,
    Level: 2
},
{
    Item: "鹿寨县",
    Code: 450223,
    PCode: 450200,
    Level: 2
},
{
    Item: "融安县",
    Code: 450224,
    PCode: 450200,
    Level: 2
},
{
    Item: "融水苗族自治县",
    Code: 450225,
    PCode: 450200,
    Level: 2
},
{
    Item: "三江侗族自治县",
    Code: 450226,
    PCode: 450200,
    Level: 2
},
{
    Item: "桂林市",
    Code: 450300,
    PCode: 45e4,
    Level: 1
},
{
    Item: "市辖区",
    Code: 450301,
    PCode: 450300,
    Level: 2
},
{
    Item: "秀峰区",
    Code: 450302,
    PCode: 450300,
    Level: 2
},
{
    Item: "叠彩区",
    Code: 450303,
    PCode: 450300,
    Level: 2
},
{
    Item: "象山区",
    Code: 450304,
    PCode: 450300,
    Level: 2
},
{
    Item: "七星区",
    Code: 450305,
    PCode: 450300,
    Level: 2
},
{
    Item: "雁山区",
    Code: 450311,
    PCode: 450300,
    Level: 2
},
{
    Item: "临桂区",
    Code: 450312,
    PCode: 450300,
    Level: 2
},
{
    Item: "阳朔县",
    Code: 450321,
    PCode: 450300,
    Level: 2
},
{
    Item: "灵川县",
    Code: 450323,
    PCode: 450300,
    Level: 2
},
{
    Item: "全州县",
    Code: 450324,
    PCode: 450300,
    Level: 2
},
{
    Item: "兴安县",
    Code: 450325,
    PCode: 450300,
    Level: 2
},
{
    Item: "永福县",
    Code: 450326,
    PCode: 450300,
    Level: 2
},
{
    Item: "灌阳县",
    Code: 450327,
    PCode: 450300,
    Level: 2
},
{
    Item: "龙胜各族自治县",
    Code: 450328,
    PCode: 450300,
    Level: 2
},
{
    Item: "资源县",
    Code: 450329,
    PCode: 450300,
    Level: 2
},
{
    Item: "平乐县",
    Code: 450330,
    PCode: 450300,
    Level: 2
},
{
    Item: "荔浦县",
    Code: 450331,
    PCode: 450300,
    Level: 2
},
{
    Item: "恭城瑶族自治县",
    Code: 450332,
    PCode: 450300,
    Level: 2
},
{
    Item: "梧州市",
    Code: 450400,
    PCode: 45e4,
    Level: 1
},
{
    Item: "市辖区",
    Code: 450401,
    PCode: 450400,
    Level: 2
},
{
    Item: "万秀区",
    Code: 450403,
    PCode: 450400,
    Level: 2
},
{
    Item: "长洲区",
    Code: 450405,
    PCode: 450400,
    Level: 2
},
{
    Item: "龙圩区",
    Code: 450406,
    PCode: 450400,
    Level: 2
},
{
    Item: "苍梧县",
    Code: 450421,
    PCode: 450400,
    Level: 2
},
{
    Item: "藤县",
    Code: 450422,
    PCode: 450400,
    Level: 2
},
{
    Item: "蒙山县",
    Code: 450423,
    PCode: 450400,
    Level: 2
},
{
    Item: "岑溪市",
    Code: 450481,
    PCode: 450400,
    Level: 2
},
{
    Item: "北海市",
    Code: 450500,
    PCode: 45e4,
    Level: 1
},
{
    Item: "市辖区",
    Code: 450501,
    PCode: 450500,
    Level: 2
},
{
    Item: "海城区",
    Code: 450502,
    PCode: 450500,
    Level: 2
},
{
    Item: "银海区",
    Code: 450503,
    PCode: 450500,
    Level: 2
},
{
    Item: "铁山港区",
    Code: 450512,
    PCode: 450500,
    Level: 2
},
{
    Item: "合浦县",
    Code: 450521,
    PCode: 450500,
    Level: 2
},
{
    Item: "防城港市",
    Code: 450600,
    PCode: 45e4,
    Level: 1
},
{
    Item: "市辖区",
    Code: 450601,
    PCode: 450600,
    Level: 2
},
{
    Item: "港口区",
    Code: 450602,
    PCode: 450600,
    Level: 2
},
{
    Item: "防城区",
    Code: 450603,
    PCode: 450600,
    Level: 2
},
{
    Item: "上思县",
    Code: 450621,
    PCode: 450600,
    Level: 2
},
{
    Item: "东兴市",
    Code: 450681,
    PCode: 450600,
    Level: 2
},
{
    Item: "钦州市",
    Code: 450700,
    PCode: 45e4,
    Level: 1
},
{
    Item: "市辖区",
    Code: 450701,
    PCode: 450700,
    Level: 2
},
{
    Item: "钦南区",
    Code: 450702,
    PCode: 450700,
    Level: 2
},
{
    Item: "钦北区",
    Code: 450703,
    PCode: 450700,
    Level: 2
},
{
    Item: "灵山县",
    Code: 450721,
    PCode: 450700,
    Level: 2
},
{
    Item: "浦北县",
    Code: 450722,
    PCode: 450700,
    Level: 2
},
{
    Item: "贵港市",
    Code: 450800,
    PCode: 45e4,
    Level: 1
},
{
    Item: "市辖区",
    Code: 450801,
    PCode: 450800,
    Level: 2
},
{
    Item: "港北区",
    Code: 450802,
    PCode: 450800,
    Level: 2
},
{
    Item: "港南区",
    Code: 450803,
    PCode: 450800,
    Level: 2
},
{
    Item: "覃塘区",
    Code: 450804,
    PCode: 450800,
    Level: 2
},
{
    Item: "平南县",
    Code: 450821,
    PCode: 450800,
    Level: 2
},
{
    Item: "桂平市",
    Code: 450881,
    PCode: 450800,
    Level: 2
},
{
    Item: "玉林市",
    Code: 450900,
    PCode: 45e4,
    Level: 1
},
{
    Item: "市辖区",
    Code: 450901,
    PCode: 450900,
    Level: 2
},
{
    Item: "玉州区",
    Code: 450902,
    PCode: 450900,
    Level: 2
},
{
    Item: "福绵区",
    Code: 450903,
    PCode: 450900,
    Level: 2
},
{
    Item: "容县",
    Code: 450921,
    PCode: 450900,
    Level: 2
},
{
    Item: "陆川县",
    Code: 450922,
    PCode: 450900,
    Level: 2
},
{
    Item: "博白县",
    Code: 450923,
    PCode: 450900,
    Level: 2
},
{
    Item: "兴业县",
    Code: 450924,
    PCode: 450900,
    Level: 2
},
{
    Item: "北流市",
    Code: 450981,
    PCode: 450900,
    Level: 2
},
{
    Item: "百色市",
    Code: 451e3,
    PCode: 45e4,
    Level: 1
},
{
    Item: "市辖区",
    Code: 451001,
    PCode: 451e3,
    Level: 2
},
{
    Item: "右江区",
    Code: 451002,
    PCode: 451e3,
    Level: 2
},
{
    Item: "田阳县",
    Code: 451021,
    PCode: 451e3,
    Level: 2
},
{
    Item: "田东县",
    Code: 451022,
    PCode: 451e3,
    Level: 2
},
{
    Item: "平果县",
    Code: 451023,
    PCode: 451e3,
    Level: 2
},
{
    Item: "德保县",
    Code: 451024,
    PCode: 451e3,
    Level: 2
},
{
    Item: "那坡县",
    Code: 451026,
    PCode: 451e3,
    Level: 2
},
{
    Item: "凌云县",
    Code: 451027,
    PCode: 451e3,
    Level: 2
},
{
    Item: "乐业县",
    Code: 451028,
    PCode: 451e3,
    Level: 2
},
{
    Item: "田林县",
    Code: 451029,
    PCode: 451e3,
    Level: 2
},
{
    Item: "西林县",
    Code: 451030,
    PCode: 451e3,
    Level: 2
},
{
    Item: "隆林各族自治县",
    Code: 451031,
    PCode: 451e3,
    Level: 2
},
{
    Item: "靖西市",
    Code: 451081,
    PCode: 451e3,
    Level: 2
},
{
    Item: "贺州市",
    Code: 451100,
    PCode: 45e4,
    Level: 1
},
{
    Item: "市辖区",
    Code: 451101,
    PCode: 451100,
    Level: 2
},
{
    Item: "八步区",
    Code: 451102,
    PCode: 451100,
    Level: 2
},
{
    Item: "昭平县",
    Code: 451121,
    PCode: 451100,
    Level: 2
},
{
    Item: "钟山县",
    Code: 451122,
    PCode: 451100,
    Level: 2
},
{
    Item: "富川瑶族自治县",
    Code: 451123,
    PCode: 451100,
    Level: 2
},
{
    Item: "河池市",
    Code: 451200,
    PCode: 45e4,
    Level: 1
},
{
    Item: "市辖区",
    Code: 451201,
    PCode: 451200,
    Level: 2
},
{
    Item: "金城江区",
    Code: 451202,
    PCode: 451200,
    Level: 2
},
{
    Item: "南丹县",
    Code: 451221,
    PCode: 451200,
    Level: 2
},
{
    Item: "天峨县",
    Code: 451222,
    PCode: 451200,
    Level: 2
},
{
    Item: "凤山县",
    Code: 451223,
    PCode: 451200,
    Level: 2
},
{
    Item: "东兰县",
    Code: 451224,
    PCode: 451200,
    Level: 2
},
{
    Item: "罗城仫佬族自治县",
    Code: 451225,
    PCode: 451200,
    Level: 2
},
{
    Item: "环江毛南族自治县",
    Code: 451226,
    PCode: 451200,
    Level: 2
},
{
    Item: "巴马瑶族自治县",
    Code: 451227,
    PCode: 451200,
    Level: 2
},
{
    Item: "都安瑶族自治县",
    Code: 451228,
    PCode: 451200,
    Level: 2
},
{
    Item: "大化瑶族自治县",
    Code: 451229,
    PCode: 451200,
    Level: 2
},
{
    Item: "宜州市",
    Code: 451281,
    PCode: 451200,
    Level: 2
},
{
    Item: "来宾市",
    Code: 451300,
    PCode: 45e4,
    Level: 1
},
{
    Item: "市辖区",
    Code: 451301,
    PCode: 451300,
    Level: 2
},
{
    Item: "兴宾区",
    Code: 451302,
    PCode: 451300,
    Level: 2
},
{
    Item: "忻城县",
    Code: 451321,
    PCode: 451300,
    Level: 2
},
{
    Item: "象州县",
    Code: 451322,
    PCode: 451300,
    Level: 2
},
{
    Item: "武宣县",
    Code: 451323,
    PCode: 451300,
    Level: 2
},
{
    Item: "金秀瑶族自治县",
    Code: 451324,
    PCode: 451300,
    Level: 2
},
{
    Item: "合山市",
    Code: 451381,
    PCode: 451300,
    Level: 2
},
{
    Item: "崇左市",
    Code: 451400,
    PCode: 45e4,
    Level: 1
},
{
    Item: "市辖区",
    Code: 451401,
    PCode: 451400,
    Level: 2
},
{
    Item: "江州区",
    Code: 451402,
    PCode: 451400,
    Level: 2
},
{
    Item: "扶绥县",
    Code: 451421,
    PCode: 451400,
    Level: 2
},
{
    Item: "宁明县",
    Code: 451422,
    PCode: 451400,
    Level: 2
},
{
    Item: "龙州县",
    Code: 451423,
    PCode: 451400,
    Level: 2
},
{
    Item: "大新县",
    Code: 451424,
    PCode: 451400,
    Level: 2
},
{
    Item: "天等县",
    Code: 451425,
    PCode: 451400,
    Level: 2
},
{
    Item: "凭祥市",
    Code: 451481,
    PCode: 451400,
    Level: 2
},
{
    Item: "海南省",
    Code: 46e4,
    PCode: 0,
    Level: 0
},
{
    Item: "海口市",
    Code: 460100,
    PCode: 46e4,
    Level: 1
},
{
    Item: "市辖区",
    Code: 460101,
    PCode: 460100,
    Level: 2
},
{
    Item: "秀英区",
    Code: 460105,
    PCode: 460100,
    Level: 2
},
{
    Item: "龙华区",
    Code: 460106,
    PCode: 460100,
    Level: 2
},
{
    Item: "琼山区",
    Code: 460107,
    PCode: 460100,
    Level: 2
},
{
    Item: "美兰区",
    Code: 460108,
    PCode: 460100,
    Level: 2
},
{
    Item: "三亚市",
    Code: 460200,
    PCode: 46e4,
    Level: 1
},
{
    Item: "市辖区",
    Code: 460201,
    PCode: 460200,
    Level: 2
},
{
    Item: "海棠区",
    Code: 460202,
    PCode: 460200,
    Level: 2
},
{
    Item: "吉阳区",
    Code: 460203,
    PCode: 460200,
    Level: 2
},
{
    Item: "天涯区",
    Code: 460204,
    PCode: 460200,
    Level: 2
},
{
    Item: "崖州区",
    Code: 460205,
    PCode: 460200,
    Level: 2
},
{
    Item: "三沙市",
    Code: 460300,
    PCode: 46e4,
    Level: 1
},
{
    Item: "西沙群岛",
    Code: 460321,
    PCode: 460300,
    Level: 2
},
{
    Item: "南沙群岛",
    Code: 460322,
    PCode: 460300,
    Level: 2
},
{
    Item: "中沙群岛的岛礁及其海域",
    Code: 460323,
    PCode: 460300,
    Level: 2
},
{
    Item: "省直辖县级行政区划",
    Code: 469e3,
    PCode: 46e4,
    Level: 1
},
{
    Item: "五指山市",
    Code: 469001,
    PCode: 469e3,
    Level: 2
},
{
    Item: "琼海市",
    Code: 469002,
    PCode: 469e3,
    Level: 2
},
{
    Item: "儋州市",
    Code: 469003,
    PCode: 469e3,
    Level: 2
},
{
    Item: "文昌市",
    Code: 469005,
    PCode: 469e3,
    Level: 2
},
{
    Item: "万宁市",
    Code: 469006,
    PCode: 469e3,
    Level: 2
},
{
    Item: "东方市",
    Code: 469007,
    PCode: 469e3,
    Level: 2
},
{
    Item: "定安县",
    Code: 469021,
    PCode: 469e3,
    Level: 2
},
{
    Item: "屯昌县",
    Code: 469022,
    PCode: 469e3,
    Level: 2
},
{
    Item: "澄迈县",
    Code: 469023,
    PCode: 469e3,
    Level: 2
},
{
    Item: "临高县",
    Code: 469024,
    PCode: 469e3,
    Level: 2
},
{
    Item: "白沙黎族自治县",
    Code: 469025,
    PCode: 469e3,
    Level: 2
},
{
    Item: "昌江黎族自治县",
    Code: 469026,
    PCode: 469e3,
    Level: 2
},
{
    Item: "乐东黎族自治县",
    Code: 469027,
    PCode: 469e3,
    Level: 2
},
{
    Item: "陵水黎族自治县",
    Code: 469028,
    PCode: 469e3,
    Level: 2
},
{
    Item: "保亭黎族苗族自治县",
    Code: 469029,
    PCode: 469e3,
    Level: 2
},
{
    Item: "琼中黎族苗族自治县",
    Code: 469030,
    PCode: 469e3,
    Level: 2
},
{
    Item: "重庆市",
    Code: 5e5,
    PCode: 0,
    Level: 0
},
{
    Item: "重庆市",
    Code: 500100,
    PCode: 5e5,
    Level: 1
},
{
    Item: "万州区",
    Code: 500101,
    PCode: 500100,
    Level: 2
},
{
    Item: "涪陵区",
    Code: 500102,
    PCode: 500100,
    Level: 2
},
{
    Item: "渝中区",
    Code: 500103,
    PCode: 500100,
    Level: 2
},
{
    Item: "大渡口区",
    Code: 500104,
    PCode: 500100,
    Level: 2
},
{
    Item: "江北区",
    Code: 500105,
    PCode: 500100,
    Level: 2
},
{
    Item: "沙坪坝区",
    Code: 500106,
    PCode: 500100,
    Level: 2
},
{
    Item: "九龙坡区",
    Code: 500107,
    PCode: 500100,
    Level: 2
},
{
    Item: "南岸区",
    Code: 500108,
    PCode: 500100,
    Level: 2
},
{
    Item: "北碚区",
    Code: 500109,
    PCode: 500100,
    Level: 2
},
{
    Item: "綦江区",
    Code: 500110,
    PCode: 500100,
    Level: 2
},
{
    Item: "大足区",
    Code: 500111,
    PCode: 500100,
    Level: 2
},
{
    Item: "渝北区",
    Code: 500112,
    PCode: 500100,
    Level: 2
},
{
    Item: "巴南区",
    Code: 500113,
    PCode: 500100,
    Level: 2
},
{
    Item: "黔江区",
    Code: 500114,
    PCode: 500100,
    Level: 2
},
{
    Item: "长寿区",
    Code: 500115,
    PCode: 500100,
    Level: 2
},
{
    Item: "江津区",
    Code: 500116,
    PCode: 500100,
    Level: 2
},
{
    Item: "合川区",
    Code: 500117,
    PCode: 500100,
    Level: 2
},
{
    Item: "永川区",
    Code: 500118,
    PCode: 500100,
    Level: 2
},
{
    Item: "南川区",
    Code: 500119,
    PCode: 500100,
    Level: 2
},
{
    Item: "璧山区",
    Code: 500120,
    PCode: 500100,
    Level: 2
},
{
    Item: "铜梁区",
    Code: 500151,
    PCode: 500100,
    Level: 2
},
{
    Item: "潼南区",
    Code: 500152,
    PCode: 500100,
    Level: 2
},
{
    Item: "荣昌区",
    Code: 500153,
    PCode: 500100,
    Level: 2
},
{
    Item: "梁平县",
    Code: 500228,
    PCode: 500100,
    Level: 2
},
{
    Item: "城口县",
    Code: 500229,
    PCode: 500100,
    Level: 2
},
{
    Item: "丰都县",
    Code: 500230,
    PCode: 500100,
    Level: 2
},
{
    Item: "垫江县",
    Code: 500231,
    PCode: 500100,
    Level: 2
},
{
    Item: "武隆县",
    Code: 500232,
    PCode: 500100,
    Level: 2
},
{
    Item: "忠县",
    Code: 500233,
    PCode: 500100,
    Level: 2
},
{
    Item: "开县",
    Code: 500234,
    PCode: 500100,
    Level: 2
},
{
    Item: "云阳县",
    Code: 500235,
    PCode: 500100,
    Level: 2
},
{
    Item: "奉节县",
    Code: 500236,
    PCode: 500100,
    Level: 2
},
{
    Item: "巫山县",
    Code: 500237,
    PCode: 500100,
    Level: 2
},
{
    Item: "巫溪县",
    Code: 500238,
    PCode: 500100,
    Level: 2
},
{
    Item: "石柱土家族自治县",
    Code: 500240,
    PCode: 500100,
    Level: 2
},
{
    Item: "秀山土家族苗族自治县",
    Code: 500241,
    PCode: 500100,
    Level: 2
},
{
    Item: "酉阳土家族苗族自治县",
    Code: 500242,
    PCode: 500100,
    Level: 2
},
{
    Item: "彭水苗族土家族自治县",
    Code: 500243,
    PCode: 500100,
    Level: 2
},
{
    Item: "四川省",
    Code: 51e4,
    PCode: 0,
    Level: 0
},
{
    Item: "成都市",
    Code: 510100,
    PCode: 51e4,
    Level: 1
},
{
    Item: "市辖区",
    Code: 510101,
    PCode: 510100,
    Level: 2
},
{
    Item: "锦江区",
    Code: 510104,
    PCode: 510100,
    Level: 2
},
{
    Item: "青羊区",
    Code: 510105,
    PCode: 510100,
    Level: 2
},
{
    Item: "金牛区",
    Code: 510106,
    PCode: 510100,
    Level: 2
},
{
    Item: "武侯区",
    Code: 510107,
    PCode: 510100,
    Level: 2
},
{
    Item: "成华区",
    Code: 510108,
    PCode: 510100,
    Level: 2
},
{
    Item: "龙泉驿区",
    Code: 510112,
    PCode: 510100,
    Level: 2
},
{
    Item: "青白江区",
    Code: 510113,
    PCode: 510100,
    Level: 2
},
{
    Item: "新都区",
    Code: 510114,
    PCode: 510100,
    Level: 2
},
{
    Item: "温江区",
    Code: 510115,
    PCode: 510100,
    Level: 2
},
{
    Item: "金堂县",
    Code: 510121,
    PCode: 510100,
    Level: 2
},
{
    Item: "双流县",
    Code: 510122,
    PCode: 510100,
    Level: 2
},
{
    Item: "郫县",
    Code: 510124,
    PCode: 510100,
    Level: 2
},
{
    Item: "大邑县",
    Code: 510129,
    PCode: 510100,
    Level: 2
},
{
    Item: "蒲江县",
    Code: 510131,
    PCode: 510100,
    Level: 2
},
{
    Item: "新津县",
    Code: 510132,
    PCode: 510100,
    Level: 2
},
{
    Item: "都江堰市",
    Code: 510181,
    PCode: 510100,
    Level: 2
},
{
    Item: "彭州市",
    Code: 510182,
    PCode: 510100,
    Level: 2
},
{
    Item: "邛崃市",
    Code: 510183,
    PCode: 510100,
    Level: 2
},
{
    Item: "崇州市",
    Code: 510184,
    PCode: 510100,
    Level: 2
},
{
    Item: "自贡市",
    Code: 510300,
    PCode: 51e4,
    Level: 1
},
{
    Item: "市辖区",
    Code: 510301,
    PCode: 510300,
    Level: 2
},
{
    Item: "自流井区",
    Code: 510302,
    PCode: 510300,
    Level: 2
},
{
    Item: "贡井区",
    Code: 510303,
    PCode: 510300,
    Level: 2
},
{
    Item: "大安区",
    Code: 510304,
    PCode: 510300,
    Level: 2
},
{
    Item: "沿滩区",
    Code: 510311,
    PCode: 510300,
    Level: 2
},
{
    Item: "荣县",
    Code: 510321,
    PCode: 510300,
    Level: 2
},
{
    Item: "富顺县",
    Code: 510322,
    PCode: 510300,
    Level: 2
},
{
    Item: "攀枝花市",
    Code: 510400,
    PCode: 51e4,
    Level: 1
},
{
    Item: "市辖区",
    Code: 510401,
    PCode: 510400,
    Level: 2
},
{
    Item: "东区",
    Code: 510402,
    PCode: 510400,
    Level: 2
},
{
    Item: "西区",
    Code: 510403,
    PCode: 510400,
    Level: 2
},
{
    Item: "仁和区",
    Code: 510411,
    PCode: 510400,
    Level: 2
},
{
    Item: "米易县",
    Code: 510421,
    PCode: 510400,
    Level: 2
},
{
    Item: "盐边县",
    Code: 510422,
    PCode: 510400,
    Level: 2
},
{
    Item: "泸州市",
    Code: 510500,
    PCode: 51e4,
    Level: 1
},
{
    Item: "市辖区",
    Code: 510501,
    PCode: 510500,
    Level: 2
},
{
    Item: "江阳区",
    Code: 510502,
    PCode: 510500,
    Level: 2
},
{
    Item: "纳溪区",
    Code: 510503,
    PCode: 510500,
    Level: 2
},
{
    Item: "龙马潭区",
    Code: 510504,
    PCode: 510500,
    Level: 2
},
{
    Item: "泸县",
    Code: 510521,
    PCode: 510500,
    Level: 2
},
{
    Item: "合江县",
    Code: 510522,
    PCode: 510500,
    Level: 2
},
{
    Item: "叙永县",
    Code: 510524,
    PCode: 510500,
    Level: 2
},
{
    Item: "古蔺县",
    Code: 510525,
    PCode: 510500,
    Level: 2
},
{
    Item: "德阳市",
    Code: 510600,
    PCode: 51e4,
    Level: 1
},
{
    Item: "市辖区",
    Code: 510601,
    PCode: 510600,
    Level: 2
},
{
    Item: "旌阳区",
    Code: 510603,
    PCode: 510600,
    Level: 2
},
{
    Item: "中江县",
    Code: 510623,
    PCode: 510600,
    Level: 2
},
{
    Item: "罗江县",
    Code: 510626,
    PCode: 510600,
    Level: 2
},
{
    Item: "广汉市",
    Code: 510681,
    PCode: 510600,
    Level: 2
},
{
    Item: "什邡市",
    Code: 510682,
    PCode: 510600,
    Level: 2
},
{
    Item: "绵竹市",
    Code: 510683,
    PCode: 510600,
    Level: 2
},
{
    Item: "绵阳市",
    Code: 510700,
    PCode: 51e4,
    Level: 1
},
{
    Item: "市辖区",
    Code: 510701,
    PCode: 510700,
    Level: 2
},
{
    Item: "涪城区",
    Code: 510703,
    PCode: 510700,
    Level: 2
},
{
    Item: "游仙区",
    Code: 510704,
    PCode: 510700,
    Level: 2
},
{
    Item: "三台县",
    Code: 510722,
    PCode: 510700,
    Level: 2
},
{
    Item: "盐亭县",
    Code: 510723,
    PCode: 510700,
    Level: 2
},
{
    Item: "安县",
    Code: 510724,
    PCode: 510700,
    Level: 2
},
{
    Item: "梓潼县",
    Code: 510725,
    PCode: 510700,
    Level: 2
},
{
    Item: "北川羌族自治县",
    Code: 510726,
    PCode: 510700,
    Level: 2
},
{
    Item: "平武县",
    Code: 510727,
    PCode: 510700,
    Level: 2
},
{
    Item: "江油市",
    Code: 510781,
    PCode: 510700,
    Level: 2
},
{
    Item: "广元市",
    Code: 510800,
    PCode: 51e4,
    Level: 1
},
{
    Item: "市辖区",
    Code: 510801,
    PCode: 510800,
    Level: 2
},
{
    Item: "利州区",
    Code: 510802,
    PCode: 510800,
    Level: 2
},
{
    Item: "昭化区",
    Code: 510811,
    PCode: 510800,
    Level: 2
},
{
    Item: "朝天区",
    Code: 510812,
    PCode: 510800,
    Level: 2
},
{
    Item: "旺苍县",
    Code: 510821,
    PCode: 510800,
    Level: 2
},
{
    Item: "青川县",
    Code: 510822,
    PCode: 510800,
    Level: 2
},
{
    Item: "剑阁县",
    Code: 510823,
    PCode: 510800,
    Level: 2
},
{
    Item: "苍溪县",
    Code: 510824,
    PCode: 510800,
    Level: 2
},
{
    Item: "遂宁市",
    Code: 510900,
    PCode: 51e4,
    Level: 1
},
{
    Item: "市辖区",
    Code: 510901,
    PCode: 510900,
    Level: 2
},
{
    Item: "船山区",
    Code: 510903,
    PCode: 510900,
    Level: 2
},
{
    Item: "安居区",
    Code: 510904,
    PCode: 510900,
    Level: 2
},
{
    Item: "蓬溪县",
    Code: 510921,
    PCode: 510900,
    Level: 2
},
{
    Item: "射洪县",
    Code: 510922,
    PCode: 510900,
    Level: 2
},
{
    Item: "大英县",
    Code: 510923,
    PCode: 510900,
    Level: 2
},
{
    Item: "内江市",
    Code: 511e3,
    PCode: 51e4,
    Level: 1
},
{
    Item: "市辖区",
    Code: 511001,
    PCode: 511e3,
    Level: 2
},
{
    Item: "市中区",
    Code: 511002,
    PCode: 511e3,
    Level: 2
},
{
    Item: "东兴区",
    Code: 511011,
    PCode: 511e3,
    Level: 2
},
{
    Item: "威远县",
    Code: 511024,
    PCode: 511e3,
    Level: 2
},
{
    Item: "资中县",
    Code: 511025,
    PCode: 511e3,
    Level: 2
},
{
    Item: "隆昌县",
    Code: 511028,
    PCode: 511e3,
    Level: 2
},
{
    Item: "乐山市",
    Code: 511100,
    PCode: 51e4,
    Level: 1
},
{
    Item: "市辖区",
    Code: 511101,
    PCode: 511100,
    Level: 2
},
{
    Item: "市中区",
    Code: 511102,
    PCode: 511100,
    Level: 2
},
{
    Item: "沙湾区",
    Code: 511111,
    PCode: 511100,
    Level: 2
},
{
    Item: "五通桥区",
    Code: 511112,
    PCode: 511100,
    Level: 2
},
{
    Item: "金口河区",
    Code: 511113,
    PCode: 511100,
    Level: 2
},
{
    Item: "犍为县",
    Code: 511123,
    PCode: 511100,
    Level: 2
},
{
    Item: "井研县",
    Code: 511124,
    PCode: 511100,
    Level: 2
},
{
    Item: "夹江县",
    Code: 511126,
    PCode: 511100,
    Level: 2
},
{
    Item: "沐川县",
    Code: 511129,
    PCode: 511100,
    Level: 2
},
{
    Item: "峨边彝族自治县",
    Code: 511132,
    PCode: 511100,
    Level: 2
},
{
    Item: "马边彝族自治县",
    Code: 511133,
    PCode: 511100,
    Level: 2
},
{
    Item: "峨眉山市",
    Code: 511181,
    PCode: 511100,
    Level: 2
},
{
    Item: "南充市",
    Code: 511300,
    PCode: 51e4,
    Level: 1
},
{
    Item: "市辖区",
    Code: 511301,
    PCode: 511300,
    Level: 2
},
{
    Item: "顺庆区",
    Code: 511302,
    PCode: 511300,
    Level: 2
},
{
    Item: "高坪区",
    Code: 511303,
    PCode: 511300,
    Level: 2
},
{
    Item: "嘉陵区",
    Code: 511304,
    PCode: 511300,
    Level: 2
},
{
    Item: "南部县",
    Code: 511321,
    PCode: 511300,
    Level: 2
},
{
    Item: "营山县",
    Code: 511322,
    PCode: 511300,
    Level: 2
},
{
    Item: "蓬安县",
    Code: 511323,
    PCode: 511300,
    Level: 2
},
{
    Item: "仪陇县",
    Code: 511324,
    PCode: 511300,
    Level: 2
},
{
    Item: "西充县",
    Code: 511325,
    PCode: 511300,
    Level: 2
},
{
    Item: "阆中市",
    Code: 511381,
    PCode: 511300,
    Level: 2
},
{
    Item: "眉山市",
    Code: 511400,
    PCode: 51e4,
    Level: 1
},
{
    Item: "市辖区",
    Code: 511401,
    PCode: 511400,
    Level: 2
},
{
    Item: "东坡区",
    Code: 511402,
    PCode: 511400,
    Level: 2
},
{
    Item: "彭山区",
    Code: 511403,
    PCode: 511400,
    Level: 2
},
{
    Item: "仁寿县",
    Code: 511421,
    PCode: 511400,
    Level: 2
},
{
    Item: "洪雅县",
    Code: 511423,
    PCode: 511400,
    Level: 2
},
{
    Item: "丹棱县",
    Code: 511424,
    PCode: 511400,
    Level: 2
},
{
    Item: "青神县",
    Code: 511425,
    PCode: 511400,
    Level: 2
},
{
    Item: "宜宾市",
    Code: 511500,
    PCode: 51e4,
    Level: 1
},
{
    Item: "市辖区",
    Code: 511501,
    PCode: 511500,
    Level: 2
},
{
    Item: "翠屏区",
    Code: 511502,
    PCode: 511500,
    Level: 2
},
{
    Item: "南溪区",
    Code: 511503,
    PCode: 511500,
    Level: 2
},
{
    Item: "宜宾县",
    Code: 511521,
    PCode: 511500,
    Level: 2
},
{
    Item: "江安县",
    Code: 511523,
    PCode: 511500,
    Level: 2
},
{
    Item: "长宁县",
    Code: 511524,
    PCode: 511500,
    Level: 2
},
{
    Item: "高县",
    Code: 511525,
    PCode: 511500,
    Level: 2
},
{
    Item: "珙县",
    Code: 511526,
    PCode: 511500,
    Level: 2
},
{
    Item: "筠连县",
    Code: 511527,
    PCode: 511500,
    Level: 2
},
{
    Item: "兴文县",
    Code: 511528,
    PCode: 511500,
    Level: 2
},
{
    Item: "屏山县",
    Code: 511529,
    PCode: 511500,
    Level: 2
},
{
    Item: "广安市",
    Code: 511600,
    PCode: 51e4,
    Level: 1
},
{
    Item: "市辖区",
    Code: 511601,
    PCode: 511600,
    Level: 2
},
{
    Item: "广安区",
    Code: 511602,
    PCode: 511600,
    Level: 2
},
{
    Item: "前锋区",
    Code: 511603,
    PCode: 511600,
    Level: 2
},
{
    Item: "岳池县",
    Code: 511621,
    PCode: 511600,
    Level: 2
},
{
    Item: "武胜县",
    Code: 511622,
    PCode: 511600,
    Level: 2
},
{
    Item: "邻水县",
    Code: 511623,
    PCode: 511600,
    Level: 2
},
{
    Item: "华蓥市",
    Code: 511681,
    PCode: 511600,
    Level: 2
},
{
    Item: "达州市",
    Code: 511700,
    PCode: 51e4,
    Level: 1
},
{
    Item: "市辖区",
    Code: 511701,
    PCode: 511700,
    Level: 2
},
{
    Item: "通川区",
    Code: 511702,
    PCode: 511700,
    Level: 2
},
{
    Item: "达川区",
    Code: 511703,
    PCode: 511700,
    Level: 2
},
{
    Item: "宣汉县",
    Code: 511722,
    PCode: 511700,
    Level: 2
},
{
    Item: "开江县",
    Code: 511723,
    PCode: 511700,
    Level: 2
},
{
    Item: "大竹县",
    Code: 511724,
    PCode: 511700,
    Level: 2
},
{
    Item: "渠县",
    Code: 511725,
    PCode: 511700,
    Level: 2
},
{
    Item: "万源市",
    Code: 511781,
    PCode: 511700,
    Level: 2
},
{
    Item: "雅安市",
    Code: 511800,
    PCode: 51e4,
    Level: 1
},
{
    Item: "市辖区",
    Code: 511801,
    PCode: 511800,
    Level: 2
},
{
    Item: "雨城区",
    Code: 511802,
    PCode: 511800,
    Level: 2
},
{
    Item: "名山区",
    Code: 511803,
    PCode: 511800,
    Level: 2
},
{
    Item: "荥经县",
    Code: 511822,
    PCode: 511800,
    Level: 2
},
{
    Item: "汉源县",
    Code: 511823,
    PCode: 511800,
    Level: 2
},
{
    Item: "石棉县",
    Code: 511824,
    PCode: 511800,
    Level: 2
},
{
    Item: "天全县",
    Code: 511825,
    PCode: 511800,
    Level: 2
},
{
    Item: "芦山县",
    Code: 511826,
    PCode: 511800,
    Level: 2
},
{
    Item: "宝兴县",
    Code: 511827,
    PCode: 511800,
    Level: 2
},
{
    Item: "巴中市",
    Code: 511900,
    PCode: 51e4,
    Level: 1
},
{
    Item: "市辖区",
    Code: 511901,
    PCode: 511900,
    Level: 2
},
{
    Item: "巴州区",
    Code: 511902,
    PCode: 511900,
    Level: 2
},
{
    Item: "恩阳区",
    Code: 511903,
    PCode: 511900,
    Level: 2
},
{
    Item: "通江县",
    Code: 511921,
    PCode: 511900,
    Level: 2
},
{
    Item: "南江县",
    Code: 511922,
    PCode: 511900,
    Level: 2
},
{
    Item: "平昌县",
    Code: 511923,
    PCode: 511900,
    Level: 2
},
{
    Item: "资阳市",
    Code: 512e3,
    PCode: 51e4,
    Level: 1
},
{
    Item: "市辖区",
    Code: 512001,
    PCode: 512e3,
    Level: 2
},
{
    Item: "雁江区",
    Code: 512002,
    PCode: 512e3,
    Level: 2
},
{
    Item: "安岳县",
    Code: 512021,
    PCode: 512e3,
    Level: 2
},
{
    Item: "乐至县",
    Code: 512022,
    PCode: 512e3,
    Level: 2
},
{
    Item: "简阳市",
    Code: 512081,
    PCode: 512e3,
    Level: 2
},
{
    Item: "阿坝藏族羌族自治州",
    Code: 513200,
    PCode: 51e4,
    Level: 1
},
{
    Item: "汶川县",
    Code: 513221,
    PCode: 513200,
    Level: 2
},
{
    Item: "理县",
    Code: 513222,
    PCode: 513200,
    Level: 2
},
{
    Item: "茂县",
    Code: 513223,
    PCode: 513200,
    Level: 2
},
{
    Item: "松潘县",
    Code: 513224,
    PCode: 513200,
    Level: 2
},
{
    Item: "九寨沟县",
    Code: 513225,
    PCode: 513200,
    Level: 2
},
{
    Item: "金川县",
    Code: 513226,
    PCode: 513200,
    Level: 2
},
{
    Item: "小金县",
    Code: 513227,
    PCode: 513200,
    Level: 2
},
{
    Item: "黑水县",
    Code: 513228,
    PCode: 513200,
    Level: 2
},
{
    Item: "马尔康县",
    Code: 513229,
    PCode: 513200,
    Level: 2
},
{
    Item: "壤塘县",
    Code: 513230,
    PCode: 513200,
    Level: 2
},
{
    Item: "阿坝县",
    Code: 513231,
    PCode: 513200,
    Level: 2
},
{
    Item: "若尔盖县",
    Code: 513232,
    PCode: 513200,
    Level: 2
},
{
    Item: "红原县",
    Code: 513233,
    PCode: 513200,
    Level: 2
},
{
    Item: "甘孜藏族自治州",
    Code: 513300,
    PCode: 51e4,
    Level: 1
},
{
    Item: "康定市",
    Code: 513301,
    PCode: 513300,
    Level: 2
},
{
    Item: "泸定县",
    Code: 513322,
    PCode: 513300,
    Level: 2
},
{
    Item: "丹巴县",
    Code: 513323,
    PCode: 513300,
    Level: 2
},
{
    Item: "九龙县",
    Code: 513324,
    PCode: 513300,
    Level: 2
},
{
    Item: "雅江县",
    Code: 513325,
    PCode: 513300,
    Level: 2
},
{
    Item: "道孚县",
    Code: 513326,
    PCode: 513300,
    Level: 2
},
{
    Item: "炉霍县",
    Code: 513327,
    PCode: 513300,
    Level: 2
},
{
    Item: "甘孜县",
    Code: 513328,
    PCode: 513300,
    Level: 2
},
{
    Item: "新龙县",
    Code: 513329,
    PCode: 513300,
    Level: 2
},
{
    Item: "德格县",
    Code: 513330,
    PCode: 513300,
    Level: 2
},
{
    Item: "白玉县",
    Code: 513331,
    PCode: 513300,
    Level: 2
},
{
    Item: "石渠县",
    Code: 513332,
    PCode: 513300,
    Level: 2
},
{
    Item: "色达县",
    Code: 513333,
    PCode: 513300,
    Level: 2
},
{
    Item: "理塘县",
    Code: 513334,
    PCode: 513300,
    Level: 2
},
{
    Item: "巴塘县",
    Code: 513335,
    PCode: 513300,
    Level: 2
},
{
    Item: "乡城县",
    Code: 513336,
    PCode: 513300,
    Level: 2
},
{
    Item: "稻城县",
    Code: 513337,
    PCode: 513300,
    Level: 2
},
{
    Item: "得荣县",
    Code: 513338,
    PCode: 513300,
    Level: 2
},
{
    Item: "凉山彝族自治州",
    Code: 513400,
    PCode: 51e4,
    Level: 1
},
{
    Item: "西昌市",
    Code: 513401,
    PCode: 513400,
    Level: 2
},
{
    Item: "木里藏族自治县",
    Code: 513422,
    PCode: 513400,
    Level: 2
},
{
    Item: "盐源县",
    Code: 513423,
    PCode: 513400,
    Level: 2
},
{
    Item: "德昌县",
    Code: 513424,
    PCode: 513400,
    Level: 2
},
{
    Item: "会理县",
    Code: 513425,
    PCode: 513400,
    Level: 2
},
{
    Item: "会东县",
    Code: 513426,
    PCode: 513400,
    Level: 2
},
{
    Item: "宁南县",
    Code: 513427,
    PCode: 513400,
    Level: 2
},
{
    Item: "普格县",
    Code: 513428,
    PCode: 513400,
    Level: 2
},
{
    Item: "布拖县",
    Code: 513429,
    PCode: 513400,
    Level: 2
},
{
    Item: "金阳县",
    Code: 513430,
    PCode: 513400,
    Level: 2
},
{
    Item: "昭觉县",
    Code: 513431,
    PCode: 513400,
    Level: 2
},
{
    Item: "喜德县",
    Code: 513432,
    PCode: 513400,
    Level: 2
},
{
    Item: "冕宁县",
    Code: 513433,
    PCode: 513400,
    Level: 2
},
{
    Item: "越西县",
    Code: 513434,
    PCode: 513400,
    Level: 2
},
{
    Item: "甘洛县",
    Code: 513435,
    PCode: 513400,
    Level: 2
},
{
    Item: "美姑县",
    Code: 513436,
    PCode: 513400,
    Level: 2
},
{
    Item: "雷波县",
    Code: 513437,
    PCode: 513400,
    Level: 2
},
{
    Item: "贵州省",
    Code: 52e4,
    PCode: 0,
    Level: 0
},
{
    Item: "贵阳市",
    Code: 520100,
    PCode: 52e4,
    Level: 1
},
{
    Item: "市辖区",
    Code: 520101,
    PCode: 520100,
    Level: 2
},
{
    Item: "南明区",
    Code: 520102,
    PCode: 520100,
    Level: 2
},
{
    Item: "云岩区",
    Code: 520103,
    PCode: 520100,
    Level: 2
},
{
    Item: "花溪区",
    Code: 520111,
    PCode: 520100,
    Level: 2
},
{
    Item: "乌当区",
    Code: 520112,
    PCode: 520100,
    Level: 2
},
{
    Item: "白云区",
    Code: 520113,
    PCode: 520100,
    Level: 2
},
{
    Item: "观山湖区",
    Code: 520115,
    PCode: 520100,
    Level: 2
},
{
    Item: "开阳县",
    Code: 520121,
    PCode: 520100,
    Level: 2
},
{
    Item: "息烽县",
    Code: 520122,
    PCode: 520100,
    Level: 2
},
{
    Item: "修文县",
    Code: 520123,
    PCode: 520100,
    Level: 2
},
{
    Item: "清镇市",
    Code: 520181,
    PCode: 520100,
    Level: 2
},
{
    Item: "六盘水市",
    Code: 520200,
    PCode: 52e4,
    Level: 1
},
{
    Item: "钟山区",
    Code: 520201,
    PCode: 520200,
    Level: 2
},
{
    Item: "六枝特区",
    Code: 520203,
    PCode: 520200,
    Level: 2
},
{
    Item: "水城县",
    Code: 520221,
    PCode: 520200,
    Level: 2
},
{
    Item: "盘县",
    Code: 520222,
    PCode: 520200,
    Level: 2
},
{
    Item: "遵义市",
    Code: 520300,
    PCode: 52e4,
    Level: 1
},
{
    Item: "市辖区",
    Code: 520301,
    PCode: 520300,
    Level: 2
},
{
    Item: "红花岗区",
    Code: 520302,
    PCode: 520300,
    Level: 2
},
{
    Item: "汇川区",
    Code: 520303,
    PCode: 520300,
    Level: 2
},
{
    Item: "遵义县",
    Code: 520321,
    PCode: 520300,
    Level: 2
},
{
    Item: "桐梓县",
    Code: 520322,
    PCode: 520300,
    Level: 2
},
{
    Item: "绥阳县",
    Code: 520323,
    PCode: 520300,
    Level: 2
},
{
    Item: "正安县",
    Code: 520324,
    PCode: 520300,
    Level: 2
},
{
    Item: "道真仡佬族苗族自治县",
    Code: 520325,
    PCode: 520300,
    Level: 2
},
{
    Item: "务川仡佬族苗族自治县",
    Code: 520326,
    PCode: 520300,
    Level: 2
},
{
    Item: "凤冈县",
    Code: 520327,
    PCode: 520300,
    Level: 2
},
{
    Item: "湄潭县",
    Code: 520328,
    PCode: 520300,
    Level: 2
},
{
    Item: "余庆县",
    Code: 520329,
    PCode: 520300,
    Level: 2
},
{
    Item: "习水县",
    Code: 520330,
    PCode: 520300,
    Level: 2
},
{
    Item: "赤水市",
    Code: 520381,
    PCode: 520300,
    Level: 2
},
{
    Item: "仁怀市",
    Code: 520382,
    PCode: 520300,
    Level: 2
},
{
    Item: "安顺市",
    Code: 520400,
    PCode: 52e4,
    Level: 1
},
{
    Item: "市辖区",
    Code: 520401,
    PCode: 520400,
    Level: 2
},
{
    Item: "西秀区",
    Code: 520402,
    PCode: 520400,
    Level: 2
},
{
    Item: "平坝区",
    Code: 520403,
    PCode: 520400,
    Level: 2
},
{
    Item: "普定县",
    Code: 520422,
    PCode: 520400,
    Level: 2
},
{
    Item: "镇宁布依族苗族自治县",
    Code: 520423,
    PCode: 520400,
    Level: 2
},
{
    Item: "关岭布依族苗族自治县",
    Code: 520424,
    PCode: 520400,
    Level: 2
},
{
    Item: "紫云苗族布依族自治县",
    Code: 520425,
    PCode: 520400,
    Level: 2
},
{
    Item: "毕节市",
    Code: 520500,
    PCode: 52e4,
    Level: 1
},
{
    Item: "市辖区",
    Code: 520501,
    PCode: 520500,
    Level: 2
},
{
    Item: "七星关区",
    Code: 520502,
    PCode: 520500,
    Level: 2
},
{
    Item: "大方县",
    Code: 520521,
    PCode: 520500,
    Level: 2
},
{
    Item: "黔西县",
    Code: 520522,
    PCode: 520500,
    Level: 2
},
{
    Item: "金沙县",
    Code: 520523,
    PCode: 520500,
    Level: 2
},
{
    Item: "织金县",
    Code: 520524,
    PCode: 520500,
    Level: 2
},
{
    Item: "纳雍县",
    Code: 520525,
    PCode: 520500,
    Level: 2
},
{
    Item: "威宁彝族回族苗族自治县",
    Code: 520526,
    PCode: 520500,
    Level: 2
},
{
    Item: "赫章县",
    Code: 520527,
    PCode: 520500,
    Level: 2
},
{
    Item: "铜仁市",
    Code: 520600,
    PCode: 52e4,
    Level: 1
},
{
    Item: "市辖区",
    Code: 520601,
    PCode: 520600,
    Level: 2
},
{
    Item: "碧江区",
    Code: 520602,
    PCode: 520600,
    Level: 2
},
{
    Item: "万山区",
    Code: 520603,
    PCode: 520600,
    Level: 2
},
{
    Item: "江口县",
    Code: 520621,
    PCode: 520600,
    Level: 2
},
{
    Item: "玉屏侗族自治县",
    Code: 520622,
    PCode: 520600,
    Level: 2
},
{
    Item: "石阡县",
    Code: 520623,
    PCode: 520600,
    Level: 2
},
{
    Item: "思南县",
    Code: 520624,
    PCode: 520600,
    Level: 2
},
{
    Item: "印江土家族苗族自治县",
    Code: 520625,
    PCode: 520600,
    Level: 2
},
{
    Item: "德江县",
    Code: 520626,
    PCode: 520600,
    Level: 2
},
{
    Item: "沿河土家族自治县",
    Code: 520627,
    PCode: 520600,
    Level: 2
},
{
    Item: "松桃苗族自治县",
    Code: 520628,
    PCode: 520600,
    Level: 2
},
{
    Item: "黔西南布依族苗族自治州",
    Code: 522300,
    PCode: 52e4,
    Level: 1
},
{
    Item: "兴义市",
    Code: 522301,
    PCode: 522300,
    Level: 2
},
{
    Item: "兴仁县",
    Code: 522322,
    PCode: 522300,
    Level: 2
},
{
    Item: "普安县",
    Code: 522323,
    PCode: 522300,
    Level: 2
},
{
    Item: "晴隆县",
    Code: 522324,
    PCode: 522300,
    Level: 2
},
{
    Item: "贞丰县",
    Code: 522325,
    PCode: 522300,
    Level: 2
},
{
    Item: "望谟县",
    Code: 522326,
    PCode: 522300,
    Level: 2
},
{
    Item: "册亨县",
    Code: 522327,
    PCode: 522300,
    Level: 2
},
{
    Item: "安龙县",
    Code: 522328,
    PCode: 522300,
    Level: 2
},
{
    Item: "黔东南苗族侗族自治州",
    Code: 522600,
    PCode: 52e4,
    Level: 1
},
{
    Item: "凯里市",
    Code: 522601,
    PCode: 522600,
    Level: 2
},
{
    Item: "黄平县",
    Code: 522622,
    PCode: 522600,
    Level: 2
},
{
    Item: "施秉县",
    Code: 522623,
    PCode: 522600,
    Level: 2
},
{
    Item: "三穗县",
    Code: 522624,
    PCode: 522600,
    Level: 2
},
{
    Item: "镇远县",
    Code: 522625,
    PCode: 522600,
    Level: 2
},
{
    Item: "岑巩县",
    Code: 522626,
    PCode: 522600,
    Level: 2
},
{
    Item: "天柱县",
    Code: 522627,
    PCode: 522600,
    Level: 2
},
{
    Item: "锦屏县",
    Code: 522628,
    PCode: 522600,
    Level: 2
},
{
    Item: "剑河县",
    Code: 522629,
    PCode: 522600,
    Level: 2
},
{
    Item: "台江县",
    Code: 522630,
    PCode: 522600,
    Level: 2
},
{
    Item: "黎平县",
    Code: 522631,
    PCode: 522600,
    Level: 2
},
{
    Item: "榕江县",
    Code: 522632,
    PCode: 522600,
    Level: 2
},
{
    Item: "从江县",
    Code: 522633,
    PCode: 522600,
    Level: 2
},
{
    Item: "雷山县",
    Code: 522634,
    PCode: 522600,
    Level: 2
},
{
    Item: "麻江县",
    Code: 522635,
    PCode: 522600,
    Level: 2
},
{
    Item: "丹寨县",
    Code: 522636,
    PCode: 522600,
    Level: 2
},
{
    Item: "黔南布依族苗族自治州",
    Code: 522700,
    PCode: 52e4,
    Level: 1
},
{
    Item: "都匀市",
    Code: 522701,
    PCode: 522700,
    Level: 2
},
{
    Item: "福泉市",
    Code: 522702,
    PCode: 522700,
    Level: 2
},
{
    Item: "荔波县",
    Code: 522722,
    PCode: 522700,
    Level: 2
},
{
    Item: "贵定县",
    Code: 522723,
    PCode: 522700,
    Level: 2
},
{
    Item: "瓮安县",
    Code: 522725,
    PCode: 522700,
    Level: 2
},
{
    Item: "独山县",
    Code: 522726,
    PCode: 522700,
    Level: 2
},
{
    Item: "平塘县",
    Code: 522727,
    PCode: 522700,
    Level: 2
},
{
    Item: "罗甸县",
    Code: 522728,
    PCode: 522700,
    Level: 2
},
{
    Item: "长顺县",
    Code: 522729,
    PCode: 522700,
    Level: 2
},
{
    Item: "龙里县",
    Code: 522730,
    PCode: 522700,
    Level: 2
},
{
    Item: "惠水县",
    Code: 522731,
    PCode: 522700,
    Level: 2
},
{
    Item: "三都水族自治县",
    Code: 522732,
    PCode: 522700,
    Level: 2
},
{
    Item: "云南省",
    Code: 53e4,
    PCode: 0,
    Level: 0
},
{
    Item: "昆明市",
    Code: 530100,
    PCode: 53e4,
    Level: 1
},
{
    Item: "市辖区",
    Code: 530101,
    PCode: 530100,
    Level: 2
},
{
    Item: "五华区",
    Code: 530102,
    PCode: 530100,
    Level: 2
},
{
    Item: "盘龙区",
    Code: 530103,
    PCode: 530100,
    Level: 2
},
{
    Item: "官渡区",
    Code: 530111,
    PCode: 530100,
    Level: 2
},
{
    Item: "西山区",
    Code: 530112,
    PCode: 530100,
    Level: 2
},
{
    Item: "东川区",
    Code: 530113,
    PCode: 530100,
    Level: 2
},
{
    Item: "呈贡区",
    Code: 530114,
    PCode: 530100,
    Level: 2
},
{
    Item: "晋宁县",
    Code: 530122,
    PCode: 530100,
    Level: 2
},
{
    Item: "富民县",
    Code: 530124,
    PCode: 530100,
    Level: 2
},
{
    Item: "宜良县",
    Code: 530125,
    PCode: 530100,
    Level: 2
},
{
    Item: "石林彝族自治县",
    Code: 530126,
    PCode: 530100,
    Level: 2
},
{
    Item: "嵩明县",
    Code: 530127,
    PCode: 530100,
    Level: 2
},
{
    Item: "禄劝彝族苗族自治县",
    Code: 530128,
    PCode: 530100,
    Level: 2
},
{
    Item: "寻甸回族彝族自治县",
    Code: 530129,
    PCode: 530100,
    Level: 2
},
{
    Item: "安宁市",
    Code: 530181,
    PCode: 530100,
    Level: 2
},
{
    Item: "曲靖市",
    Code: 530300,
    PCode: 53e4,
    Level: 1
},
{
    Item: "市辖区",
    Code: 530301,
    PCode: 530300,
    Level: 2
},
{
    Item: "麒麟区",
    Code: 530302,
    PCode: 530300,
    Level: 2
},
{
    Item: "马龙县",
    Code: 530321,
    PCode: 530300,
    Level: 2
},
{
    Item: "陆良县",
    Code: 530322,
    PCode: 530300,
    Level: 2
},
{
    Item: "师宗县",
    Code: 530323,
    PCode: 530300,
    Level: 2
},
{
    Item: "罗平县",
    Code: 530324,
    PCode: 530300,
    Level: 2
},
{
    Item: "富源县",
    Code: 530325,
    PCode: 530300,
    Level: 2
},
{
    Item: "会泽县",
    Code: 530326,
    PCode: 530300,
    Level: 2
},
{
    Item: "沾益县",
    Code: 530328,
    PCode: 530300,
    Level: 2
},
{
    Item: "宣威市",
    Code: 530381,
    PCode: 530300,
    Level: 2
},
{
    Item: "玉溪市",
    Code: 530400,
    PCode: 53e4,
    Level: 1
},
{
    Item: "市辖区",
    Code: 530401,
    PCode: 530400,
    Level: 2
},
{
    Item: "红塔区",
    Code: 530402,
    PCode: 530400,
    Level: 2
},
{
    Item: "江川县",
    Code: 530421,
    PCode: 530400,
    Level: 2
},
{
    Item: "澄江县",
    Code: 530422,
    PCode: 530400,
    Level: 2
},
{
    Item: "通海县",
    Code: 530423,
    PCode: 530400,
    Level: 2
},
{
    Item: "华宁县",
    Code: 530424,
    PCode: 530400,
    Level: 2
},
{
    Item: "易门县",
    Code: 530425,
    PCode: 530400,
    Level: 2
},
{
    Item: "峨山彝族自治县",
    Code: 530426,
    PCode: 530400,
    Level: 2
},
{
    Item: "新平彝族傣族自治县",
    Code: 530427,
    PCode: 530400,
    Level: 2
},
{
    Item: "元江哈尼族彝族傣族自治县",
    Code: 530428,
    PCode: 530400,
    Level: 2
},
{
    Item: "保山市",
    Code: 530500,
    PCode: 53e4,
    Level: 1
},
{
    Item: "市辖区",
    Code: 530501,
    PCode: 530500,
    Level: 2
},
{
    Item: "隆阳区",
    Code: 530502,
    PCode: 530500,
    Level: 2
},
{
    Item: "施甸县",
    Code: 530521,
    PCode: 530500,
    Level: 2
},
{
    Item: "龙陵县",
    Code: 530523,
    PCode: 530500,
    Level: 2
},
{
    Item: "昌宁县",
    Code: 530524,
    PCode: 530500,
    Level: 2
},
{
    Item: "腾冲市",
    Code: 530581,
    PCode: 530500,
    Level: 2
},
{
    Item: "昭通市",
    Code: 530600,
    PCode: 53e4,
    Level: 1
},
{
    Item: "市辖区",
    Code: 530601,
    PCode: 530600,
    Level: 2
},
{
    Item: "昭阳区",
    Code: 530602,
    PCode: 530600,
    Level: 2
},
{
    Item: "鲁甸县",
    Code: 530621,
    PCode: 530600,
    Level: 2
},
{
    Item: "巧家县",
    Code: 530622,
    PCode: 530600,
    Level: 2
},
{
    Item: "盐津县",
    Code: 530623,
    PCode: 530600,
    Level: 2
},
{
    Item: "大关县",
    Code: 530624,
    PCode: 530600,
    Level: 2
},
{
    Item: "永善县",
    Code: 530625,
    PCode: 530600,
    Level: 2
},
{
    Item: "绥江县",
    Code: 530626,
    PCode: 530600,
    Level: 2
},
{
    Item: "镇雄县",
    Code: 530627,
    PCode: 530600,
    Level: 2
},
{
    Item: "彝良县",
    Code: 530628,
    PCode: 530600,
    Level: 2
},
{
    Item: "威信县",
    Code: 530629,
    PCode: 530600,
    Level: 2
},
{
    Item: "水富县",
    Code: 530630,
    PCode: 530600,
    Level: 2
},
{
    Item: "丽江市",
    Code: 530700,
    PCode: 53e4,
    Level: 1
},
{
    Item: "市辖区",
    Code: 530701,
    PCode: 530700,
    Level: 2
},
{
    Item: "古城区",
    Code: 530702,
    PCode: 530700,
    Level: 2
},
{
    Item: "玉龙纳西族自治县",
    Code: 530721,
    PCode: 530700,
    Level: 2
},
{
    Item: "永胜县",
    Code: 530722,
    PCode: 530700,
    Level: 2
},
{
    Item: "华坪县",
    Code: 530723,
    PCode: 530700,
    Level: 2
},
{
    Item: "宁蒗彝族自治县",
    Code: 530724,
    PCode: 530700,
    Level: 2
},
{
    Item: "普洱市",
    Code: 530800,
    PCode: 53e4,
    Level: 1
},
{
    Item: "市辖区",
    Code: 530801,
    PCode: 530800,
    Level: 2
},
{
    Item: "思茅区",
    Code: 530802,
    PCode: 530800,
    Level: 2
},
{
    Item: "宁洱哈尼族彝族自治县",
    Code: 530821,
    PCode: 530800,
    Level: 2
},
{
    Item: "墨江哈尼族自治县",
    Code: 530822,
    PCode: 530800,
    Level: 2
},
{
    Item: "景东彝族自治县",
    Code: 530823,
    PCode: 530800,
    Level: 2
},
{
    Item: "景谷傣族彝族自治县",
    Code: 530824,
    PCode: 530800,
    Level: 2
},
{
    Item: "镇沅彝族哈尼族拉祜族自治县",
    Code: 530825,
    PCode: 530800,
    Level: 2
},
{
    Item: "江城哈尼族彝族自治县",
    Code: 530826,
    PCode: 530800,
    Level: 2
},
{
    Item: "孟连傣族拉祜族佤族自治县",
    Code: 530827,
    PCode: 530800,
    Level: 2
},
{
    Item: "澜沧拉祜族自治县",
    Code: 530828,
    PCode: 530800,
    Level: 2
},
{
    Item: "西盟佤族自治县",
    Code: 530829,
    PCode: 530800,
    Level: 2
},
{
    Item: "临沧市",
    Code: 530900,
    PCode: 53e4,
    Level: 1
},
{
    Item: "市辖区",
    Code: 530901,
    PCode: 530900,
    Level: 2
},
{
    Item: "临翔区",
    Code: 530902,
    PCode: 530900,
    Level: 2
},
{
    Item: "凤庆县",
    Code: 530921,
    PCode: 530900,
    Level: 2
},
{
    Item: "云县",
    Code: 530922,
    PCode: 530900,
    Level: 2
},
{
    Item: "永德县",
    Code: 530923,
    PCode: 530900,
    Level: 2
},
{
    Item: "镇康县",
    Code: 530924,
    PCode: 530900,
    Level: 2
},
{
    Item: "双江拉祜族佤族布朗族傣族自治县",
    Code: 530925,
    PCode: 530900,
    Level: 2
},
{
    Item: "耿马傣族佤族自治县",
    Code: 530926,
    PCode: 530900,
    Level: 2
},
{
    Item: "沧源佤族自治县",
    Code: 530927,
    PCode: 530900,
    Level: 2
},
{
    Item: "楚雄彝族自治州",
    Code: 532300,
    PCode: 53e4,
    Level: 1
},
{
    Item: "楚雄市",
    Code: 532301,
    PCode: 532300,
    Level: 2
},
{
    Item: "双柏县",
    Code: 532322,
    PCode: 532300,
    Level: 2
},
{
    Item: "牟定县",
    Code: 532323,
    PCode: 532300,
    Level: 2
},
{
    Item: "南华县",
    Code: 532324,
    PCode: 532300,
    Level: 2
},
{
    Item: "姚安县",
    Code: 532325,
    PCode: 532300,
    Level: 2
},
{
    Item: "大姚县",
    Code: 532326,
    PCode: 532300,
    Level: 2
},
{
    Item: "永仁县",
    Code: 532327,
    PCode: 532300,
    Level: 2
},
{
    Item: "元谋县",
    Code: 532328,
    PCode: 532300,
    Level: 2
},
{
    Item: "武定县",
    Code: 532329,
    PCode: 532300,
    Level: 2
},
{
    Item: "禄丰县",
    Code: 532331,
    PCode: 532300,
    Level: 2
},
{
    Item: "红河哈尼族彝族自治州",
    Code: 532500,
    PCode: 53e4,
    Level: 1
},
{
    Item: "个旧市",
    Code: 532501,
    PCode: 532500,
    Level: 2
},
{
    Item: "开远市",
    Code: 532502,
    PCode: 532500,
    Level: 2
},
{
    Item: "蒙自市",
    Code: 532503,
    PCode: 532500,
    Level: 2
},
{
    Item: "弥勒市",
    Code: 532504,
    PCode: 532500,
    Level: 2
},
{
    Item: "屏边苗族自治县",
    Code: 532523,
    PCode: 532500,
    Level: 2
},
{
    Item: "建水县",
    Code: 532524,
    PCode: 532500,
    Level: 2
},
{
    Item: "石屏县",
    Code: 532525,
    PCode: 532500,
    Level: 2
},
{
    Item: "泸西县",
    Code: 532527,
    PCode: 532500,
    Level: 2
},
{
    Item: "元阳县",
    Code: 532528,
    PCode: 532500,
    Level: 2
},
{
    Item: "红河县",
    Code: 532529,
    PCode: 532500,
    Level: 2
},
{
    Item: "金平苗族瑶族傣族自治县",
    Code: 532530,
    PCode: 532500,
    Level: 2
},
{
    Item: "绿春县",
    Code: 532531,
    PCode: 532500,
    Level: 2
},
{
    Item: "河口瑶族自治县",
    Code: 532532,
    PCode: 532500,
    Level: 2
},
{
    Item: "文山壮族苗族自治州",
    Code: 532600,
    PCode: 53e4,
    Level: 1
},
{
    Item: "文山市",
    Code: 532601,
    PCode: 532600,
    Level: 2
},
{
    Item: "砚山县",
    Code: 532622,
    PCode: 532600,
    Level: 2
},
{
    Item: "西畴县",
    Code: 532623,
    PCode: 532600,
    Level: 2
},
{
    Item: "麻栗坡县",
    Code: 532624,
    PCode: 532600,
    Level: 2
},
{
    Item: "马关县",
    Code: 532625,
    PCode: 532600,
    Level: 2
},
{
    Item: "丘北县",
    Code: 532626,
    PCode: 532600,
    Level: 2
},
{
    Item: "广南县",
    Code: 532627,
    PCode: 532600,
    Level: 2
},
{
    Item: "富宁县",
    Code: 532628,
    PCode: 532600,
    Level: 2
},
{
    Item: "西双版纳傣族自治州",
    Code: 532800,
    PCode: 53e4,
    Level: 1
},
{
    Item: "景洪市",
    Code: 532801,
    PCode: 532800,
    Level: 2
},
{
    Item: "勐海县",
    Code: 532822,
    PCode: 532800,
    Level: 2
},
{
    Item: "勐腊县",
    Code: 532823,
    PCode: 532800,
    Level: 2
},
{
    Item: "大理白族自治州",
    Code: 532900,
    PCode: 53e4,
    Level: 1
},
{
    Item: "大理市",
    Code: 532901,
    PCode: 532900,
    Level: 2
},
{
    Item: "漾濞彝族自治县",
    Code: 532922,
    PCode: 532900,
    Level: 2
},
{
    Item: "祥云县",
    Code: 532923,
    PCode: 532900,
    Level: 2
},
{
    Item: "宾川县",
    Code: 532924,
    PCode: 532900,
    Level: 2
},
{
    Item: "弥渡县",
    Code: 532925,
    PCode: 532900,
    Level: 2
},
{
    Item: "南涧彝族自治县",
    Code: 532926,
    PCode: 532900,
    Level: 2
},
{
    Item: "巍山彝族回族自治县",
    Code: 532927,
    PCode: 532900,
    Level: 2
},
{
    Item: "永平县",
    Code: 532928,
    PCode: 532900,
    Level: 2
},
{
    Item: "云龙县",
    Code: 532929,
    PCode: 532900,
    Level: 2
},
{
    Item: "洱源县",
    Code: 532930,
    PCode: 532900,
    Level: 2
},
{
    Item: "剑川县",
    Code: 532931,
    PCode: 532900,
    Level: 2
},
{
    Item: "鹤庆县",
    Code: 532932,
    PCode: 532900,
    Level: 2
},
{
    Item: "德宏傣族景颇族自治州",
    Code: 533100,
    PCode: 53e4,
    Level: 1
},
{
    Item: "瑞丽市",
    Code: 533102,
    PCode: 533100,
    Level: 2
},
{
    Item: "芒市",
    Code: 533103,
    PCode: 533100,
    Level: 2
},
{
    Item: "梁河县",
    Code: 533122,
    PCode: 533100,
    Level: 2
},
{
    Item: "盈江县",
    Code: 533123,
    PCode: 533100,
    Level: 2
},
{
    Item: "陇川县",
    Code: 533124,
    PCode: 533100,
    Level: 2
},
{
    Item: "怒江傈僳族自治州",
    Code: 533300,
    PCode: 53e4,
    Level: 1
},
{
    Item: "泸水县",
    Code: 533321,
    PCode: 533300,
    Level: 2
},
{
    Item: "福贡县",
    Code: 533323,
    PCode: 533300,
    Level: 2
},
{
    Item: "贡山独龙族怒族自治县",
    Code: 533324,
    PCode: 533300,
    Level: 2
},
{
    Item: "兰坪白族普米族自治县",
    Code: 533325,
    PCode: 533300,
    Level: 2
},
{
    Item: "迪庆藏族自治州",
    Code: 533400,
    PCode: 53e4,
    Level: 1
},
{
    Item: "香格里拉市",
    Code: 533401,
    PCode: 533400,
    Level: 2
},
{
    Item: "德钦县",
    Code: 533422,
    PCode: 533400,
    Level: 2
},
{
    Item: "维西傈僳族自治县",
    Code: 533423,
    PCode: 533400,
    Level: 2
},
{
    Item: "西藏自治区",
    Code: 54e4,
    PCode: 0,
    Level: 0
},
{
    Item: "拉萨市",
    Code: 540100,
    PCode: 54e4,
    Level: 1
},
{
    Item: "市辖区",
    Code: 540101,
    PCode: 540100,
    Level: 2
},
{
    Item: "城关区",
    Code: 540102,
    PCode: 540100,
    Level: 2
},
{
    Item: "林周县",
    Code: 540121,
    PCode: 540100,
    Level: 2
},
{
    Item: "当雄县",
    Code: 540122,
    PCode: 540100,
    Level: 2
},
{
    Item: "尼木县",
    Code: 540123,
    PCode: 540100,
    Level: 2
},
{
    Item: "曲水县",
    Code: 540124,
    PCode: 540100,
    Level: 2
},
{
    Item: "堆龙德庆县",
    Code: 540125,
    PCode: 540100,
    Level: 2
},
{
    Item: "达孜县",
    Code: 540126,
    PCode: 540100,
    Level: 2
},
{
    Item: "墨竹工卡县",
    Code: 540127,
    PCode: 540100,
    Level: 2
},
{
    Item: "日喀则市",
    Code: 540200,
    PCode: 54e4,
    Level: 1
},
{
    Item: "桑珠孜区",
    Code: 540202,
    PCode: 540200,
    Level: 2
},
{
    Item: "南木林县",
    Code: 540221,
    PCode: 540200,
    Level: 2
},
{
    Item: "江孜县",
    Code: 540222,
    PCode: 540200,
    Level: 2
},
{
    Item: "定日县",
    Code: 540223,
    PCode: 540200,
    Level: 2
},
{
    Item: "萨迦县",
    Code: 540224,
    PCode: 540200,
    Level: 2
},
{
    Item: "拉孜县",
    Code: 540225,
    PCode: 540200,
    Level: 2
},
{
    Item: "昂仁县",
    Code: 540226,
    PCode: 540200,
    Level: 2
},
{
    Item: "谢通门县",
    Code: 540227,
    PCode: 540200,
    Level: 2
},
{
    Item: "白朗县",
    Code: 540228,
    PCode: 540200,
    Level: 2
},
{
    Item: "仁布县",
    Code: 540229,
    PCode: 540200,
    Level: 2
},
{
    Item: "康马县",
    Code: 540230,
    PCode: 540200,
    Level: 2
},
{
    Item: "定结县",
    Code: 540231,
    PCode: 540200,
    Level: 2
},
{
    Item: "仲巴县",
    Code: 540232,
    PCode: 540200,
    Level: 2
},
{
    Item: "亚东县",
    Code: 540233,
    PCode: 540200,
    Level: 2
},
{
    Item: "吉隆县",
    Code: 540234,
    PCode: 540200,
    Level: 2
},
{
    Item: "聂拉木县",
    Code: 540235,
    PCode: 540200,
    Level: 2
},
{
    Item: "萨嘎县",
    Code: 540236,
    PCode: 540200,
    Level: 2
},
{
    Item: "岗巴县",
    Code: 540237,
    PCode: 540200,
    Level: 2
},
{
    Item: "昌都市",
    Code: 540300,
    PCode: 54e4,
    Level: 1
},
{
    Item: "卡若区",
    Code: 540302,
    PCode: 540300,
    Level: 2
},
{
    Item: "江达县",
    Code: 540321,
    PCode: 540300,
    Level: 2
},
{
    Item: "贡觉县",
    Code: 540322,
    PCode: 540300,
    Level: 2
},
{
    Item: "类乌齐县",
    Code: 540323,
    PCode: 540300,
    Level: 2
},
{
    Item: "丁青县",
    Code: 540324,
    PCode: 540300,
    Level: 2
},
{
    Item: "察雅县",
    Code: 540325,
    PCode: 540300,
    Level: 2
},
{
    Item: "八宿县",
    Code: 540326,
    PCode: 540300,
    Level: 2
},
{
    Item: "左贡县",
    Code: 540327,
    PCode: 540300,
    Level: 2
},
{
    Item: "芒康县",
    Code: 540328,
    PCode: 540300,
    Level: 2
},
{
    Item: "洛隆县",
    Code: 540329,
    PCode: 540300,
    Level: 2
},
{
    Item: "边坝县",
    Code: 540330,
    PCode: 540300,
    Level: 2
},
{
    Item: "林芝市",
    Code: 540400,
    PCode: 54e4,
    Level: 1
},
{
    Item: "巴宜区",
    Code: 540402,
    PCode: 540400,
    Level: 2
},
{
    Item: "工布江达县",
    Code: 540421,
    PCode: 540400,
    Level: 2
},
{
    Item: "米林县",
    Code: 540422,
    PCode: 540400,
    Level: 2
},
{
    Item: "墨脱县",
    Code: 540423,
    PCode: 540400,
    Level: 2
},
{
    Item: "波密县",
    Code: 540424,
    PCode: 540400,
    Level: 2
},
{
    Item: "察隅县",
    Code: 540425,
    PCode: 540400,
    Level: 2
},
{
    Item: "朗县",
    Code: 540426,
    PCode: 540400,
    Level: 2
},
{
    Item: "山南地区",
    Code: 542200,
    PCode: 54e4,
    Level: 1
},
{
    Item: "乃东县",
    Code: 542221,
    PCode: 542200,
    Level: 2
},
{
    Item: "扎囊县",
    Code: 542222,
    PCode: 542200,
    Level: 2
},
{
    Item: "贡嘎县",
    Code: 542223,
    PCode: 542200,
    Level: 2
},
{
    Item: "桑日县",
    Code: 542224,
    PCode: 542200,
    Level: 2
},
{
    Item: "琼结县",
    Code: 542225,
    PCode: 542200,
    Level: 2
},
{
    Item: "曲松县",
    Code: 542226,
    PCode: 542200,
    Level: 2
},
{
    Item: "措美县",
    Code: 542227,
    PCode: 542200,
    Level: 2
},
{
    Item: "洛扎县",
    Code: 542228,
    PCode: 542200,
    Level: 2
},
{
    Item: "加查县",
    Code: 542229,
    PCode: 542200,
    Level: 2
},
{
    Item: "隆子县",
    Code: 542231,
    PCode: 542200,
    Level: 2
},
{
    Item: "错那县",
    Code: 542232,
    PCode: 542200,
    Level: 2
},
{
    Item: "浪卡子县",
    Code: 542233,
    PCode: 542200,
    Level: 2
},
{
    Item: "那曲地区",
    Code: 542400,
    PCode: 54e4,
    Level: 1
},
{
    Item: "那曲县",
    Code: 542421,
    PCode: 542400,
    Level: 2
},
{
    Item: "嘉黎县",
    Code: 542422,
    PCode: 542400,
    Level: 2
},
{
    Item: "比如县",
    Code: 542423,
    PCode: 542400,
    Level: 2
},
{
    Item: "聂荣县",
    Code: 542424,
    PCode: 542400,
    Level: 2
},
{
    Item: "安多县",
    Code: 542425,
    PCode: 542400,
    Level: 2
},
{
    Item: "申扎县",
    Code: 542426,
    PCode: 542400,
    Level: 2
},
{
    Item: "索县",
    Code: 542427,
    PCode: 542400,
    Level: 2
},
{
    Item: "班戈县",
    Code: 542428,
    PCode: 542400,
    Level: 2
},
{
    Item: "巴青县",
    Code: 542429,
    PCode: 542400,
    Level: 2
},
{
    Item: "尼玛县",
    Code: 542430,
    PCode: 542400,
    Level: 2
},
{
    Item: "双湖县",
    Code: 542431,
    PCode: 542400,
    Level: 2
},
{
    Item: "阿里地区",
    Code: 542500,
    PCode: 54e4,
    Level: 1
},
{
    Item: "普兰县",
    Code: 542521,
    PCode: 542500,
    Level: 2
},
{
    Item: "札达县",
    Code: 542522,
    PCode: 542500,
    Level: 2
},
{
    Item: "噶尔县",
    Code: 542523,
    PCode: 542500,
    Level: 2
},
{
    Item: "日土县",
    Code: 542524,
    PCode: 542500,
    Level: 2
},
{
    Item: "革吉县",
    Code: 542525,
    PCode: 542500,
    Level: 2
},
{
    Item: "改则县",
    Code: 542526,
    PCode: 542500,
    Level: 2
},
{
    Item: "措勤县",
    Code: 542527,
    PCode: 542500,
    Level: 2
},
{
    Item: "陕西省",
    Code: 61e4,
    PCode: 0,
    Level: 0
},
{
    Item: "西安市",
    Code: 610100,
    PCode: 61e4,
    Level: 1
},
{
    Item: "市辖区",
    Code: 610101,
    PCode: 610100,
    Level: 2
},
{
    Item: "新城区",
    Code: 610102,
    PCode: 610100,
    Level: 2
},
{
    Item: "碑林区",
    Code: 610103,
    PCode: 610100,
    Level: 2
},
{
    Item: "莲湖区",
    Code: 610104,
    PCode: 610100,
    Level: 2
},
{
    Item: "灞桥区",
    Code: 610111,
    PCode: 610100,
    Level: 2
},
{
    Item: "未央区",
    Code: 610112,
    PCode: 610100,
    Level: 2
},
{
    Item: "雁塔区",
    Code: 610113,
    PCode: 610100,
    Level: 2
},
{
    Item: "阎良区",
    Code: 610114,
    PCode: 610100,
    Level: 2
},
{
    Item: "临潼区",
    Code: 610115,
    PCode: 610100,
    Level: 2
},
{
    Item: "长安区",
    Code: 610116,
    PCode: 610100,
    Level: 2
},
{
    Item: "高陵区",
    Code: 610117,
    PCode: 610100,
    Level: 2
},
{
    Item: "蓝田县",
    Code: 610122,
    PCode: 610100,
    Level: 2
},
{
    Item: "周至县",
    Code: 610124,
    PCode: 610100,
    Level: 2
},
{
    Item: "户县",
    Code: 610125,
    PCode: 610100,
    Level: 2
},
{
    Item: "铜川市",
    Code: 610200,
    PCode: 61e4,
    Level: 1
},
{
    Item: "市辖区",
    Code: 610201,
    PCode: 610200,
    Level: 2
},
{
    Item: "王益区",
    Code: 610202,
    PCode: 610200,
    Level: 2
},
{
    Item: "印台区",
    Code: 610203,
    PCode: 610200,
    Level: 2
},
{
    Item: "耀州区",
    Code: 610204,
    PCode: 610200,
    Level: 2
},
{
    Item: "宜君县",
    Code: 610222,
    PCode: 610200,
    Level: 2
},
{
    Item: "宝鸡市",
    Code: 610300,
    PCode: 61e4,
    Level: 1
},
{
    Item: "市辖区",
    Code: 610301,
    PCode: 610300,
    Level: 2
},
{
    Item: "渭滨区",
    Code: 610302,
    PCode: 610300,
    Level: 2
},
{
    Item: "金台区",
    Code: 610303,
    PCode: 610300,
    Level: 2
},
{
    Item: "陈仓区",
    Code: 610304,
    PCode: 610300,
    Level: 2
},
{
    Item: "凤翔县",
    Code: 610322,
    PCode: 610300,
    Level: 2
},
{
    Item: "岐山县",
    Code: 610323,
    PCode: 610300,
    Level: 2
},
{
    Item: "扶风县",
    Code: 610324,
    PCode: 610300,
    Level: 2
},
{
    Item: "眉县",
    Code: 610326,
    PCode: 610300,
    Level: 2
},
{
    Item: "陇县",
    Code: 610327,
    PCode: 610300,
    Level: 2
},
{
    Item: "千阳县",
    Code: 610328,
    PCode: 610300,
    Level: 2
},
{
    Item: "麟游县",
    Code: 610329,
    PCode: 610300,
    Level: 2
},
{
    Item: "凤县",
    Code: 610330,
    PCode: 610300,
    Level: 2
},
{
    Item: "太白县",
    Code: 610331,
    PCode: 610300,
    Level: 2
},
{
    Item: "咸阳市",
    Code: 610400,
    PCode: 61e4,
    Level: 1
},
{
    Item: "市辖区",
    Code: 610401,
    PCode: 610400,
    Level: 2
},
{
    Item: "秦都区",
    Code: 610402,
    PCode: 610400,
    Level: 2
},
{
    Item: "杨陵区",
    Code: 610403,
    PCode: 610400,
    Level: 2
},
{
    Item: "渭城区",
    Code: 610404,
    PCode: 610400,
    Level: 2
},
{
    Item: "三原县",
    Code: 610422,
    PCode: 610400,
    Level: 2
},
{
    Item: "泾阳县",
    Code: 610423,
    PCode: 610400,
    Level: 2
},
{
    Item: "乾县",
    Code: 610424,
    PCode: 610400,
    Level: 2
},
{
    Item: "礼泉县",
    Code: 610425,
    PCode: 610400,
    Level: 2
},
{
    Item: "永寿县",
    Code: 610426,
    PCode: 610400,
    Level: 2
},
{
    Item: "彬县",
    Code: 610427,
    PCode: 610400,
    Level: 2
},
{
    Item: "长武县",
    Code: 610428,
    PCode: 610400,
    Level: 2
},
{
    Item: "旬邑县",
    Code: 610429,
    PCode: 610400,
    Level: 2
},
{
    Item: "淳化县",
    Code: 610430,
    PCode: 610400,
    Level: 2
},
{
    Item: "武功县",
    Code: 610431,
    PCode: 610400,
    Level: 2
},
{
    Item: "兴平市",
    Code: 610481,
    PCode: 610400,
    Level: 2
},
{
    Item: "渭南市",
    Code: 610500,
    PCode: 61e4,
    Level: 1
},
{
    Item: "市辖区",
    Code: 610501,
    PCode: 610500,
    Level: 2
},
{
    Item: "临渭区",
    Code: 610502,
    PCode: 610500,
    Level: 2
},
{
    Item: "华县",
    Code: 610521,
    PCode: 610500,
    Level: 2
},
{
    Item: "潼关县",
    Code: 610522,
    PCode: 610500,
    Level: 2
},
{
    Item: "大荔县",
    Code: 610523,
    PCode: 610500,
    Level: 2
},
{
    Item: "合阳县",
    Code: 610524,
    PCode: 610500,
    Level: 2
},
{
    Item: "澄城县",
    Code: 610525,
    PCode: 610500,
    Level: 2
},
{
    Item: "蒲城县",
    Code: 610526,
    PCode: 610500,
    Level: 2
},
{
    Item: "白水县",
    Code: 610527,
    PCode: 610500,
    Level: 2
},
{
    Item: "富平县",
    Code: 610528,
    PCode: 610500,
    Level: 2
},
{
    Item: "韩城市",
    Code: 610581,
    PCode: 610500,
    Level: 2
},
{
    Item: "华阴市",
    Code: 610582,
    PCode: 610500,
    Level: 2
},
{
    Item: "延安市",
    Code: 610600,
    PCode: 61e4,
    Level: 1
},
{
    Item: "市辖区",
    Code: 610601,
    PCode: 610600,
    Level: 2
},
{
    Item: "宝塔区",
    Code: 610602,
    PCode: 610600,
    Level: 2
},
{
    Item: "延长县",
    Code: 610621,
    PCode: 610600,
    Level: 2
},
{
    Item: "延川县",
    Code: 610622,
    PCode: 610600,
    Level: 2
},
{
    Item: "子长县",
    Code: 610623,
    PCode: 610600,
    Level: 2
},
{
    Item: "安塞县",
    Code: 610624,
    PCode: 610600,
    Level: 2
},
{
    Item: "志丹县",
    Code: 610625,
    PCode: 610600,
    Level: 2
},
{
    Item: "吴起县",
    Code: 610626,
    PCode: 610600,
    Level: 2
},
{
    Item: "甘泉县",
    Code: 610627,
    PCode: 610600,
    Level: 2
},
{
    Item: "富县",
    Code: 610628,
    PCode: 610600,
    Level: 2
},
{
    Item: "洛川县",
    Code: 610629,
    PCode: 610600,
    Level: 2
},
{
    Item: "宜川县",
    Code: 610630,
    PCode: 610600,
    Level: 2
},
{
    Item: "黄龙县",
    Code: 610631,
    PCode: 610600,
    Level: 2
},
{
    Item: "黄陵县",
    Code: 610632,
    PCode: 610600,
    Level: 2
},
{
    Item: "汉中市",
    Code: 610700,
    PCode: 61e4,
    Level: 1
},
{
    Item: "市辖区",
    Code: 610701,
    PCode: 610700,
    Level: 2
},
{
    Item: "汉台区",
    Code: 610702,
    PCode: 610700,
    Level: 2
},
{
    Item: "南郑县",
    Code: 610721,
    PCode: 610700,
    Level: 2
},
{
    Item: "城固县",
    Code: 610722,
    PCode: 610700,
    Level: 2
},
{
    Item: "洋县",
    Code: 610723,
    PCode: 610700,
    Level: 2
},
{
    Item: "西乡县",
    Code: 610724,
    PCode: 610700,
    Level: 2
},
{
    Item: "勉县",
    Code: 610725,
    PCode: 610700,
    Level: 2
},
{
    Item: "宁强县",
    Code: 610726,
    PCode: 610700,
    Level: 2
},
{
    Item: "略阳县",
    Code: 610727,
    PCode: 610700,
    Level: 2
},
{
    Item: "镇巴县",
    Code: 610728,
    PCode: 610700,
    Level: 2
},
{
    Item: "留坝县",
    Code: 610729,
    PCode: 610700,
    Level: 2
},
{
    Item: "佛坪县",
    Code: 610730,
    PCode: 610700,
    Level: 2
},
{
    Item: "榆林市",
    Code: 610800,
    PCode: 61e4,
    Level: 1
},
{
    Item: "市辖区",
    Code: 610801,
    PCode: 610800,
    Level: 2
},
{
    Item: "榆阳区",
    Code: 610802,
    PCode: 610800,
    Level: 2
},
{
    Item: "神木县",
    Code: 610821,
    PCode: 610800,
    Level: 2
},
{
    Item: "府谷县",
    Code: 610822,
    PCode: 610800,
    Level: 2
},
{
    Item: "横山县",
    Code: 610823,
    PCode: 610800,
    Level: 2
},
{
    Item: "靖边县",
    Code: 610824,
    PCode: 610800,
    Level: 2
},
{
    Item: "定边县",
    Code: 610825,
    PCode: 610800,
    Level: 2
},
{
    Item: "绥德县",
    Code: 610826,
    PCode: 610800,
    Level: 2
},
{
    Item: "米脂县",
    Code: 610827,
    PCode: 610800,
    Level: 2
},
{
    Item: "佳县",
    Code: 610828,
    PCode: 610800,
    Level: 2
},
{
    Item: "吴堡县",
    Code: 610829,
    PCode: 610800,
    Level: 2
},
{
    Item: "清涧县",
    Code: 610830,
    PCode: 610800,
    Level: 2
},
{
    Item: "子洲县",
    Code: 610831,
    PCode: 610800,
    Level: 2
},
{
    Item: "安康市",
    Code: 610900,
    PCode: 61e4,
    Level: 1
},
{
    Item: "市辖区",
    Code: 610901,
    PCode: 610900,
    Level: 2
},
{
    Item: "汉滨区",
    Code: 610902,
    PCode: 610900,
    Level: 2
},
{
    Item: "汉阴县",
    Code: 610921,
    PCode: 610900,
    Level: 2
},
{
    Item: "石泉县",
    Code: 610922,
    PCode: 610900,
    Level: 2
},
{
    Item: "宁陕县",
    Code: 610923,
    PCode: 610900,
    Level: 2
},
{
    Item: "紫阳县",
    Code: 610924,
    PCode: 610900,
    Level: 2
},
{
    Item: "岚皋县",
    Code: 610925,
    PCode: 610900,
    Level: 2
},
{
    Item: "平利县",
    Code: 610926,
    PCode: 610900,
    Level: 2
},
{
    Item: "镇坪县",
    Code: 610927,
    PCode: 610900,
    Level: 2
},
{
    Item: "旬阳县",
    Code: 610928,
    PCode: 610900,
    Level: 2
},
{
    Item: "白河县",
    Code: 610929,
    PCode: 610900,
    Level: 2
},
{
    Item: "商洛市",
    Code: 611e3,
    PCode: 61e4,
    Level: 1
},
{
    Item: "市辖区",
    Code: 611001,
    PCode: 611e3,
    Level: 2
},
{
    Item: "商州区",
    Code: 611002,
    PCode: 611e3,
    Level: 2
},
{
    Item: "洛南县",
    Code: 611021,
    PCode: 611e3,
    Level: 2
},
{
    Item: "丹凤县",
    Code: 611022,
    PCode: 611e3,
    Level: 2
},
{
    Item: "商南县",
    Code: 611023,
    PCode: 611e3,
    Level: 2
},
{
    Item: "山阳县",
    Code: 611024,
    PCode: 611e3,
    Level: 2
},
{
    Item: "镇安县",
    Code: 611025,
    PCode: 611e3,
    Level: 2
},
{
    Item: "柞水县",
    Code: 611026,
    PCode: 611e3,
    Level: 2
},
{
    Item: "甘肃省",
    Code: 62e4,
    PCode: 0,
    Level: 0
},
{
    Item: "兰州市",
    Code: 620100,
    PCode: 62e4,
    Level: 1
},
{
    Item: "市辖区",
    Code: 620101,
    PCode: 620100,
    Level: 2
},
{
    Item: "城关区",
    Code: 620102,
    PCode: 620100,
    Level: 2
},
{
    Item: "七里河区",
    Code: 620103,
    PCode: 620100,
    Level: 2
},
{
    Item: "西固区",
    Code: 620104,
    PCode: 620100,
    Level: 2
},
{
    Item: "安宁区",
    Code: 620105,
    PCode: 620100,
    Level: 2
},
{
    Item: "红古区",
    Code: 620111,
    PCode: 620100,
    Level: 2
},
{
    Item: "永登县",
    Code: 620121,
    PCode: 620100,
    Level: 2
},
{
    Item: "皋兰县",
    Code: 620122,
    PCode: 620100,
    Level: 2
},
{
    Item: "榆中县",
    Code: 620123,
    PCode: 620100,
    Level: 2
},
{
    Item: "嘉峪关市",
    Code: 620200,
    PCode: 62e4,
    Level: 1
},
{
    Item: "市辖区",
    Code: 620201,
    PCode: 620200,
    Level: 2
},
{
    Item: "金昌市",
    Code: 620300,
    PCode: 62e4,
    Level: 1
},
{
    Item: "市辖区",
    Code: 620301,
    PCode: 620300,
    Level: 2
},
{
    Item: "金川区",
    Code: 620302,
    PCode: 620300,
    Level: 2
},
{
    Item: "永昌县",
    Code: 620321,
    PCode: 620300,
    Level: 2
},
{
    Item: "白银市",
    Code: 620400,
    PCode: 62e4,
    Level: 1
},
{
    Item: "市辖区",
    Code: 620401,
    PCode: 620400,
    Level: 2
},
{
    Item: "白银区",
    Code: 620402,
    PCode: 620400,
    Level: 2
},
{
    Item: "平川区",
    Code: 620403,
    PCode: 620400,
    Level: 2
},
{
    Item: "靖远县",
    Code: 620421,
    PCode: 620400,
    Level: 2
},
{
    Item: "会宁县",
    Code: 620422,
    PCode: 620400,
    Level: 2
},
{
    Item: "景泰县",
    Code: 620423,
    PCode: 620400,
    Level: 2
},
{
    Item: "天水市",
    Code: 620500,
    PCode: 62e4,
    Level: 1
},
{
    Item: "市辖区",
    Code: 620501,
    PCode: 620500,
    Level: 2
},
{
    Item: "秦州区",
    Code: 620502,
    PCode: 620500,
    Level: 2
},
{
    Item: "麦积区",
    Code: 620503,
    PCode: 620500,
    Level: 2
},
{
    Item: "清水县",
    Code: 620521,
    PCode: 620500,
    Level: 2
},
{
    Item: "秦安县",
    Code: 620522,
    PCode: 620500,
    Level: 2
},
{
    Item: "甘谷县",
    Code: 620523,
    PCode: 620500,
    Level: 2
},
{
    Item: "武山县",
    Code: 620524,
    PCode: 620500,
    Level: 2
},
{
    Item: "张家川回族自治县",
    Code: 620525,
    PCode: 620500,
    Level: 2
},
{
    Item: "武威市",
    Code: 620600,
    PCode: 62e4,
    Level: 1
},
{
    Item: "市辖区",
    Code: 620601,
    PCode: 620600,
    Level: 2
},
{
    Item: "凉州区",
    Code: 620602,
    PCode: 620600,
    Level: 2
},
{
    Item: "民勤县",
    Code: 620621,
    PCode: 620600,
    Level: 2
},
{
    Item: "古浪县",
    Code: 620622,
    PCode: 620600,
    Level: 2
},
{
    Item: "天祝藏族自治县",
    Code: 620623,
    PCode: 620600,
    Level: 2
},
{
    Item: "张掖市",
    Code: 620700,
    PCode: 62e4,
    Level: 1
},
{
    Item: "市辖区",
    Code: 620701,
    PCode: 620700,
    Level: 2
},
{
    Item: "甘州区",
    Code: 620702,
    PCode: 620700,
    Level: 2
},
{
    Item: "肃南裕固族自治县",
    Code: 620721,
    PCode: 620700,
    Level: 2
},
{
    Item: "民乐县",
    Code: 620722,
    PCode: 620700,
    Level: 2
},
{
    Item: "临泽县",
    Code: 620723,
    PCode: 620700,
    Level: 2
},
{
    Item: "高台县",
    Code: 620724,
    PCode: 620700,
    Level: 2
},
{
    Item: "山丹县",
    Code: 620725,
    PCode: 620700,
    Level: 2
},
{
    Item: "平凉市",
    Code: 620800,
    PCode: 62e4,
    Level: 1
},
{
    Item: "市辖区",
    Code: 620801,
    PCode: 620800,
    Level: 2
},
{
    Item: "崆峒区",
    Code: 620802,
    PCode: 620800,
    Level: 2
},
{
    Item: "泾川县",
    Code: 620821,
    PCode: 620800,
    Level: 2
},
{
    Item: "灵台县",
    Code: 620822,
    PCode: 620800,
    Level: 2
},
{
    Item: "崇信县",
    Code: 620823,
    PCode: 620800,
    Level: 2
},
{
    Item: "华亭县",
    Code: 620824,
    PCode: 620800,
    Level: 2
},
{
    Item: "庄浪县",
    Code: 620825,
    PCode: 620800,
    Level: 2
},
{
    Item: "静宁县",
    Code: 620826,
    PCode: 620800,
    Level: 2
},
{
    Item: "酒泉市",
    Code: 620900,
    PCode: 62e4,
    Level: 1
},
{
    Item: "市辖区",
    Code: 620901,
    PCode: 620900,
    Level: 2
},
{
    Item: "肃州区",
    Code: 620902,
    PCode: 620900,
    Level: 2
},
{
    Item: "金塔县",
    Code: 620921,
    PCode: 620900,
    Level: 2
},
{
    Item: "瓜州县",
    Code: 620922,
    PCode: 620900,
    Level: 2
},
{
    Item: "肃北蒙古族自治县",
    Code: 620923,
    PCode: 620900,
    Level: 2
},
{
    Item: "阿克塞哈萨克族自治县",
    Code: 620924,
    PCode: 620900,
    Level: 2
},
{
    Item: "玉门市",
    Code: 620981,
    PCode: 620900,
    Level: 2
},
{
    Item: "敦煌市",
    Code: 620982,
    PCode: 620900,
    Level: 2
},
{
    Item: "庆阳市",
    Code: 621e3,
    PCode: 62e4,
    Level: 1
},
{
    Item: "市辖区",
    Code: 621001,
    PCode: 621e3,
    Level: 2
},
{
    Item: "西峰区",
    Code: 621002,
    PCode: 621e3,
    Level: 2
},
{
    Item: "庆城县",
    Code: 621021,
    PCode: 621e3,
    Level: 2
},
{
    Item: "环县",
    Code: 621022,
    PCode: 621e3,
    Level: 2
},
{
    Item: "华池县",
    Code: 621023,
    PCode: 621e3,
    Level: 2
},
{
    Item: "合水县",
    Code: 621024,
    PCode: 621e3,
    Level: 2
},
{
    Item: "正宁县",
    Code: 621025,
    PCode: 621e3,
    Level: 2
},
{
    Item: "宁县",
    Code: 621026,
    PCode: 621e3,
    Level: 2
},
{
    Item: "镇原县",
    Code: 621027,
    PCode: 621e3,
    Level: 2
},
{
    Item: "定西市",
    Code: 621100,
    PCode: 62e4,
    Level: 1
},
{
    Item: "市辖区",
    Code: 621101,
    PCode: 621100,
    Level: 2
},
{
    Item: "安定区",
    Code: 621102,
    PCode: 621100,
    Level: 2
},
{
    Item: "通渭县",
    Code: 621121,
    PCode: 621100,
    Level: 2
},
{
    Item: "陇西县",
    Code: 621122,
    PCode: 621100,
    Level: 2
},
{
    Item: "渭源县",
    Code: 621123,
    PCode: 621100,
    Level: 2
},
{
    Item: "临洮县",
    Code: 621124,
    PCode: 621100,
    Level: 2
},
{
    Item: "漳县",
    Code: 621125,
    PCode: 621100,
    Level: 2
},
{
    Item: "岷县",
    Code: 621126,
    PCode: 621100,
    Level: 2
},
{
    Item: "陇南市",
    Code: 621200,
    PCode: 62e4,
    Level: 1
},
{
    Item: "市辖区",
    Code: 621201,
    PCode: 621200,
    Level: 2
},
{
    Item: "武都区",
    Code: 621202,
    PCode: 621200,
    Level: 2
},
{
    Item: "成县",
    Code: 621221,
    PCode: 621200,
    Level: 2
},
{
    Item: "文县",
    Code: 621222,
    PCode: 621200,
    Level: 2
},
{
    Item: "宕昌县",
    Code: 621223,
    PCode: 621200,
    Level: 2
},
{
    Item: "康县",
    Code: 621224,
    PCode: 621200,
    Level: 2
},
{
    Item: "西和县",
    Code: 621225,
    PCode: 621200,
    Level: 2
},
{
    Item: "礼县",
    Code: 621226,
    PCode: 621200,
    Level: 2
},
{
    Item: "徽县",
    Code: 621227,
    PCode: 621200,
    Level: 2
},
{
    Item: "两当县",
    Code: 621228,
    PCode: 621200,
    Level: 2
},
{
    Item: "临夏回族自治州",
    Code: 622900,
    PCode: 62e4,
    Level: 1
},
{
    Item: "临夏市",
    Code: 622901,
    PCode: 622900,
    Level: 2
},
{
    Item: "临夏县",
    Code: 622921,
    PCode: 622900,
    Level: 2
},
{
    Item: "康乐县",
    Code: 622922,
    PCode: 622900,
    Level: 2
},
{
    Item: "永靖县",
    Code: 622923,
    PCode: 622900,
    Level: 2
},
{
    Item: "广河县",
    Code: 622924,
    PCode: 622900,
    Level: 2
},
{
    Item: "和政县",
    Code: 622925,
    PCode: 622900,
    Level: 2
},
{
    Item: "东乡族自治县",
    Code: 622926,
    PCode: 622900,
    Level: 2
},
{
    Item: "积石山保安族东乡族撒拉族自治县",
    Code: 622927,
    PCode: 622900,
    Level: 2
},
{
    Item: "甘南藏族自治州",
    Code: 623e3,
    PCode: 62e4,
    Level: 1
},
{
    Item: "合作市",
    Code: 623001,
    PCode: 623e3,
    Level: 2
},
{
    Item: "临潭县",
    Code: 623021,
    PCode: 623e3,
    Level: 2
},
{
    Item: "卓尼县",
    Code: 623022,
    PCode: 623e3,
    Level: 2
},
{
    Item: "舟曲县",
    Code: 623023,
    PCode: 623e3,
    Level: 2
},
{
    Item: "迭部县",
    Code: 623024,
    PCode: 623e3,
    Level: 2
},
{
    Item: "玛曲县",
    Code: 623025,
    PCode: 623e3,
    Level: 2
},
{
    Item: "碌曲县",
    Code: 623026,
    PCode: 623e3,
    Level: 2
},
{
    Item: "夏河县",
    Code: 623027,
    PCode: 623e3,
    Level: 2
},
{
    Item: "青海省",
    Code: 63e4,
    PCode: 0,
    Level: 0
},
{
    Item: "西宁市",
    Code: 630100,
    PCode: 63e4,
    Level: 1
},
{
    Item: "市辖区",
    Code: 630101,
    PCode: 630100,
    Level: 2
},
{
    Item: "城东区",
    Code: 630102,
    PCode: 630100,
    Level: 2
},
{
    Item: "城中区",
    Code: 630103,
    PCode: 630100,
    Level: 2
},
{
    Item: "城西区",
    Code: 630104,
    PCode: 630100,
    Level: 2
},
{
    Item: "城北区",
    Code: 630105,
    PCode: 630100,
    Level: 2
},
{
    Item: "大通回族土族自治县",
    Code: 630121,
    PCode: 630100,
    Level: 2
},
{
    Item: "湟中县",
    Code: 630122,
    PCode: 630100,
    Level: 2
},
{
    Item: "湟源县",
    Code: 630123,
    PCode: 630100,
    Level: 2
},
{
    Item: "海东市",
    Code: 630200,
    PCode: 63e4,
    Level: 1
},
{
    Item: "乐都区",
    Code: 630202,
    PCode: 630200,
    Level: 2
},
{
    Item: "平安区",
    Code: 630203,
    PCode: 630200,
    Level: 2
},
{
    Item: "民和回族土族自治县",
    Code: 630222,
    PCode: 630200,
    Level: 2
},
{
    Item: "互助土族自治县",
    Code: 630223,
    PCode: 630200,
    Level: 2
},
{
    Item: "化隆回族自治县",
    Code: 630224,
    PCode: 630200,
    Level: 2
},
{
    Item: "循化撒拉族自治县",
    Code: 630225,
    PCode: 630200,
    Level: 2
},
{
    Item: "海北藏族自治州",
    Code: 632200,
    PCode: 63e4,
    Level: 1
},
{
    Item: "门源回族自治县",
    Code: 632221,
    PCode: 632200,
    Level: 2
},
{
    Item: "祁连县",
    Code: 632222,
    PCode: 632200,
    Level: 2
},
{
    Item: "海晏县",
    Code: 632223,
    PCode: 632200,
    Level: 2
},
{
    Item: "刚察县",
    Code: 632224,
    PCode: 632200,
    Level: 2
},
{
    Item: "黄南藏族自治州",
    Code: 632300,
    PCode: 63e4,
    Level: 1
},
{
    Item: "同仁县",
    Code: 632321,
    PCode: 632300,
    Level: 2
},
{
    Item: "尖扎县",
    Code: 632322,
    PCode: 632300,
    Level: 2
},
{
    Item: "泽库县",
    Code: 632323,
    PCode: 632300,
    Level: 2
},
{
    Item: "河南蒙古族自治县",
    Code: 632324,
    PCode: 632300,
    Level: 2
},
{
    Item: "海南藏族自治州",
    Code: 632500,
    PCode: 63e4,
    Level: 1
},
{
    Item: "共和县",
    Code: 632521,
    PCode: 632500,
    Level: 2
},
{
    Item: "同德县",
    Code: 632522,
    PCode: 632500,
    Level: 2
},
{
    Item: "贵德县",
    Code: 632523,
    PCode: 632500,
    Level: 2
},
{
    Item: "兴海县",
    Code: 632524,
    PCode: 632500,
    Level: 2
},
{
    Item: "贵南县",
    Code: 632525,
    PCode: 632500,
    Level: 2
},
{
    Item: "果洛藏族自治州",
    Code: 632600,
    PCode: 63e4,
    Level: 1
},
{
    Item: "玛沁县",
    Code: 632621,
    PCode: 632600,
    Level: 2
},
{
    Item: "班玛县",
    Code: 632622,
    PCode: 632600,
    Level: 2
},
{
    Item: "甘德县",
    Code: 632623,
    PCode: 632600,
    Level: 2
},
{
    Item: "达日县",
    Code: 632624,
    PCode: 632600,
    Level: 2
},
{
    Item: "久治县",
    Code: 632625,
    PCode: 632600,
    Level: 2
},
{
    Item: "玛多县",
    Code: 632626,
    PCode: 632600,
    Level: 2
},
{
    Item: "玉树藏族自治州",
    Code: 632700,
    PCode: 63e4,
    Level: 1
},
{
    Item: "玉树市",
    Code: 632701,
    PCode: 632700,
    Level: 2
},
{
    Item: "杂多县",
    Code: 632722,
    PCode: 632700,
    Level: 2
},
{
    Item: "称多县",
    Code: 632723,
    PCode: 632700,
    Level: 2
},
{
    Item: "治多县",
    Code: 632724,
    PCode: 632700,
    Level: 2
},
{
    Item: "囊谦县",
    Code: 632725,
    PCode: 632700,
    Level: 2
},
{
    Item: "曲麻莱县",
    Code: 632726,
    PCode: 632700,
    Level: 2
},
{
    Item: "海西蒙古族藏族自治州",
    Code: 632800,
    PCode: 63e4,
    Level: 1
},
{
    Item: "格尔木市",
    Code: 632801,
    PCode: 632800,
    Level: 2
},
{
    Item: "德令哈市",
    Code: 632802,
    PCode: 632800,
    Level: 2
},
{
    Item: "乌兰县",
    Code: 632821,
    PCode: 632800,
    Level: 2
},
{
    Item: "都兰县",
    Code: 632822,
    PCode: 632800,
    Level: 2
},
{
    Item: "天峻县",
    Code: 632823,
    PCode: 632800,
    Level: 2
},
{
    Item: "宁夏回族自治区",
    Code: 64e4,
    PCode: 0,
    Level: 0
},
{
    Item: "银川市",
    Code: 640100,
    PCode: 64e4,
    Level: 1
},
{
    Item: "市辖区",
    Code: 640101,
    PCode: 640100,
    Level: 2
},
{
    Item: "兴庆区",
    Code: 640104,
    PCode: 640100,
    Level: 2
},
{
    Item: "西夏区",
    Code: 640105,
    PCode: 640100,
    Level: 2
},
{
    Item: "金凤区",
    Code: 640106,
    PCode: 640100,
    Level: 2
},
{
    Item: "永宁县",
    Code: 640121,
    PCode: 640100,
    Level: 2
},
{
    Item: "贺兰县",
    Code: 640122,
    PCode: 640100,
    Level: 2
},
{
    Item: "灵武市",
    Code: 640181,
    PCode: 640100,
    Level: 2
},
{
    Item: "石嘴山市",
    Code: 640200,
    PCode: 64e4,
    Level: 1
},
{
    Item: "市辖区",
    Code: 640201,
    PCode: 640200,
    Level: 2
},
{
    Item: "大武口区",
    Code: 640202,
    PCode: 640200,
    Level: 2
},
{
    Item: "惠农区",
    Code: 640205,
    PCode: 640200,
    Level: 2
},
{
    Item: "平罗县",
    Code: 640221,
    PCode: 640200,
    Level: 2
},
{
    Item: "吴忠市",
    Code: 640300,
    PCode: 64e4,
    Level: 1
},
{
    Item: "市辖区",
    Code: 640301,
    PCode: 640300,
    Level: 2
},
{
    Item: "利通区",
    Code: 640302,
    PCode: 640300,
    Level: 2
},
{
    Item: "红寺堡区",
    Code: 640303,
    PCode: 640300,
    Level: 2
},
{
    Item: "盐池县",
    Code: 640323,
    PCode: 640300,
    Level: 2
},
{
    Item: "同心县",
    Code: 640324,
    PCode: 640300,
    Level: 2
},
{
    Item: "青铜峡市",
    Code: 640381,
    PCode: 640300,
    Level: 2
},
{
    Item: "固原市",
    Code: 640400,
    PCode: 64e4,
    Level: 1
},
{
    Item: "市辖区",
    Code: 640401,
    PCode: 640400,
    Level: 2
},
{
    Item: "原州区",
    Code: 640402,
    PCode: 640400,
    Level: 2
},
{
    Item: "西吉县",
    Code: 640422,
    PCode: 640400,
    Level: 2
},
{
    Item: "隆德县",
    Code: 640423,
    PCode: 640400,
    Level: 2
},
{
    Item: "泾源县",
    Code: 640424,
    PCode: 640400,
    Level: 2
},
{
    Item: "彭阳县",
    Code: 640425,
    PCode: 640400,
    Level: 2
},
{
    Item: "中卫市",
    Code: 640500,
    PCode: 64e4,
    Level: 1
},
{
    Item: "市辖区",
    Code: 640501,
    PCode: 640500,
    Level: 2
},
{
    Item: "沙坡头区",
    Code: 640502,
    PCode: 640500,
    Level: 2
},
{
    Item: "中宁县",
    Code: 640521,
    PCode: 640500,
    Level: 2
},
{
    Item: "海原县",
    Code: 640522,
    PCode: 640500,
    Level: 2
},
{
    Item: "新疆维吾尔自治区",
    Code: 65e4,
    PCode: 0,
    Level: 0
},
{
    Item: "乌鲁木齐市",
    Code: 650100,
    PCode: 65e4,
    Level: 1
},
{
    Item: "市辖区",
    Code: 650101,
    PCode: 650100,
    Level: 2
},
{
    Item: "天山区",
    Code: 650102,
    PCode: 650100,
    Level: 2
},
{
    Item: "沙依巴克区",
    Code: 650103,
    PCode: 650100,
    Level: 2
},
{
    Item: "新市区",
    Code: 650104,
    PCode: 650100,
    Level: 2
},
{
    Item: "水磨沟区",
    Code: 650105,
    PCode: 650100,
    Level: 2
},
{
    Item: "头屯河区",
    Code: 650106,
    PCode: 650100,
    Level: 2
},
{
    Item: "达坂城区",
    Code: 650107,
    PCode: 650100,
    Level: 2
},
{
    Item: "米东区",
    Code: 650109,
    PCode: 650100,
    Level: 2
},
{
    Item: "乌鲁木齐县",
    Code: 650121,
    PCode: 650100,
    Level: 2
},
{
    Item: "克拉玛依市",
    Code: 650200,
    PCode: 65e4,
    Level: 1
},
{
    Item: "市辖区",
    Code: 650201,
    PCode: 650200,
    Level: 2
},
{
    Item: "独山子区",
    Code: 650202,
    PCode: 650200,
    Level: 2
},
{
    Item: "克拉玛依区",
    Code: 650203,
    PCode: 650200,
    Level: 2
},
{
    Item: "白碱滩区",
    Code: 650204,
    PCode: 650200,
    Level: 2
},
{
    Item: "乌尔禾区",
    Code: 650205,
    PCode: 650200,
    Level: 2
},
{
    Item: "吐鲁番市",
    Code: 650400,
    PCode: 65e4,
    Level: 1
},
{
    Item: "高昌区",
    Code: 650402,
    PCode: 650400,
    Level: 2
},
{
    Item: "鄯善县",
    Code: 650421,
    PCode: 650400,
    Level: 2
},
{
    Item: "托克逊县",
    Code: 650422,
    PCode: 650400,
    Level: 2
},
{
    Item: "哈密地区",
    Code: 652200,
    PCode: 65e4,
    Level: 1
},
{
    Item: "哈密市",
    Code: 652201,
    PCode: 652200,
    Level: 2
},
{
    Item: "巴里坤哈萨克自治县",
    Code: 652222,
    PCode: 652200,
    Level: 2
},
{
    Item: "伊吾县",
    Code: 652223,
    PCode: 652200,
    Level: 2
},
{
    Item: "昌吉回族自治州",
    Code: 652300,
    PCode: 65e4,
    Level: 1
},
{
    Item: "昌吉市",
    Code: 652301,
    PCode: 652300,
    Level: 2
},
{
    Item: "阜康市",
    Code: 652302,
    PCode: 652300,
    Level: 2
},
{
    Item: "呼图壁县",
    Code: 652323,
    PCode: 652300,
    Level: 2
},
{
    Item: "玛纳斯县",
    Code: 652324,
    PCode: 652300,
    Level: 2
},
{
    Item: "奇台县",
    Code: 652325,
    PCode: 652300,
    Level: 2
},
{
    Item: "吉木萨尔县",
    Code: 652327,
    PCode: 652300,
    Level: 2
},
{
    Item: "木垒哈萨克自治县",
    Code: 652328,
    PCode: 652300,
    Level: 2
},
{
    Item: "博尔塔拉蒙古自治州",
    Code: 652700,
    PCode: 65e4,
    Level: 1
},
{
    Item: "博乐市",
    Code: 652701,
    PCode: 652700,
    Level: 2
},
{
    Item: "阿拉山口市",
    Code: 652702,
    PCode: 652700,
    Level: 2
},
{
    Item: "精河县",
    Code: 652722,
    PCode: 652700,
    Level: 2
},
{
    Item: "温泉县",
    Code: 652723,
    PCode: 652700,
    Level: 2
},
{
    Item: "巴音郭楞蒙古自治州",
    Code: 652800,
    PCode: 65e4,
    Level: 1
},
{
    Item: "库尔勒市",
    Code: 652801,
    PCode: 652800,
    Level: 2
},
{
    Item: "轮台县",
    Code: 652822,
    PCode: 652800,
    Level: 2
},
{
    Item: "尉犁县",
    Code: 652823,
    PCode: 652800,
    Level: 2
},
{
    Item: "若羌县",
    Code: 652824,
    PCode: 652800,
    Level: 2
},
{
    Item: "且末县",
    Code: 652825,
    PCode: 652800,
    Level: 2
},
{
    Item: "焉耆回族自治县",
    Code: 652826,
    PCode: 652800,
    Level: 2
},
{
    Item: "和静县",
    Code: 652827,
    PCode: 652800,
    Level: 2
},
{
    Item: "和硕县",
    Code: 652828,
    PCode: 652800,
    Level: 2
},
{
    Item: "博湖县",
    Code: 652829,
    PCode: 652800,
    Level: 2
},
{
    Item: "阿克苏地区",
    Code: 652900,
    PCode: 65e4,
    Level: 1
},
{
    Item: "阿克苏市",
    Code: 652901,
    PCode: 652900,
    Level: 2
},
{
    Item: "温宿县",
    Code: 652922,
    PCode: 652900,
    Level: 2
},
{
    Item: "库车县",
    Code: 652923,
    PCode: 652900,
    Level: 2
},
{
    Item: "沙雅县",
    Code: 652924,
    PCode: 652900,
    Level: 2
},
{
    Item: "新和县",
    Code: 652925,
    PCode: 652900,
    Level: 2
},
{
    Item: "拜城县",
    Code: 652926,
    PCode: 652900,
    Level: 2
},
{
    Item: "乌什县",
    Code: 652927,
    PCode: 652900,
    Level: 2
},
{
    Item: "阿瓦提县",
    Code: 652928,
    PCode: 652900,
    Level: 2
},
{
    Item: "柯坪县",
    Code: 652929,
    PCode: 652900,
    Level: 2
},
{
    Item: "克孜勒苏柯尔克孜自治州",
    Code: 653e3,
    PCode: 65e4,
    Level: 1
},
{
    Item: "阿图什市",
    Code: 653001,
    PCode: 653e3,
    Level: 2
},
{
    Item: "阿克陶县",
    Code: 653022,
    PCode: 653e3,
    Level: 2
},
{
    Item: "阿合奇县",
    Code: 653023,
    PCode: 653e3,
    Level: 2
},
{
    Item: "乌恰县",
    Code: 653024,
    PCode: 653e3,
    Level: 2
},
{
    Item: "喀什地区",
    Code: 653100,
    PCode: 65e4,
    Level: 1
},
{
    Item: "喀什市",
    Code: 653101,
    PCode: 653100,
    Level: 2
},
{
    Item: "疏附县",
    Code: 653121,
    PCode: 653100,
    Level: 2
},
{
    Item: "疏勒县",
    Code: 653122,
    PCode: 653100,
    Level: 2
},
{
    Item: "英吉沙县",
    Code: 653123,
    PCode: 653100,
    Level: 2
},
{
    Item: "泽普县",
    Code: 653124,
    PCode: 653100,
    Level: 2
},
{
    Item: "莎车县",
    Code: 653125,
    PCode: 653100,
    Level: 2
},
{
    Item: "叶城县",
    Code: 653126,
    PCode: 653100,
    Level: 2
},
{
    Item: "麦盖提县",
    Code: 653127,
    PCode: 653100,
    Level: 2
},
{
    Item: "岳普湖县",
    Code: 653128,
    PCode: 653100,
    Level: 2
},
{
    Item: "伽师县",
    Code: 653129,
    PCode: 653100,
    Level: 2
},
{
    Item: "巴楚县",
    Code: 653130,
    PCode: 653100,
    Level: 2
},
{
    Item: "塔什库尔干塔吉克自治县",
    Code: 653131,
    PCode: 653100,
    Level: 2
},
{
    Item: "和田地区",
    Code: 653200,
    PCode: 65e4,
    Level: 1
},
{
    Item: "和田市",
    Code: 653201,
    PCode: 653200,
    Level: 2
},
{
    Item: "和田县",
    Code: 653221,
    PCode: 653200,
    Level: 2
},
{
    Item: "墨玉县",
    Code: 653222,
    PCode: 653200,
    Level: 2
},
{
    Item: "皮山县",
    Code: 653223,
    PCode: 653200,
    Level: 2
},
{
    Item: "洛浦县",
    Code: 653224,
    PCode: 653200,
    Level: 2
},
{
    Item: "策勒县",
    Code: 653225,
    PCode: 653200,
    Level: 2
},
{
    Item: "于田县",
    Code: 653226,
    PCode: 653200,
    Level: 2
},
{
    Item: "民丰县",
    Code: 653227,
    PCode: 653200,
    Level: 2
},
{
    Item: "伊犁哈萨克自治州",
    Code: 654e3,
    PCode: 65e4,
    Level: 1
},
{
    Item: "伊宁市",
    Code: 654002,
    PCode: 654e3,
    Level: 2
},
{
    Item: "奎屯市",
    Code: 654003,
    PCode: 654e3,
    Level: 2
},
{
    Item: "霍尔果斯市",
    Code: 654004,
    PCode: 654e3,
    Level: 2
},
{
    Item: "伊宁县",
    Code: 654021,
    PCode: 654e3,
    Level: 2
},
{
    Item: "察布查尔锡伯自治县",
    Code: 654022,
    PCode: 654e3,
    Level: 2
},
{
    Item: "霍城县",
    Code: 654023,
    PCode: 654e3,
    Level: 2
},
{
    Item: "巩留县",
    Code: 654024,
    PCode: 654e3,
    Level: 2
},
{
    Item: "新源县",
    Code: 654025,
    PCode: 654e3,
    Level: 2
},
{
    Item: "昭苏县",
    Code: 654026,
    PCode: 654e3,
    Level: 2
},
{
    Item: "特克斯县",
    Code: 654027,
    PCode: 654e3,
    Level: 2
},
{
    Item: "尼勒克县",
    Code: 654028,
    PCode: 654e3,
    Level: 2
},
{
    Item: "塔城地区",
    Code: 654200,
    PCode: 65e4,
    Level: 1
},
{
    Item: "塔城市",
    Code: 654201,
    PCode: 654200,
    Level: 2
},
{
    Item: "乌苏市",
    Code: 654202,
    PCode: 654200,
    Level: 2
},
{
    Item: "额敏县",
    Code: 654221,
    PCode: 654200,
    Level: 2
},
{
    Item: "沙湾县",
    Code: 654223,
    PCode: 654200,
    Level: 2
},
{
    Item: "托里县",
    Code: 654224,
    PCode: 654200,
    Level: 2
},
{
    Item: "裕民县",
    Code: 654225,
    PCode: 654200,
    Level: 2
},
{
    Item: "和布克赛尔蒙古自治县",
    Code: 654226,
    PCode: 654200,
    Level: 2
},
{
    Item: "阿勒泰地区",
    Code: 654300,
    PCode: 65e4,
    Level: 1
},
{
    Item: "阿勒泰市",
    Code: 654301,
    PCode: 654300,
    Level: 2
},
{
    Item: "布尔津县",
    Code: 654321,
    PCode: 654300,
    Level: 2
},
{
    Item: "富蕴县",
    Code: 654322,
    PCode: 654300,
    Level: 2
},
{
    Item: "福海县",
    Code: 654323,
    PCode: 654300,
    Level: 2
},
{
    Item: "哈巴河县",
    Code: 654324,
    PCode: 654300,
    Level: 2
},
{
    Item: "青河县",
    Code: 654325,
    PCode: 654300,
    Level: 2
},
{
    Item: "吉木乃县",
    Code: 654326,
    PCode: 654300,
    Level: 2
},
{
    Item: "自治区直辖县级行政区划",
    Code: 659e3,
    PCode: 65e4,
    Level: 1
},
{
    Item: "石河子市",
    Code: 659001,
    PCode: 659e3,
    Level: 2
},
{
    Item: "阿拉尔市",
    Code: 659002,
    PCode: 659e3,
    Level: 2
},
{
    Item: "图木舒克市",
    Code: 659003,
    PCode: 659e3,
    Level: 2
},
{
    Item: "五家渠市",
    Code: 659004,
    PCode: 659e3,
    Level: 2
},
{
    Item: "台湾省",
    Code: 71e4,
    PCode: 0,
    Level: 0
},
{
    Item: "香港特别行政区",
    Code: 81e4,
    PCode: 0,
    Level: 0
},
{
    Item: "澳门特别行政区",
    Code: 82e4,
    PCode: 0,
    Level: 0
},
{
    Item: "经开区",
    Code: 410112,
    PCode: 410100,
    Level: 2
}];