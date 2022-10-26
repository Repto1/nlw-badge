const linksSocialMedia = {
  github: 'Repto1',
  youtube: 'UCCHdqJ0NbM_2ZDQscTFpd4g',
  linkedin: 'repto1',
  instagram: 'reptodm',
  twitter: 'repto_1'
}

function changeSocialMediaLinks() {
  for (let li of socialLinks.children) {
    const social = li.getAttribute('class')

    li.children[0].href = `https://${social}.com/${linksSocialMedia[social]}`
  }
}

changeSocialMediaLinks()

function getGithubProfileInfos() {
  const url = `https://api.github.com/user/${linksSocialMedia.github}`

  fetch(url)
    .then(response => response.json())
    .then(data => {
      userName.textContent = data.name
      userBio.textContent = data.bio
      userLink.href = data.html_url
      userImage.src = data.avatar_url
      userLogin.textContent = data.login
    })
}

getGithubProfileInfos()
