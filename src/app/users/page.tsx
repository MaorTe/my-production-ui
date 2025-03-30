"use client";

import { useEffect, useState } from "react";
import { fetchUsers } from "../data-fetch/users.service";
import Link from "next/link";

import "./styles.css";
import useStore from "../store/useStore";
import Loader from "@/assets/loader";

export default function UsersPage() {
  const { users, setUsers, setToastData } = useStore();
  const [page, setPage] = useState<number>(1);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    fetchUsers(page)
      .then((fetchedUsers) => {
        setUsers(fetchedUsers);
        setLoading(false);
        setToastData({ message: "Users loaded successfully", display: true });
      })
      .catch((error) => {
        setToastData({ message: error.response.data.title, display: true });
      });
  }, [page]);

  return (
    <div className="users-page">
      {loading ? (
        <Loader />
      ) : (
        users.map((user) => (
          <div className="single-user-item" key={user.id}>
            <Link href={`/users/${user.id}`} className="user-name">
              {user.firstName}
            </Link>

            <img
              src={user.profilePicture}
              className="profile-picture"
              alt={`${user.firstName}'s profile picture`}
            />
          </div>
        ))
      )}

      <div className="pagination-controls">
        {
          <button onClick={() => setPage((current) => current - 1)} disabled={page === 1}>
            ← Previous
          </button>
        }
        <span>Page {page}</span>
        <button onClick={() => setPage((current) => current + 1)}>Next →</button>
      </div>
    </div>
  );
}
