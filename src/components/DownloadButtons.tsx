import appStoreBadge from "@/assets/images/app-store-badge.svg";
import googlePlayBadge from "@/assets/images/google-play-badge.png";

const APP_STORE_URL = "https://apps.apple.com/us/app/uni-go/id6758922674";
const PLAY_STORE_URL = "https://play.google.com/store/apps/details?id=com.rideunigo.uni.go.prod";

interface StoreButtonProps {
  href?: string;
  className?: string;
}

export const AppStoreButton = ({ href = APP_STORE_URL, className = "" }: StoreButtonProps) => {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" className={`inline-block ${className}`}>
      <img src={appStoreBadge} alt="Download on the App Store" className="h-12 w-auto" />
    </a>
  );
};

export const PlayStoreButton = ({ href = PLAY_STORE_URL, className = "" }: StoreButtonProps) => {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" className={`inline-block ${className}`}>
      <img src={googlePlayBadge} alt="Get it on Google Play" className="h-[68px] w-auto -my-2" />
    </a>
  );
};

export const DownloadButtons = ({ className = "" }: { className?: string }) => {
  return (
    <div className={`flex flex-row items-center gap-4 ${className}`}>
      <AppStoreButton />
      <PlayStoreButton />
    </div>
  );
};
