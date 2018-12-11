import {ACTION_GLOSSARY_GET_ITEM, ACTION_GLOSSARY_GET_LIST, GLOSSARY_CARD_CREATED} from '../actions/glossary.constants';

export const glossary = (state = [], action = {}) => {
    const {payload} = action;
    switch (action.type) {
        case ACTION_GLOSSARY_GET_LIST:
            return payload.glossaries;
        case ACTION_GLOSSARY_GET_ITEM: {
            const glossary = payload.glossary;
            let found = false;
            let result = state.map(stateGlossary => {
                if (stateGlossary.id === glossary.id) {
                    found = true;
                    return glossary;
                } else {
                    return stateGlossary;
                }

            });
            if (!found) {
                result = [...result, glossary];
            }
            return result;
        }
        case GLOSSARY_CARD_CREATED: {
            const {glossaryCard} = payload;
            return state.map(glossary => {
                if (glossary.id !== glossaryCard.glossary_id) {
                    return glossary;
                } else {
                    return ({
                        ...glossary,
                        cards: [...glossary.cards, glossaryCard]
                    })
                }
            });
        }
        default:
            return state;
    }
};