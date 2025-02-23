export type WorkspaceProps = {
  data: {
    subscription: {
      plan: "FREE" | "PRO";
    } | null;
    workspace: {
      id: string;
      name: string;
      type: "PUBLIC" | "PERSONAL";
    }[];
    members: {
      Workspace: {
        id: string;
        name: string;
        type: "PUBLIC" | "PERSONAL";
      };
    }[];
  };
};

export type NotificationsProps = {
  status: number;
  data: {
    _count: {
      notification: number;
    };
  };
};

export type PlanProps = {
  status: number;
  data: {
    subscription: {
      plan: "PRO" | "FREE";
    } | null;
  };
};

export type FoldersProps = {
  status: number;
  data: ({
    _count: {
      videos: number;
    };
  } & {
    id: string;
    name: string;
    createdAt: Date;
    workspaceId: string | null;
  })[];
};

export type FolderProps = {
  status: number;
  data: {
    name: string;
    _count: {
      videos: number;
    };
  };
};

export type VideosProps = {
  status: number;
  data: {
    User: {
      username: string | null;
      profileImage: string | null;
    } | null;
    id: string;
    processing: boolean;
    Folder: {
      id: string;
      name: string;
    } | null;
    createdAt: Date;
    title: string | null;
    source: string;
  }[];
};
export type VideoProps = {
  status: number;
  data: {
    User: {
      username: string | null;
      profileImage: string | null;
      id: string;
      trial: boolean;
      subscription: {
        plan: "FRO" | "FREE";
      } | null;
    } | null;
    title: string | null;
    description: string | null;
    source: string;
    views: number;
    createdAt: Date;
    processing: boolean;
    summery: string;
  };
  author: boolean;
};

export type VideoCardProps = {
  User: {
    username: string | null;
    profileImage: string | null;
  } | null;
  id: string;
  Folder: {
    id: string;
    name: string;
  } | null;
  createdAt: Date;
  title: string | null;
  source: string;
  processing: boolean;
  workspaceId: string;
};

export type NotificationProps = {
  status: number;
  data: {
    notification: {
      id: string;
      userId: string | null;
      content: string;
    }[];
  };
};

export type CommentRepliesProps = {
  id: string;
  comment: string;
  createdAt: Date;
  commentId: string | null;
  userId: string | null;
  videoId: string | null;
  User: {
    id: string;
    email: string;
    username: string | null;
    createdAt: Date;
    profileImage: string | null;
    trial: boolean;
    firstView: boolean;
  } | null;
};

export type CommentCardProps = {
  comment: string;
  author: {
    profileImage: string | null | undefined;
    username: string | null | undefined;
  };
  videoId: string;
  commentId?: string;
  reply: CommentRepliesProps[];
  isReply?: boolean;
};

export type VideoCommentProps = {
  data: {
    User: {
      id: string;
      email: string;
      username: string | null;
      createdAt: Date;
      profileImage: string | null;
      trial: boolean;
      firstView: boolean;
    } | null;
    reply: CommentRepliesProps[];
    id: string;
    comment: string;
    createdAt: Date;
    commentId: string | null;
    userId: string | null;
    videoId: string | null;
  }[];
};
