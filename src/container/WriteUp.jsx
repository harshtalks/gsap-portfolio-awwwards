const WriteUp = () => {
  const socials = [
    {
      name: "Instagram",
      link: "https://instagram.com/harshtalks"
    },
    {
      name: "Twitter",
      link: "https://twitter.com/harshstalks"
    },
    {
      name: "OnlyFans",
      link:
        "https://www.google.com/search?q=fans&rlz=1C5CHFA_enIN964IN964&sxsrf=AOaemvJq1YzBbZVClXaSCLu6H69yHdtlxw:1640243850055&source=lnms&tbm=isch&sa=X&ved=2ahUKEwiSy5vAsPn0AhVNBt4KHa43BcEQ_AUoAnoECAIQBA&biw=1440&bih=706&dpr=2"
    },
    {
      name: "Spotify",
      link: "https://open.spotify.com/user/ardon_luisa?si=a70eafca87e94a3a"
    }
  ];
  return (
    <div className="writeUp">
      <div className="front__text">
        <p>
          My name is Harsh Pareek and I've been doing Web programming since
          August 2020. Checkout my github page at{" "}
          <a href="https://github.com/harshtalks">@harshtalks</a>. Do not forget
          to leave some stars LOL.
        </p>
        <p>
          Do you listen to Lizzo? You know what, why don't you check{" "}
          <a href="https://moodlist.netlify.app">moodlist</a> right now and see
          what have you listened to the most in recent times.
        </p>
        <p>
          Also If you're looking for a cool little dude to work on thr frontend
          part of your project or need someone for the university level
          Hackathons, please drop me a &hearts;. I need new friends.
        </p>
        <div className="socials">
          {socials.map((el) => {
            return (
              <a key={el} href={el.link}>
                {el.name}
              </a>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default WriteUp;
