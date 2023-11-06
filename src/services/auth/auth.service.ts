import authServiceClient from ".";

const getUserById = async (req: { params: { id: string } }) => {
  try {
    const { id } = req.params;
    const user = await new Promise((resolve, reject) => {
      authServiceClient.GetUserById({ id }, (err: any, res: any) => {
        if (err) {
          reject(err);
        }
        resolve(res?.user);
      });
    });
    return user;
  } catch (error) {}
};

const authService = {
  getUserById,
};

export default authService;
