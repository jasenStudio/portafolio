export interface RepositorioResponse {
  id:                          number;
  name:                        string;
  full_name:                   string;
  description:                 null | string;
  url:                         string;
  created_at:                  Date;
  pushed_at:                   Date;
  git_url:                     string;
  clone_url:                   string;
  language:                    Language | null;
  topics:                      any[];
  homepage:                    string;
}

export enum Language {
  JavaScript = "JavaScript",
  TypeScript = "TypeScript",
}

