
    export type RemoteKeys = 'remote/remote-content';
    type PackageType<T> = T extends 'remote/remote-content' ? typeof import('remote/remote-content') :any;