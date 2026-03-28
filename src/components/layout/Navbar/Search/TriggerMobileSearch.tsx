import type { Dispatch, RefObject, SetStateAction } from "react";
import { SearchIcon } from "lucide-react";

function TriggerMobileSearch({
  setMobileSearch,
  mobileSearch,
  focusInput,
}: {
  setMobileSearch: Dispatch<SetStateAction<boolean>>;
  mobileSearch: boolean;
  focusInput: RefObject<null | any>;
}) {
  return (
    <button
      onClick={() => setMobileSearch(true)}
      className={`${mobileSearch ? "hidden" : "block"} text-ring`}
    >
      <SearchIcon />
    </button>
  );
}

export default TriggerMobileSearch;
