/*
 Copyright (c) 2013-2017 by Tawi Jordan - ๖ۣۜĐJ - ɴᴇᴏɴ - TFL
 
 Permission to use this software for any purpose without fee is hereby granted, provided
 that the above copyright notice and this permission notice appear in all copies.
 
 Permission to copy and/or edit this software or parts of it for any purpose is permitted,
 provided that the following points are followed.
 - The above copyright notice and this permission notice appear in all copies
 - Within two (2) days after modification is proven working, any modifications are send back
   to the original authors to be inspected with the goal of inclusion in the official software
 - Any edited version are only test versions and not permitted to be run as a final product
 - Any edited version aren't to be distributed
 - Any edited version have the prerelease version set to something that can be distinguished
   from a version used in the original software
 
 
 TERMS OF REPRODUCTION USE
 
 Failure to follow these terms will result in me getting very angry at you
 and having your software tweaked or removed if possible. Either way, you're
 still an idiot for not following such a basic rule.
 THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHORS DISCLAIMS ALL WARRANTIES WITH REGARD TO THIS SOFTWARE
 INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHORS
 BE LIABLE FOR ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER
 RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
 OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 

 * @Author:    Tawi Jordan - ๖ۣۜĐJ - ɴᴇᴏɴ - TFL (Member. on Plug.dj)
 
 
 * [NOTE]: THERE IS NOTHING HERE FOR YOU! COPYING ANY PART OF THIS SCRIPT AND USING "IT" or "AS" (yours) 
 *         WELL SERIOUSLY GET YOU TO FACE THE CONSEQUENCES!
 */
 
 
var path = 'http://pastebin.com/raw.php?i=';

function message(contents) {
        var msg = '<div class="mention is-you"><i class="icon icon-chat-admin"></i><span class="from admin">Plugwoot™ </span><span href="http://chillout-lounge.webs.com/" class="text">&nbsp;' + contents + '</span></div>';
        $('#chat-messages').append(msg);
}
 
var scriptFail = window.setTimeout(function() {
  message('Oops! An Error Occurred');
  //message('Sorry plugwoot alpha is updating! :(');
  }, 2000);

 if(window.location.hostname === "plug.dj"){
 $.getScript(path + 'wwm3cyi8',function() {
  message("Alpha version "+ PlugStation.version +" is now running!");
  console.log("Plugwoot Alpha "+ PlugStation.version +" - Created by ๖ۣۜĐل - ɴᴇᴏɴ - TFL");
 window.clearTimeout(scriptFail);
 });
 }else{
  alert("This script can only be functioned at http://plug.dj/communities/");
 }
