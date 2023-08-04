export interface IDetail {
  id: string;
  name: string;
  stargazerCount: number;
  pushedAt: string;
  owner: IOwner;
  url: string;
  languages: string[];
  shortDescription: string;
}

interface ILanguage {
  name: string;
}

interface IOwner {
  avatarUrl: string;
  login: string;
  url: string;
}

type TDetailRepositoryResponse = Omit<
  IDetail,
  'languages' | 'shortDescription'
> & {
  shortDescriptionHTML: string;
  languages: {
    items: ILanguage[];
  };
};

export interface IDetailResponse {
  repository: TDetailRepositoryResponse;
}
