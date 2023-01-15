import { FILTER_VALUE } from "./filter-types";

// export const setFilter = value =>{
//     return {
//         type: FILTER_VALUE,
//         payload: value,
//     }
// }

import { createAction } from '@reduxjs/toolkit';

export const setFilter = createAction(FILTER_VALUE);