import { S3Client } from '@aws-sdk/client-s3';
import { fromWebToken } from '@aws-sdk/credential-providers';
import { getUserInfo } from '@utils';
import { useEffect, useState } from 'react';

export const useS3Client = (region: string, roleArn: string) => {
    const [s3Client, setS3Client] = useState<S3Client | null>(null),
        { idToken } = getUserInfo();

    useEffect(() => {
        const credentials =
            roleArn &&
            fromWebToken({
                roleArn,
                webIdentityToken: idToken
            });
        credentials && setS3Client(new S3Client({ region, credentials }));
    }, [idToken, region, roleArn]);

    return s3Client;
};
