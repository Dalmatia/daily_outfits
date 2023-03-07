import { createStore } from 'vuex';

export default createStore({
    state: {
        item_category: {
            main: '',
            sub: '',
        },
        subCategory: [],
        here: '',
        mainCategories: [
            { id: 1, name: 'トップス' },
            { id: 2, name: 'ジャケット/アウター' },
            { id: 3, name: 'パンツ' },
            { id: 4, name: 'オールインワン・サロペット' },
            { id: 5, name: 'スカート' },
            { id: 6, name: 'ワンピース/ドレス' },
            { id: 7, name: 'フォーマルスーツ/小物' },
            { id: 8, name: 'バッグ' },
            { id: 9, name: 'シューズ' },
            { id: 10, name: 'ファッション雑貨' },
            { id: 11, name: '財布/小物' },
            { id: 12, name: '腕時計' },
            { id: 13, name: 'ヘアアクセサリー' },
            { id: 14, name: 'アクセサリー' },
            { id: 15, name: 'アンダーウェア' },
            { id: 16, name: 'レッグウェア' },
            { id: 17, name: 'ルームウェア' },
            { id: 18, name: '帽子' },
            { id: 19, name: '水着/着物・浴衣' },
            { id: 20, name: 'ママ&ベビー' },
            { id: 21, name: 'インテリア' },
            { id: 22, name: '食器・キッチン' },
            { id: 23, name: '雑貨/ホビー' },
            { id: 24, name: 'PC・スマホグッズ/家電' },
            { id: 25, name: 'スキンケア' },
            { id: 26, name: 'ベースメイク' },
            { id: 27, name: 'メイクアップ' },
            { id: 28, name: 'ビューティーグッズ' },
            { id: 29, name: 'ボディ・ヘアケア' },
            { id: 30, name: 'フレグランス' },
            { id: 31, name: 'アウトドア/スポーツ' },
            { id: 32, name: 'ペットグッズ' },
            { id: 33, name: '音楽/本・雑誌' },
            { id: 34, name: 'その他' },
        ],
        subCategories: [
            { id: 35, main_id: 1, name: 'Tシャツ/カットソー' },
            { id: 36, main_id: 1, name: 'シャツ/ブラウス' },
            { id: 37, main_id: 1, name: 'ビジネスシャツ' },
            { id: 38, main_id: 1, name: 'ポロシャツ' },
            { id: 39, main_id: 1, name: 'ニット/セーター' },
            { id: 40, main_id: 1, name: 'ベスト' },
            { id: 41, main_id: 1, name: 'パーカー' },
            { id: 42, main_id: 1, name: 'スウェット' },
            { id: 43, main_id: 1, name: 'カーディガン/ボレロ' },
            { id: 44, main_id: 1, name: 'アンサンブル' },
            { id: 45, main_id: 1, name: 'ジャージ' },
            { id: 46, main_id: 1, name: 'タンクトップ' },
            { id: 47, main_id: 1, name: 'キャミソール' },
            { id: 48, main_id: 1, name: 'チューブトップ' },
            { id: 49, main_id: 1, name: 'その他トップス' },
            { id: 50, main_id: 2, name: 'テーラードジャケット' },
            { id: 51, main_id: 2, name: 'ノーカラージャケット' },
            { id: 52, main_id: 2, name: 'ノーカラーコート' },
            { id: 53, main_id: 2, name: 'デニムジャケット' },
            { id: 54, main_id: 2, name: 'ライダースジャケット' },
            { id: 55, main_id: 2, name: 'ブルゾン' },
            { id: 56, main_id: 2, name: 'ミリタリージャケット' },
            { id: 57, main_id: 2, name: 'MA-1' },
            { id: 58, main_id: 2, name: 'ダウンジャケット/コート' },
            { id: 59, main_id: 2, name: 'ダウンベスト' },
            { id: 60, main_id: 2, name: 'ダッフルコート' },
            { id: 61, main_id: 2, name: 'モッズコート' },
            { id: 62, main_id: 2, name: 'ピーコート' },
            { id: 63, main_id: 2, name: 'ステンカラーコート' },
            { id: 64, main_id: 2, name: 'トレンチコート' },
            { id: 65, main_id: 2, name: 'チェスターコート' },
            { id: 66, main_id: 2, name: 'ムートンコート' },
            { id: 67, main_id: 2, name: 'ナイロンジャケット' },
            { id: 68, main_id: 2, name: 'マウンテンパーカー' },
            { id: 69, main_id: 2, name: 'スタジャン' },
            { id: 70, main_id: 2, name: 'スカジャン' },
            { id: 71, main_id: 2, name: 'セットアップ' },
            { id: 72, main_id: 2, name: 'カバーオール' },
            { id: 73, main_id: 2, name: 'ポンチョ' },
            { id: 74, main_id: 2, name: 'その他アウター' },
            { id: 75, main_id: 3, name: 'デニムパンツ' },
            { id: 76, main_id: 3, name: 'カーゴパンツ' },
            { id: 77, main_id: 3, name: 'チノパンツ' },
            { id: 78, main_id: 3, name: 'スウェットパンツ' },
            { id: 79, main_id: 3, name: 'スラックス' },
            { id: 80, main_id: 3, name: 'その他パンツ' },
            { id: 81, main_id: 4, name: 'サロペット/オーバーオール' },
            { id: 82, main_id: 4, name: 'つなぎ/オールインワン' },
            { id: 83, main_id: 5, name: 'スカート' },
            { id: 84, main_id: 5, name: 'デニムスカート' },
        ],
    },
    mutations: {
        sub(state, id) {
            state.subCategory = state.subCategories.filter(
                (value) => value.main_id == id
            );
        },
        here(state, id) {
            if (id <= 34) {
                state.here = state.mainCategories.find(
                    (value) => value.id == id
                );
            } else if (id > 34 && id <= 84) {
                state.here = state.subCategories.find(
                    (value) => value.id == id
                );
            }
        },
        category(state, id) {
            if (id <= 34) {
                state.item_category.main = state.mainCategories.find(
                    (value) => value.id == id
                );
            } else if (id > 34 && id <= 84) {
                state.item_category.sub = state.subCategories.find(
                    (value) => value.id == id
                );
                state.item_category.main = state.mainCategories.find(
                    (value) => value.id == state.item_category.sub.main_id
                );
            }
        },
    },
    actions: {
        findSub({ commit }, id) {
            commit('sub', id);
        },
        hereCategory({ commit }, id) {
            commit('here', id);
        },
        item_category({ commit }, id) {
            commit('category', id);
        },
    },
    getters: {
        subCategory(state) {
            return state.subCategory;
        },
        here(state) {
            return state.here;
        },
        category(state) {
            return state.item_category;
        },
    },
});

