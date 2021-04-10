import React from "react";
import { defaultPageData } from "./constants";

const PageDataContext = React.createContext(defaultPageData);
export const PageDataProvider = PageDataContext.Provider
export default PageDataContext

