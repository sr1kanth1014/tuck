import React from "react";
import "./app.css";

let App = () => {
  return (
    <div className="app">
      <div className="navbar">
        <div>
          <svg
            width="170"
            height="170"
            viewBox="0 0 170 170"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="mainlogo"
          >
            <path
              d="M33.065 38.7281C32.8501 36.5157 33.1004 34.2827 33.7999 32.1727C34.4993 30.0628 35.6324 28.1224 37.1263 26.4764C38.6202 24.8304 40.442 23.5151 42.4745 22.615C44.5069 21.7149 46.7052 21.25 48.9281 21.25H74.375C75.784 21.25 77.1352 21.8097 78.1315 22.806C79.1278 23.8023 79.6875 25.1535 79.6875 26.5625V30.6213C79.6875 38.0162 74.4069 43.18 70.4225 46.2294C69.9429 46.5702 69.529 46.9949 69.2006 47.4831C69.1474 47.5661 69.1046 47.6553 69.0731 47.7487L69.0625 47.8125V47.8444L69.0944 47.9506C69.1369 48.0569 69.2431 48.2481 69.4769 48.5138C70.2899 49.3809 71.2644 50.0811 72.3456 50.575C75.3313 52.0625 79.7937 53.125 85 53.125C90.2275 53.125 94.69 52.0625 97.6437 50.575C98.7288 50.0822 99.7069 49.382 100.523 48.5138C100.699 48.3165 100.84 48.09 100.938 47.8444V47.7487C100.906 47.6553 100.863 47.566 100.81 47.4831C100.482 46.9949 100.068 46.5702 99.5881 46.2294C95.6038 43.18 90.3231 38.0162 90.3231 30.6213V26.5625C90.3231 25.1554 90.8814 23.8057 91.8754 22.8097C92.8694 21.8138 94.2179 21.2528 95.625 21.25H121.072C123.295 21.25 125.493 21.7149 127.526 22.615C129.558 23.5151 131.38 24.8304 132.874 26.4764C134.368 28.1224 135.501 30.0628 136.2 32.1727C136.9 34.2827 137.15 36.5157 136.935 38.7281L134.353 69.0625H136.871C138.943 69.0625 141.334 67.5006 144.043 63.9625C146.274 61.0513 149.653 58.4375 154.062 58.4375C160.098 58.4375 164.124 63.1869 166.324 67.5962C168.693 72.3244 170 78.4869 170 85C170 91.5131 168.693 97.6756 166.324 102.404C164.124 106.813 160.098 111.562 154.062 111.562C149.653 111.562 146.274 108.949 144.043 106.037C141.334 102.499 138.943 100.938 136.871 100.938H134.353L136.935 131.272C137.15 133.484 136.9 135.717 136.2 137.827C135.501 139.937 134.368 141.878 132.874 143.524C131.38 145.17 129.558 146.485 127.526 147.385C125.493 148.285 123.295 148.75 121.072 148.75H95.625C94.216 148.75 92.8648 148.19 91.8685 147.194C90.8722 146.198 90.3125 144.846 90.3125 143.438V139.379C90.3125 131.984 95.5931 126.82 99.5775 123.771C100.057 123.43 100.471 123.005 100.799 122.517C100.853 122.434 100.895 122.345 100.927 122.251L100.938 122.188V122.156C100.84 121.906 100.7 121.676 100.523 121.476C99.7093 120.612 98.7348 119.916 97.6544 119.425C94.6687 117.938 90.2063 116.875 85 116.875C79.7831 116.875 75.31 117.938 72.3562 119.425C71.2711 119.918 70.2929 120.618 69.4769 121.486C69.3009 121.684 69.1607 121.91 69.0625 122.156V122.188L69.0731 122.251C69.1046 122.345 69.1474 122.434 69.2006 122.517C69.3706 122.804 69.7319 123.239 70.4225 123.771C74.4069 126.82 79.6875 131.984 79.6875 139.379V143.438C79.6875 144.846 79.1278 146.198 78.1315 147.194C77.1352 148.19 75.784 148.75 74.375 148.75H48.9281C46.7052 148.75 44.5069 148.285 42.4745 147.385C40.442 146.485 38.6202 145.17 37.1263 143.524C35.6324 141.878 34.4993 139.937 33.7999 137.827C33.1004 135.717 32.8501 133.484 33.065 131.272L35.6575 100.938H33.1287C31.0569 100.938 28.6663 102.499 25.9569 106.037C23.7256 108.949 20.3469 111.562 15.9375 111.562C9.9025 111.562 5.87562 106.813 3.67625 102.404C1.30687 97.6756 0 91.5131 0 85C0 78.4869 1.30687 72.3244 3.67625 67.5962C5.87562 63.1869 9.9025 58.4375 15.9375 58.4375C20.3469 58.4375 23.7256 61.0513 25.9569 63.9625C28.6663 67.5006 31.0569 69.0625 33.1287 69.0625H35.6575L33.065 38.7281ZM48.9281 31.875C48.1852 31.8742 47.4504 32.0293 46.7712 32.3302C46.0919 32.6311 45.4833 33.0711 44.9847 33.6218C44.4861 34.1725 44.1085 34.8216 43.8763 35.5273C43.6442 36.233 43.5626 36.9796 43.6369 37.7188L43.6475 37.7931L46.7287 73.9181C46.792 74.6514 46.7023 75.3899 46.4651 76.0867C46.228 76.7834 45.8487 77.4233 45.3512 77.9658C44.8537 78.5082 44.2489 78.9414 43.5752 79.2377C42.9015 79.5341 42.1735 79.6873 41.4375 79.6875H33.1287C25.7338 79.6875 20.57 74.4069 17.5206 70.4225C17.1798 69.9429 16.7551 69.529 16.2669 69.2006C16.184 69.1473 16.0947 69.1045 16.0013 69.0731L15.9375 69.0625H15.9056C15.6562 69.1593 15.426 69.2996 15.2256 69.4769C14.3623 70.2909 13.6658 71.2653 13.175 72.3456C11.6875 75.3312 10.625 79.7938 10.625 85C10.625 90.2169 11.6875 94.69 13.175 97.6437C13.9187 99.1312 14.6625 100.034 15.2362 100.523C15.4335 100.699 15.66 100.84 15.9056 100.938H15.9375L16.0013 100.927C16.0947 100.896 16.184 100.853 16.2669 100.799C16.7551 100.471 17.1798 100.057 17.5206 99.5775C20.57 95.5931 25.7338 90.3125 33.1287 90.3125H41.4375C42.1726 90.3128 42.8995 90.4657 43.5725 90.7615C44.2454 91.0572 44.8496 91.4894 45.347 92.0306C45.8443 92.5719 46.2239 93.2105 46.4617 93.906C46.6996 94.6015 46.7905 95.3388 46.7287 96.0713L43.6475 132.281C43.5733 133.02 43.6546 133.765 43.8861 134.47C44.1176 135.175 44.4943 135.824 44.9918 136.374C45.4892 136.925 46.0965 137.365 46.7745 137.667C47.4525 137.968 48.1861 138.124 48.9281 138.125H68.8819C68.3719 136.361 66.81 134.385 63.9625 132.207C61.0513 129.976 58.4375 126.597 58.4375 122.188C58.4375 116.152 63.1869 112.126 67.5963 109.926C72.3244 107.557 78.4869 106.25 85 106.25C91.5131 106.25 97.6756 107.557 102.404 109.926C106.813 112.126 111.562 116.152 111.562 122.188C111.562 126.597 108.949 129.976 106.037 132.207C103.19 134.385 101.628 136.351 101.118 138.125H121.072C121.815 138.126 122.55 137.971 123.229 137.67C123.908 137.369 124.517 136.929 125.015 136.378C125.514 135.828 125.892 135.178 126.124 134.473C126.356 133.767 126.437 133.02 126.363 132.281L126.353 132.207L123.271 96.0819C123.208 95.3486 123.298 94.6101 123.535 93.9133C123.772 93.2166 124.151 92.5767 124.649 92.0342C125.146 91.4918 125.751 91.0586 126.425 90.7623C127.099 90.4659 127.826 90.3127 128.562 90.3125H136.871C144.266 90.3125 149.43 95.5931 152.479 99.5775C153.011 100.268 153.446 100.629 153.733 100.799C153.871 100.884 153.956 100.906 153.999 100.927C154.019 100.934 154.041 100.937 154.062 100.938H154.094C154.344 100.84 154.574 100.7 154.774 100.523C155.638 99.7091 156.334 98.7347 156.825 97.6544C158.312 94.6794 159.375 90.2169 159.375 85C159.375 79.7725 158.312 75.31 156.825 72.3563C156.332 71.2712 155.632 70.2931 154.764 69.4769C154.566 69.3011 154.34 69.1608 154.094 69.0625H154.062L153.999 69.0731C153.905 69.1046 153.816 69.1474 153.733 69.2006C153.245 69.529 152.82 69.9429 152.479 70.4225C149.43 74.4069 144.266 79.6875 136.871 79.6875H128.562C127.826 79.6873 127.099 79.5341 126.425 79.2377C125.751 78.9414 125.146 78.5082 124.649 77.9658C124.151 77.4233 123.772 76.7834 123.535 76.0867C123.298 75.3899 123.208 74.6514 123.271 73.9181L126.353 37.7188C126.427 36.9805 126.345 36.2348 126.114 35.5299C125.882 34.8249 125.506 34.1762 125.008 33.6257C124.511 33.0752 123.903 32.635 123.225 32.3334C122.548 32.0319 121.814 31.8757 121.072 31.875H101.118C101.628 33.6388 103.19 35.615 106.037 37.7931C108.949 40.0244 111.562 43.4031 111.562 47.8125C111.562 53.8475 106.813 57.8744 102.404 60.0737C97.6756 62.4431 91.5131 63.75 85 63.75C78.4869 63.75 72.3244 62.4431 67.5963 60.0737C63.1869 57.8744 58.4375 53.8475 58.4375 47.8125C58.4375 43.4031 61.0513 40.0244 63.9625 37.7931C66.81 35.615 68.3719 33.6494 68.8819 31.875H48.9281Z"
              fill="white"
            />
          </svg>
        </div>
        <div>
          <ul className="mainnav">
            <li className="mainnavops">Docs</li>
            <li className="mainnavops">Roadmap</li>
          </ul>
        </div>
      </div>
      <div className="mainsec">
        <div>
          <h1 className="mainheading">Tuck</h1>
          <h2 className="subheading">
            The user comprehensive kit, we've it built for everyone to use it
            everywhere.
          </h2>
        </div>
        <div className="ctabtns">
          <button>Docs</button>
          <button>Join Us</button>
        </div>
      </div>
      <div>
        <div className="footer">
          <ul className="footerops">
            <li className="liops">Source Code:</li>
            <li className="liops">Gitlab</li>
            <li className="liops">Github</li>
            <li className="liops">About</li>
            <li className="liops">© 2021 Bhuvanesh Duvvuri</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default App;