// import { defineStore } from 'pinia';

// export const useStoreCategory = defineStore('categoryList', {
//     state: () => ({
//         item_category: {
//             main: '',
//             sub: '',
//         },
//         subCategory: [],
//         here: '',
//         mainCategories: [
//             { id: 1, name: 'トップス' },
//             { id: 2, name: 'ジャケット/アウター' },
//             { id: 3, name: 'パンツ' },
//             { id: 4, name: 'オールインワン・サロペット' },
//             { id: 5, name: 'スカート' },
//             { id: 6, name: 'ワンピース/ドレス' },
//             { id: 7, name: 'フォーマルスーツ/小物' },
//             { id: 8, name: 'バッグ' },
//             { id: 9, name: 'シューズ' },
//             { id: 10, name: 'ファッション雑貨' },
//             { id: 11, name: '財布/小物' },
//             { id: 12, name: '腕時計' },
//             { id: 13, name: 'ヘアアクセサリー' },
//             { id: 14, name: 'アクセサリー' },
//             { id: 15, name: 'アンダーウェア' },
//             { id: 16, name: 'レッグウェア' },
//             { id: 17, name: 'ルームウェア' },
//             { id: 18, name: '帽子' },
//             { id: 19, name: '水着/着物・浴衣' },
//             { id: 20, name: 'ママ&ベビー' },
//             { id: 21, name: 'インテリア' },
//             { id: 22, name: '食器・キッチン' },
//             { id: 23, name: '雑貨/ホビー' },
//             { id: 24, name: 'PC・スマホグッズ/家電' },
//             { id: 25, name: 'スキンケア' },
//             { id: 26, name: 'ベースメイク' },
//             { id: 27, name: 'メイクアップ' },
//             { id: 28, name: 'ビューティーグッズ' },
//             { id: 29, name: 'ボディ・ヘアケア' },
//             { id: 30, name: 'フレグランス' },
//             { id: 31, name: 'アウトドア/スポーツ' },
//             { id: 32, name: 'ペットグッズ' },
//             { id: 33, name: '音楽/本・雑誌' },
//             { id: 34, name: 'その他' },
//         ],
//         subCategories: [
//             { id: 35, parent_id: 1, name: 'Tシャツ/カットソー' },
//             { id: 36, parent_id: 1, name: 'シャツ/ブラウス' },
//             { id: 37, parent_id: 1, name: 'ビジネスシャツ' },
//             { id: 38, parent_id: 1, name: 'ポロシャツ' },
//             { id: 39, parent_id: 1, name: 'ニット/セーター' },
//             { id: 40, parent_id: 1, name: 'ベスト' },
//             { id: 41, parent_id: 1, name: 'パーカー' },
//             { id: 42, parent_id: 1, name: 'スウェット' },
//             { id: 43, parent_id: 1, name: 'カーディガン/ボレロ' },
//             { id: 44, parent_id: 1, name: 'アンサンブル' },
//             { id: 45, parent_id: 1, name: 'ジャージ' },
//             { id: 46, parent_id: 1, name: 'タンクトップ' },
//             { id: 47, parent_id: 1, name: 'キャミソール' },
//             { id: 48, parent_id: 1, name: 'チューブトップ' },
//             { id: 49, parent_id: 1, name: 'その他トップス' },
//             { id: 50, parent_id: 2, name: 'テーラードジャケット' },
//             { id: 51, parent_id: 2, name: 'ノーカラージャケット' },
//             { id: 52, parent_id: 2, name: 'ノーカラーコート' },
//             { id: 53, parent_id: 2, name: 'デニムジャケット' },
//             { id: 54, parent_id: 2, name: 'ライダースジャケット' },
//             { id: 55, parent_id: 2, name: 'ブルゾン' },
//             { id: 56, parent_id: 2, name: 'ミリタリージャケット' },
//             { id: 57, parent_id: 2, name: 'MA-1' },
//             { id: 58, parent_id: 2, name: 'ダウンジャケット/コート' },
//             { id: 59, parent_id: 2, name: 'ダウンベスト' },
//             { id: 60, parent_id: 2, name: 'ダッフルコート' },
//             { id: 61, parent_id: 2, name: 'モッズコート' },
//             { id: 62, parent_id: 2, name: 'ピーコート' },
//             { id: 63, parent_id: 2, name: 'ステンカラーコート' },
//             { id: 64, parent_id: 2, name: 'トレンチコート' },
//             { id: 65, parent_id: 2, name: 'チェスターコート' },
//             { id: 66, parent_id: 2, name: 'ムートンコート' },
//             { id: 67, parent_id: 2, name: 'ナイロンジャケット' },
//             { id: 68, parent_id: 2, name: 'マウンテンパーカー' },
//             { id: 69, parent_id: 2, name: 'スタジャン' },
//             { id: 70, parent_id: 2, name: 'スカジャン' },
//             { id: 71, parent_id: 2, name: 'セットアップ' },
//             { id: 72, parent_id: 2, name: 'カバーオール' },
//             { id: 73, parent_id: 2, name: 'ポンチョ' },
//             { id: 74, parent_id: 2, name: 'その他アウター' },
//             { id: 75, parent_id: 3, name: 'デニムパンツ' },
//             { id: 76, parent_id: 3, name: 'カーゴパンツ' },
//             { id: 77, parent_id: 3, name: 'チノパンツ' },
//             { id: 78, parent_id: 3, name: 'スウェットパンツ' },
//             { id: 79, parent_id: 3, name: 'スラックス' },
//             { id: 80, parent_id: 3, name: 'その他パンツ' },
//         ],
//     }),
//     actions: {
//         categorySelect() {
//             state.subCategory = state.subCategories.filter(
//                 (value) => value.main_id == id
//             );
//         },
//         hereCategory() {
//             if (id <= 34) {
//                 state.here = state.mainCategories.find(
//                     (value) => value.id == id
//                 );
//             } else if (id > 34 && id <= 80) {
//                 state.here = state.subCategories.find(
//                     (value) => value.id == id
//                 );
//             }
//         },
//         item_category() {
//             if (id <= 34) {
//                 state.item_category.main = state.mainCategories.find(
//                     (value) => value.id == id
//                 );
//             } else if (id > 34 && id <= 80) {
//                 state.item_category.sub = state.subCategories.find(
//                     (value) => value.id == id
//                 );
//                 state.item_category.main = state.mainCategories.find(
//                     (value) => value.id == state.item_category.sub.main_id
//                 );
//             }
//         },
//     },
//     getters: {
//         subCategory: (state) => state.subCategory,
//         here: (state) => state.here,
//         category: (state) => state.item_category,
//     },
// });
