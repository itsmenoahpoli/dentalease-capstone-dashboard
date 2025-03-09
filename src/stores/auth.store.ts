import { atomWithStorage } from "jotai/utils";
import { storeStorage } from "./util";
import { type AuthStoreData } from "@/types/auth";

export const authStoreAtom = atomWithStorage<AuthStoreData>(
  "authData",
  {
    session: undefined,
    token: undefined,
    user: undefined,
  },
  storeStorage<AuthStoreData>()
);
