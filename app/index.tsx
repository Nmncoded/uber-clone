import { useAuth } from "@clerk/clerk-expo";
import { Redirect } from "expo-router";

const Page = () => {
  const { isSignedIn } = useAuth();

  // if (isSignedIn) return <Redirect href="/(root)/(tabs)/home" />;
  // if (isSignedIn) return <Redirect href='/(root)/find-ride' />;
  if (isSignedIn) return <Redirect href='/(root)/confirm-ride' />;

  return <Redirect href="/(auth)/welcome" />;
};

export default Page;