# Setting up Cleanbrowsing on your home devices
## What is Cleanbrowsing?
As per the definition on the website
> A customizable DNS-based service that allows you to control what is accessible on your internet. Used by schools, municipalities, and parents to create safe browsing experiences for kids by controlling access to content like social media, pornography and other content deemed inappropriate.

For your information, DNS means Domain Name System and it is the phonebook of the Internet.

## Getting Cleanbrowsing and setting up profiles

This is how I have set it up (In the links below, you can do `Right-click > Open in New Tab` or `CTRL/Command Click` so as not to lose this page):
- Get the [Basic account](https://cleanbrowsing.org/pricing/)
- Set up [different profiles](https://my.cleanbrowsing.org/dashboard?page=settings&subpage=profiles). For example, I have a default profile (that comes with the account) and a student profile.
- To edit the settings of a profile, choose it from the drop-down on the top right that says `Settings for profile...`
- Here is how I have configured the student profile, in the left navigation
  - For `Categories and Filters`, I have everything blocked except `Academic Fraud`,`Online Radio` and `Social Network`
  - For `Custom Domains`, I have most things blocked except `Skype` and sometimes `Youtube` because some online courses use Youtube videos. Using the moderate or strict filtered of Youtube I found to be counterproductive.

## Hooking your devices to use the filters
Once this is set up, you will need to add each student device to use the DNS of the desired profile.

On both Mac and Windows, I would set the users with a `Standard` account so that they cannot change the Network properties. Another page will follow with more details about this.

### On Mac
- From the Apple menu, select System Preferences. The window shown below appears.
- Click Network. The window shown below appears.
- Select a network interface from the sidebar. ...
- Click Advanced.
- Click the DNS tab. ...
- Click the + button to add a new DNS server. ...(Find the DNS server values from the `Profiles` page of cleanbrowsing)
- Click OK.
- Click Apply.

### On Windows 10
- Open Network and Internet settings in Control Panel.
- Select Change Adapter Settings.
- Right click your Network Adapter and select Properties.
- Select Internet Protocol Version 4 (TCP/IPv4) and then Properties.
- Toggle Use the following DNS server addresses and type in two DNS addresses.(Find the DNS server values from the `Profiles` page of cleanbrowsing)
- Select OK when done.
