import {reactive, ref} from "vue";
import {
    BACK_HAIR, EYEBROWS, FACE_BLUSH,
    FACE_COLORS, FACE_EYES, FACE_MOUTH, FACE_NOSE,
    GENDER_BGCOLORS,
    HAIR_COLORS, PARTS_ACCESSORIES, PARTS_GLASSES,
    PARTS_FACE,
    PARTS_HAIR,
    NEW_TAG, PARTS_FRAME
} from "@/components/NiceAvatar/types";
import {saveSvgAsPng} from "save-svg-as-png";
import BackHair from "@/components/NiceAvatar/BackHair";
import PartsFace from "@/components/NiceAvatar/PartsFace";
import FaceBlush from "@/components/NiceAvatar/FaceBlush";
import PartsHair from "@/components/NiceAvatar/PartsHair";
import EyeBrows from "@/components/NiceAvatar/EyeBrows";
import FaceEyes from "@/components/NiceAvatar/FaceEyes";
import FaceNose from "@/components/NiceAvatar/FaceNose";
import FaceMouth from "@/components/NiceAvatar/FaceMouth";
import PartsAccessories from "@/components/NiceAvatar/PartsAccessories";
import PartsGlasses from "@/components/NiceAvatar/PartsGlasses";

class Avatar {
    size = 300;
    faceColor = ref(FACE_COLORS[0]);
    hairColor = ref(HAIR_COLORS[0]);
    components = {
        BackHair,
        PartsFace,
        FaceBlush,
        PartsHair,
        EyeBrows,
        FaceEyes,
        FaceMouth,
        PartsAccessories,
        PartsGlasses,
        FaceNose,
    };
    tabChoose = reactive({
        "GenderBgColor": {
            type: "gender",
            typeName: "gender",
            data: GENDER_BGCOLORS,
            color: [],
            nowColor: GENDER_BGCOLORS.btn_genderThird,
            item: GENDER_BGCOLORS.btn_genderThird,
        },
        "PartsFace": {
            type: "image",
            typeName: "face",
            data: Object.values(PARTS_FACE),
            color: FACE_COLORS,
            nowColor: this.faceColor,
            item: PARTS_FACE.FACE_1,
        },
        "PartsHair": {
            type: "image",
            typeName: "hair",
            data: Object.values(PARTS_HAIR),
            color: HAIR_COLORS,
            nowColor: this.hairColor,
            item: PARTS_HAIR.HAIR_1,
            matrix: {
                tx: 0,
                ty: 0,
                unit: 3,
                limit: 15
            }
        },
        "BackHair": {
            type: "image",
            typeName: "backhair",
            data: Object.values(BACK_HAIR),
            color: [],
            nowColor: this.hairColor,
            item: BACK_HAIR.backHair_1,
            matrix: {
                tx: 0,
                ty: 0,
                unit: 3,
                limit: 18
            }
        },
        "EyeBrows": {
            type: "image",
            typeName: "eyebrows",
            data: Object.values(EYEBROWS),
            color: [],
            nowColor: this.hairColor,
            item: EYEBROWS.EYEBROW_1,
            matrix: {
                tx: 0,
                ty: 0,
                unit: 3,
                limit: 15
            }
        },
        "FaceEyes": {
            type: "image",
            typeName: "eyes",
            data: Object.values(FACE_EYES),
            color: [],
            nowColor: this.hairColor,
            item: FACE_EYES.EYE_1,
            matrix: {
                tx: 0,
                ty: 0,
                unit: 3,
                limit: 15
            }
        },
        "FaceNose": {
            type: "image",
            typeName: "nose",
            data: Object.values(FACE_NOSE),
            color: [],
            nowColor: '',
            item: FACE_NOSE.NOSE_1,
            matrix: {
                tx: 0,
                ty: 0,
                unit: 3,
                limit: 9
            }
        },
        "FaceBlush": {
            type: "image",
            typeName: "blush",
            data: Object.values(FACE_BLUSH),
            color: [],
            nowColor: '',
            item: FACE_BLUSH.BLUSH_1,
            matrix: {
                tx: 0,
                ty: 0,
                unit: 3,
                limit: 15
            }

        },
        "FaceMouth": {
            type: "image",
            typeName: "mouth",
            data: Object.values(FACE_MOUTH),
            color: [],
            nowColor: '',
            item: FACE_MOUTH.MOUTH_1,
            matrix: {
                tx: 0,
                ty: 0,
                unit: 3,
                limit: 9
            }
        },
        "PartsAccessories": {
            type: "image",
            typeName: "accessories",
            data: Object.values(PARTS_ACCESSORIES),
            color: [],
            nowColor: '',
            item: PARTS_ACCESSORIES.accessories_1,
            matrix: {
                tx: 0,
                ty: 0,
                unit: 3,
                limit: 15
            }
        },

        "PartsGlasses": {
            type: "image",
            typeName: "glasses",
            data: Object.values(PARTS_GLASSES),
            color: [],
            nowColor: '',
            item: null,
            matrix: {
                tx: 0,
                ty: 0,
                unit: 3,
                limit: 9
            }
        },
        "PartsFrame": {
            type: "frame",
            typeName: "frame",
            data: PARTS_FRAME,
            color: [],
            nowColor: PARTS_FRAME.frame_1,
            item: PARTS_FRAME.frame_1,
        },
    })

