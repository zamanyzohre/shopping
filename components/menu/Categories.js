"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";

export default function Categories({ categories }) {
  const router = useRouter();
  const pathName = usePathname();
  const searchParams = useSearchParams();

  function handleClick(id) {
    const params = new URLSearchParams(searchParams);
    params.set("category", id);
    params.delete("page");
    router.replace(`${pathName}?${params.toString()}`);
  }
  return (
    <div className="categories">
      <p>دسته بندی</p>
      {categories &&
        categories.map((categorie) => (
          <ul key={categorie.id}>
            <li
              onClick={() => handleClick(categorie.id)}
              className={
                searchParams.has("category") &&
                searchParams.get("category") == categorie.id
                  ? "filter-list-active cursor-pointer "
                  : "cursor-pointer "
              }
            >
              {categorie.name}
            </li>
          </ul>
        ))}
    </div>
  );
}
