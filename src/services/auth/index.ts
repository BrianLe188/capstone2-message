import { ProtoGrpcType } from "../../generated/auth";
import { AUTH_PROTO_PATH } from "../../protos";
import { credentials, loadPackageDefinition } from "@grpc/grpc-js";
import { loadSync } from "@grpc/proto-loader";

const authPackageDefinition = loadSync(AUTH_PROTO_PATH);
const authService = loadPackageDefinition(
  authPackageDefinition
) as unknown as ProtoGrpcType;

const authServiceClient = new authService.auth.Auth(
  process.env.AUTH_GRPC as string,
  credentials.createInsecure()
);

export default authServiceClient;
