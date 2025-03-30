"use client";

import React, { use, useEffect, useState } from "react";
import useStore from "../../store/useStore";
import { fetchUser } from "@/app/data-fetch/users.service";
import Loader from "@/assets/loader";

interface Params {
  userId: string;
}

interface UserPageProps {
  params: Promise<Params>;
}

export default function page({ params }: UserPageProps) {
  const { userId } = use(params);
  const { users, setUsers, setToastData } = useStore();
  const [user, setUser] = useState<any>(null);

  useEffect(() => {
    const foundUserInStore = users.find((user) => user.id === userId);

    if (!foundUserInStore) {
      fetchUser(userId)
        .then((user) => {
          setUsers([...users, user]);
          setUser(user);
          setToastData({ message: "User loaded successfully", display: true });
        })
        .catch((error) => {
          setToastData({ message: error.response.data.title, display: true });
        });

      return;
    }

    setUser(foundUserInStore);
  }, [userId]);

  return !user ? (
    <Loader />
  ) : (
    <div>
      <p>{user.firstName}</p> <img src={user.profilePicture} alt={`${user.firstName}'s profile`} />
      <p>{user.lastName}</p>
      <p>{user.email}</p>
      <p>{user.dateOfBirth}</p>
      <p>{user.phone}</p>
      <p>{user.address}</p>
    </div>
  );
}
