export interface User {
  avatar_url: string;
  bio: string;
  blog: string;
  company: null;
  created_at: Date;
  email: null;
  events_url: string;
  followers_url: string;
  followers: number;
  following_url: string;
  following: number;
  gists_url: string;
  gravatar_id: string;
  hireable: null;
  html_url: string;
  id: number;
  location: string;
  login: string;
  name: string;
  node_id: string;
  organizations_url: string;
  public_gists: number;
  public_repos: number;
  received_events_url: string;
  repos_url: string;
  site_admin: boolean;
  starred_url: string;
  subscriptions_url: string;
  twitter_username: null;
  type: string;
  updated_at: Date;
  url: string;
}

export interface Repository {
  allow_forking: boolean;
  archive_url: string;
  archived: boolean;
  assignees_url: string;
  blobs_url: string;
  branches_url: string;
  clone_url: string;
  collaborators_url: string;
  comments_url: string;
  commits_url: string;
  compare_url: string;
  contents_url: string;
  contributors_url: string;
  created_at: Date;
  default_branch: string;
  deployments_url: string;
  description: string;
  disabled: boolean;
  downloads_url: string;
  events_url: string;
  fork: boolean;
  forks_count: number;
  forks_url: string;
  forks: number;
  full_name: string;
  git_commits_url: string;
  git_refs_url: string;
  git_tags_url: string;
  git_url: string;
  has_discussions: boolean;
  has_downloads: boolean;
  has_issues: boolean;
  has_pages: boolean;
  has_projects: boolean;
  has_wiki: boolean;
  homepage: null | string;
  hooks_url: string;
  html_url: string;
  id: number;
  is_template: boolean;
  issue_comment_url: string;
  issue_events_url: string;
  issues_url: string;
  keys_url: string;
  labels_url: string;
  language: null | string;
  languages_url: string;
  license: License | null;
  merges_url: string;
  milestones_url: string;
  mirror_url: null;
  name: string;
  node_id: string;
  notifications_url: string;
  open_issues_count: number;
  open_issues: number;
  owner: Owner;
  private: boolean;
  pulls_url: string;
  pushed_at: Date;
  releases_url: string;
  size: number;
  ssh_url: string;
  stargazers_count: number;
  stargazers_url: string;
  statuses_url: string;
  subscribers_url: string;
  subscription_url: string;
  svn_url: string;
  tags_url: string;
  teams_url: string;
  topics: string[];
  trees_url: string;
  updated_at: Date;
  url: string;
  visibility: string;
  watchers_count: number;
  watchers: number;
  web_commit_signoff_required: boolean;
}

interface License {
  key: string;
  name: string;
  node_id: string;
  spdx_id: string;
  url: string;
}

type Owner = Omit<
  User,
  | 'bio'
  | 'blog'
  | 'company'
  | 'created_at'
  | 'email'
  | 'following'
  | 'hireable'
  | 'location'
  | 'name'
  | 'public_gists'
  | 'public_repos'
  | 'twitter_username'
  | 'updated_at'
>;
