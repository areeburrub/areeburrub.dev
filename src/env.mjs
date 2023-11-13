import {z} from 'zod';
import {createEnv} from "@t3-oss/env-core";

export default createEnv({
    server: {
        RESEND_API_KEY: z.string(),
        SITE_SECRET: z.string(),
    },
    runtimeEnv: {
        RESEND_API_KEY: process.env.RESEND_API_KEY,
        SITE_SECRET: process.env.SITE_SECRET,
    }
});
