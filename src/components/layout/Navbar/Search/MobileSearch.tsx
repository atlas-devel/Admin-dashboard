import { useRef, useState } from "react";
import TriggerMobileSearch from "./TriggerMobileSearch";
import DisplayMobileSearch from "./DisplayMobileSearch";

function MobileSearch() {
  const [mobileSearch, setMobileSearch] = useState<boolean>(false);
  const focusInput = useRef<null | any>(null);

  return (
    <div className="md:hidden ml-auto">
      <TriggerMobileSearch
        setMobileSearch={setMobileSearch}
        mobileSearch={mobileSearch}
        focusInput={focusInput}
      />
      <DisplayMobileSearch
        mobileSearch={mobileSearch}
        focusInput={focusInput}
      />
    </div>
  );
}

export default MobileSearch;
