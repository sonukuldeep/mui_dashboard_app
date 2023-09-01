/// <reference types="vite/client" />

type Params = {
  row: {
    thumbnail: string;
    visibility: string;
    monetization: string;
  };
};

type Rows = {
  id: string;
  thumbnail: string;
  visibility: string;
  monetization: string;
  views: string;
  comments: string;
};
