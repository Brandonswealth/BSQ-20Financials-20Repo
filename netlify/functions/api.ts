import serverless from "serverless-http";
import express from "express";

import { createServer } from "../../server";

export const handler = serverless(createServer());
