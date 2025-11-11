"use client";

import { UserDetailContext } from "@/context/UserDetailContext";
import { api } from "@/convex/_generated/api";
import { useUser } from "@clerk/nextjs";
import { useMutation } from "convex/react";
import React, { useEffect } from "react";

const Provider = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  const { user } = useUser();
  const createUser = useMutation(api.user.createNewUser);
  const [userDetail, setUserDetail] = React.useState<any>(null);

  const createAndGetUser = async () => {
    if (user) {
      const result = await createUser({
        name: user?.fullName ?? "",
        email: user?.primaryEmailAddress?.emailAddress ?? "",
      });
      console.log(result);
        setUserDetail(result);
    }
  };

  useEffect(() => {
    user && createAndGetUser();
  }, [user]);

  return (
    <UserDetailContext.Provider
      value={{
        userDetail,
        setUserDetail,
      }}
    >
      <div>{children}</div>
    </UserDetailContext.Provider>
  );
};

export default Provider;
