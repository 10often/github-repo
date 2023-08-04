import { IDetail, IDetailResponse } from '../index';

export const mapDetail = (detail: IDetailResponse): IDetail => {
  const langList: string[] = detail.repository.languages.items.map(
    (item) => item.name
  );

  return {
    id: detail.repository.id,
    name: detail.repository.name,
    stargazerCount: detail.repository.stargazerCount,
    pushedAt: detail.repository.pushedAt,
    owner: detail.repository.owner,
    url: detail.repository.url,
    languages: langList,
    shortDescription: detail.repository.shortDescriptionHTML,
  };
};
