import { AxiosError } from "axios";
import { useNavigate } from "react-router-dom";
import { useAtom } from "jotai";
import { useApi } from "@/hooks";
import { authStoreAtom } from "@/stores";
import { WEB_ROUTES } from "@/constants";
import { type SigninCredentials } from "@/types/auth";

export const useAuthService = () => {
  const navigate = useNavigate();
  const { $baseApi } = useApi();
  const [, setAuthData] = useAtom(authStoreAtom);

  const signinCredentials = async (
    credentials: SigninCredentials,
    setLoading: React.Dispatch<React.SetStateAction<boolean>>
  ) => {
    return await $baseApi
      .post("/auth/signin", credentials)
      .then((response) => {
        const { session, token, user } = response.data;

        // if (!account_enabled) {
        //   return alert("Sorry, your account is disabled");
        // }

        setAuthData({
          session,
          token,
          user,
        });

        setTimeout(() => {
          navigate(WEB_ROUTES.DASHBOARD.OVERVIEW);
        }, 1500);
      })
      .catch((error) => {
        setLoading(false);
        if (error instanceof AxiosError) {
          if (error.response?.status === 401) {
            return alert("Invalid sign-in credentials");
          }
        }
      });
  };

  return {
    signinCredentials,
  };
};