    isNewTag(key, newTag) {
        const tags = NEW_TAG[key];
        if (tags) {
            return tags.find((tag) => tag === newTag);
        }

        return '';
    }

    isNewTagTitle(key) {
        const tags = NEW_TAG[key]
        if (tags) {
            return tags.length > 0
        }

        return false;
    }

    random() {
        for (let tab in this.tabChoose) {
            if (tab !== 'GenderBgColor') {
                this.tabChoose[tab].item = this.getRandom(Object.values(this.tabChoose[tab].data))
            }
        }
        this.tabChoose.PartsFace.nowColor = this.getRandom(FACE_COLORS);
        this.tabChoose.BackHair.nowColor = this.getRandom(HAIR_COLORS);
    }

    getRandom(list) {
        return list[Math.floor(Math.random() * list.length)];
    }

    async getPng(avatarDom) {
        const opts = {
            scale: 1,
            encoderOptions: 1,
        };
        const $el = avatarDom.$el;
        return await saveSvgAsPng($el, "nice-avatar", opts);
    }

    setFinish() {
        localStorage.setItem('finishData', JSON.stringify(this.tabChoose));
    }

    getFinish() {
        const finishDataString = localStorage.getItem('finishData')
        if (finishDataString) {
            const finishData = JSON.parse(finishDataString)
            for (const tab in this.tabChoose) {
                this.tabChoose[tab].item = finishData[tab].item
                this.tabChoose[tab].nowColor = finishData[tab].nowColor
            }
        }
    }


    setAvatar = async () => {
        await this.random();
        await this.setFinish();
    }

    intervalFunction = null;
    randomFunction = () => {
        this.intervalFunction = setInterval(() => this.setAvatar(), 60)
    }

    setRandomElement(element) {
        element.addEventListener('mousedown', this.randomFunction)
        element.addEventListener('mouseup', () => clearInterval(this.intervalFunction))
        element.addEventListener('mouseout', () => clearInterval(this.intervalFunction))
    }

    setMatrixY(typeName, isUp = false) {
        const matrix = this.tabChoose[typeName].matrix;
        let next;
        if (isUp) {
            next = matrix.ty - matrix.unit;
        } else {
            next = matrix.ty + matrix.unit;
        }
        if (Math.abs(next) <= matrix.limit) {
            matrix.ty = next;
        }
    }

    setMatrixX(typeName, isLeft = false) {
        const matrix = this.tabChoose[typeName].matrix;
        let next;
        if (isLeft) {
            next = matrix.tx - matrix.unit;
        } else {
            next = matrix.tx + matrix.unit;
        }
        if (Math.abs(next) <= matrix.limit) {
            matrix.tx = next;
        }

    }
}

export default new Avatar()
