import React from "react";
import { useNavigate } from "react-router-dom";
import { useAtom } from "jotai";
import { authStoreAtom } from "@/stores";
import { WEB_ROUTES } from "@/constants";

export const useAuth = () => {
  const navigate = useNavigate();
  const [authData] = useAtom(authStoreAtom);

  const isUserAuthenticated = React.useCallback(() => {
    const { session, token } = authData;
    return Boolean(session !== undefined && token !== undefined);
  }, [authData]);

  const checkAuthData = React.useCallback(() => {
    if (!isUserAuthenticated()) {
      navigate(WEB_ROUTES.AUTH.SIGNIN, { replace: true });
    }
  }, [navigate, isUserAuthenticated]);

  return {
    authToken: authData.token,
    sessionId: authData.session,
    userInfo: authData.user,
    userName: authData.user?.name,
    isUserAuthenticated,
    checkAuthData,
  };
};
