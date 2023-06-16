import { logIn, overview } from "../../utils/pathutils";
import CustomizableAppBar from "../CustomizableAppBar";
import AppBarButtonData from "../buttons/AppBarButtonData";


export default function OverviewAppBar({ children }) {
  let i = 1
  let appBarButtonsData = [
    new AppBarButtonData(i++, "Overview", overview ),
    // new AppBarButtonData(i++, "B", logIn ),
    // new AppBarButtonData(i++, "C", logIn ),
    // new AppBarButtonData(i++, "D", logIn ),
  ];

  return (
    <CustomizableAppBar
    buttonsData={appBarButtonsData}>
      {children}
    </CustomizableAppBar>
  );
}
