
import React from 'react'
import Image from 'next/image'








function index() {


  return (
    <div>
      <div className="flex justify-center  bg-gray-300 w-screen h-min">
        <div className="grid grid-cols-1 grid-rows-10 justify-items-stretch  items-center bg-gray-50 w-4/5 h-min my-6 rounded-xl shadow-lg  pt-10 pb-8" >

          <div className="justify-self-center ">
            <Image

              src="/logo.png"
              width={186}
              height={75}
            />
          </div>
          <div className="justify-self-center w-64 flex flex-col justify-center pb-8 ">
            <p>เราอยากให้คุณลองมองย้อนกลับไปทบทวนสิ่งที่ผ่านมา
              ในช่วงที่เราได้ทำงานร่วมกัน มีอะไรเกิดขึ้นบ้าง
              <br />งานที่คุณได้รับ การทำงานของคุณ <br />เป็นไปตามที่คุณคาดหวังไว้หรือไม่
              <br />อะไรที่ทำแล้วรู้สึกดี มีพลัง <br />หรือมีอะไรที่ทำให้รู้สึกอึดอัดบ้างหรือไม่
              เราอยากให้คุณช่วยตอบคำถามด้านล่างนี้
              เพื่อที่เราจะได้เรียนรู้ <br />และเติบโตไปด้วยกัน :)
            </p>
          </div>

          

          <form className=" justify-self-center  w-11/12 " action="https://docs.google.com/forms/u/0/d/e/1FAIpQLSc5-bsmsg4KJDmluRD_DbUBL0vH_he1Vz47M4fHt2a4W0hNGg/formResponse" method="post" >
          <p className="text-red-600 justify-end" >* required</p><br />
            <div className="bg-transparent mb-10" >
              <h3>เพื่อนๆ เรียกคุณว่าอะไร</h3><p className="text-red-600">*</p>
              <input required type="text" className="  w-11/12 h-12 border-b-2 border-b-orange-600 focus:outline-none pl-4 pr-4   bg-transparent quantumWizTextinputPaperinputInput exportInput __web-inspector-hide-shortcut__" name="entry.2099007098" placeholder="Your Answer" />
            </div>

            <h1>ส่วนที่ 1 : ทบทวนการทำงานในปีที่ผ่านมา</h1>
            <div className="bg-transparent mt-4">
              <h3>คุณทำงานในตำแหน่งใด</h3><p className="text-red-600">*</p>
              <input required type="text" className="w-11/12 h-12 border-b-2 border-b-orange-600 focus:outline-none pl-4 pr-4   bg-transparent quantumWizTextinputPaperinputInput exportInput __web-inspector-hide-shortcut__" name="entry.352420318" placeholder="Your Answer" />
            </div>

            <div className="bg-transparent mt-4">
              <h3>บทบาทในทีม หากเทียบกับตำแหน่งในกีฬาฟุตบอลแล้ว คุณอยู่ในตำแหน่งใด ? เพราะอะไร ?</h3><p className="text-red-600">*</p>
              <textarea required className="w-11/12 h-16 border-b-2 border-b-orange-600 focus:outline-none pl-4 pr-4  bg-transparent  quantumWizTextinputPapertextareaInput exportTextarea " placeholder="Your Answer" jsname="YPqjbf" data-rows="1" tabIndex="0" aria-label="Your answer" jscontroller="gZjhIf" jsaction="input:Lg5SV;ti6hGc:XMgOHc;rcuQ6b:WYd;" dir="auto" data-initial-dir="auto" aria-labelledby="i39" aria-describedby="i40 i41" badinput="false" name="entry.1665001835"></textarea>
            </div>
            <center>
              <div className="  bg-transparent mb-5 mt-5">
                <h3>คุณรู้สึกภูมิใจในตัวเองระดับใด ?</h3>
                <p className="text-red-600">*</p>
                <div className="flex w-max" >
                  <div className="md:flex items-end hidden">ไม่ภูมิใจเลย</div>

                  <div className="grid grid-cols-1 grid-rows-2  w-8" >
                    <div className="grid grid-cols-1 grid-rows-1"><label className="justify-self-center " >1</label></div>
                    <div className="grid grid-cols-1 grid-rows-1 p-1" ><input className=" justify-self-center  w-6 h-6" type="radio" name="entry.1711959127" value="1" /></div>
                  </div>

                  <div className="grid grid-cols-1 grid-rows-2  w-8" >
                    <div className="grid grid-cols-1 grid-rows-1"><label className="justify-self-center " htmlFor="2">2</label></div>
                    <div className="grid grid-cols-1 grid-rows-1 p-1"><input className="justify-self-center w-6 h-6 " type="radio" name="entry.1711959127" value="2" /></div>
                  </div>

                  <div className="grid grid-cols-1 grid-rows-2  w-8" >
                    <div className="grid grid-cols-1 grid-rows-1"><label className="justify-self-center " htmlFor="3">3</label></div>
                    <div className="grid grid-cols-1 grid-rows-1 p-1"><input className="justify-self-center w-6 h-6 " type="radio" name="entry.1711959127" value="3" /></div>
                  </div>

                  <div className="grid grid-cols-1 grid-rows-2  w-8" >
                    <div className="grid grid-cols-1 grid-rows-1"><label className="justify-self-center " htmlFor="4">4</label></div>
                    <div className="grid grid-cols-1 grid-rows-1 p-1" ><input className="justify-self-center w-6 h-6" type="radio" name="entry.1711959127" value="4" /></div>
                  </div>

                  <div className="grid grid-cols-1 grid-rows-2  w-8" >
                    <div className="grid grid-cols-1 grid-rows-1"><label className="justify-self-center " htmlFor="5">5</label></div>
                    <div className="grid grid-cols-1 grid-rows-1 p-1"><input className="justify-self-center w-6 h-6 " type="radio" name="entry.1711959127" value="5" /></div>
                  </div>

                  <div className="grid grid-cols-1 grid-rows-2  w-8" >
                    <div className="grid grid-cols-1 grid-rows-1"><label className="justify-self-center " htmlFor="6">6</label></div>
                    <div className="grid grid-cols-1 grid-rows-1 p-1"><input className="justify-self-center w-6 h-6" type="radio" name="entry.1711959127" value="6" /></div>
                  </div>

                  <div className="grid grid-cols-1 grid-rows-2  w-8" >
                    <div className="grid grid-cols-1 grid-rows-1"><label className="justify-self-center " htmlFor="7">7</label></div>
                    <div className="grid grid-cols-1 grid-rows-1 p-1" ><input className="justify-self-center w-6 h-6" type="radio" name="entry.1711959127" value="7" /></div>
                  </div>

                  <div className="grid grid-cols-1 grid-rows-2  w-8" >
                    <div className="grid grid-cols-1 grid-rows-1"><label className="justify-self-center " htmlFor="8">8</label></div>
                    <div className="grid grid-cols-1 grid-rows-1 p-1"><input className="justify-self-center w-6 h-6" type="radio" name="entry.1711959127" value="8" /></div>
                  </div>

                  <div className="grid grid-cols-1 grid-rows-2  w-8" >
                    <div className="grid grid-cols-1 grid-rows-1"><label className="justify-self-center " htmlFor="9">9</label></div>
                    <div className="grid grid-cols-1 grid-rows-1 p-1"><input className="justify-self-center w-6 h-6" type="radio" name="entry.1711959127" value="9" /></div>
                  </div>

                  <div className="grid grid-cols-1 grid-rows-2  w-8" >
                    <div className="grid grid-cols-1 grid-rows-1"><label className="justify-self-center " htmlFor="10">10</label></div>
                    <div className="grid grid-cols-1 grid-rows-1 p-1"><input className="justify-self-center w-6 h-6 " type="radio" name="entry.1711959127" value="10" /></div>
                  </div>
                  <div className="md:flex items-end hidden">ภูมิใจมากที่สุด</div>
                </div>
              </div>
            </center>




            <h3 className="mt-8">ในปีที่ผ่านมาคุณทำงานใดไปบ้าง ?</h3>
            <p className="text-gray-500">เตรียมเผื่อไว้ให้เติม 10 task แต่ไม่จำเป็นต้องกรอกครบ หรือถ้าไม่พอแจ้งให้เพิ่มได้</p>
            <p className="text-red-600">*</p>
            <div className="mb-4 bg-white  rounded-3xl shadow-xl p-1">
              <div className="flex justify-center  h-fit">
                <div className="lg:flex flex-2col ">
                  <div className="flex flex-col ">
                    <label>Task/Project 1 งานที่ทำคืออะไร</label>
                    <textarea className="mr-2 w-64 h-20 border-b-2 border-b-orange-600 focus:outline-none pl-4 pr-4 bg-transparent  " placeholder="Your Answer" type="text" name="entry.1796343255"></textarea>
                  </div>
                  <div className="flex flex-col ">
                    <label>คุณใช้เวลากับงานนี้กี่เปอร์เซ็นต์จากงานทั้งหมด</label>
                    <input className="w-64 h-20 border-b-2 border-b-orange-600 focus:outline-none pl-4 pr-4 bg-transparent  " placeholder="Your Answer" type="text" name="entry.1915041039" />
                  </div>
                </div>
              </div>
              <div className="flex flex-col">
                <div className=" flex flex-col mb-2 mt-2 ">
                  <center><p>ความพึงพอใจกับงานนี้</p></center>
                  <div className="flex justify-center  " >
                    <div className="lg:flex items-end hidden ">ไม่ถนัด-ไม่ชอบ-ใช้เวลา</div>

                    <div className="grid grid-cols-1 grid-rows-2  w-8" >

                      <div className="grid grid-cols-1 grid-rows-1"><label className="justify-self-center " >1</label></div>
                      <div className="grid grid-cols-1 grid-rows-1 p-1" ><input className="justify-self-center w-6 h-6" type="radio" name="entry.1991908279" value="1" /></div>


                    </div>

                    <div className="grid grid-cols-1 grid-rows-2  w-8" >
                      <div className="grid grid-cols-1 grid-rows-1"><label className="justify-self-center " htmlFor="2">2</label></div>
                      <div className="grid grid-cols-1 grid-rows-1 p-1"><input className="justify-self-center w-6 h-6 " type="radio" name="entry.1991908279" value="2" /></div>
                    </div>

                    <div className="grid grid-cols-1 grid-rows-2  w-8" >
                      <div className="grid grid-cols-1 grid-rows-1"><label className="justify-self-center " htmlFor="3">3</label></div>
                      <div className="grid grid-cols-1 grid-rows-1 p-1"><input className="justify-self-center w-6 h-6 " type="radio" name="entry.1991908279" value="3" /></div>
                    </div>

                    <div className="grid grid-cols-1 grid-rows-2  w-8" >
                      <div className="grid grid-cols-1 grid-rows-1"><label className="justify-self-center " htmlFor="4">4</label></div>
                      <div className="grid grid-cols-1 grid-rows-1 p-1" ><input className="justify-self-center w-6 h-6" type="radio" name="entry.1991908279" value="4" /></div>
                    </div>

                    <div className="grid grid-cols-1 grid-rows-2  w-8" >
                      <div className="grid grid-cols-1 grid-rows-1"><label className="justify-self-center " htmlFor="5">5</label></div>
                      <div className="grid grid-cols-1 grid-rows-1 p-1"><input className="justify-self-center w-6 h-6 " type="radio" name="entry.1991908279" value="5" /></div>
                    </div>

                    <div className="grid grid-cols-1 grid-rows-2  w-8" >
                      <div className="grid grid-cols-1 grid-rows-1"><label className="justify-self-center " htmlFor="6">6</label></div>
                      <div className="grid grid-cols-1 grid-rows-1 p-1"><input className="justify-self-center w-6 h-6" type="radio" name="entry.1991908279" value="6" /></div>
                    </div>

                    <div className="grid grid-cols-1 grid-rows-2  w-8" >
                      <div className="grid grid-cols-1 grid-rows-1"><label className="justify-self-center " htmlFor="7">7</label></div>
                      <div className="grid grid-cols-1 grid-rows-1 p-1" ><input className="justify-self-center w-6 h-6 " type="radio" name="entry.1991908279" value="7" /></div>
                    </div>

                    <div className="grid grid-cols-1 grid-rows-2  w-8" >
                      <div className="grid grid-cols-1 grid-rows-1"><label className="justify-self-center " htmlFor="8">8</label></div>
                      <div className="grid grid-cols-1 grid-rows-1 p-1"><input className="justify-self-center w-6 h-6 " type="radio" name="entry.1991908279" value="8" /></div>
                    </div>

                    <div className="grid grid-cols-1 grid-rows-2  w-8" >
                      <div className="grid grid-cols-1 grid-rows-1"><label className="justify-self-center " htmlFor="9">9</label></div>
                      <div className="grid grid-cols-1 grid-rows-1 p-1"><input className="justify-self-center w-6 h-6 " type="radio" name="entry.1991908279" value="9" /></div>
                    </div>

                    <div className="grid grid-cols-1 grid-rows-2  w-8" >
                      <div className="grid grid-cols-1 grid-rows-1"><label className="justify-self-center " htmlFor="10">10</label></div>
                      <div className="grid grid-cols-1 grid-rows-1 p-1"><input className="justify-self-center w-6 h-6 " type="radio" name="entry.1991908279" value="10" /></div>
                    </div>
                    <div className="lg:flex items-end hidden ">ถนัด-ชอบ-ทำได้ไว</div>
                  </div>
                </div>
              </div>


              <div className="lg:flex  flex-2col justify-center">
                <div className="flex flex-col mr-4">
                  <div><label><br />ทำไมจึงรู้สึกแบบนั้น</label></div>
                  <div><textarea className="md:w-72 w-64 border-b-2 border-b-orange-600 focus:outline-none pl-4 pr-4 bg-transparent h-24 quantumWizTextinputPapertextareaInput exportTextarea " jsname="YPqjbf" data-rows="1" aria-label="Your answer" jscontroller="gZjhIf" jsaction="input:Lg5SV;ti6hGc:XMgOHc;rcuQ6b:WYd;" dir="auto" data-initial-dir="auto" aria-labelledby="i39" aria-describedby="i40 i41" badinput="false" name="entry.1944189668" placeholder="Your Answer"></textarea></div>
                </div>
                <div className="flex flex-col ">
                  <label className="w-80">ถ้าคะแนนน้อยกว่า 6 หรือรู้สึกอยากพัฒนา คิดว่าอยากปรับปรุงหรือพัฒนาให้ดีขึ้นอย่างไร</label>
                  <div><textarea className="md:w-72 w-64  border-b-2 border-b-orange-600 focus:outline-none pl-4 pr-4  bg-transparent h-24 quantumWizTextinputPapertextareaInput exportTextarea " jsname="YPqjbf" data-rows="1" aria-label="Your answer" jscontroller="gZjhIf" jsaction="input:Lg5SV;ti6hGc:XMgOHc;rcuQ6b:WYd;" dir="auto" data-initial-dir="auto" aria-labelledby="i39" aria-describedby="i40 i41" badinput="false" name="entry.956188120" placeholder="Your Answer"></textarea></div>
                </div>
              </div>
            </div>

            <div className="mb-4 bg-white  rounded-3xl shadow-xl p-1">
              <div className="flex justify-center  h-fit">
                <div className="lg:flex flex-2col ">
                  <div className="flex flex-col ">
                    <label>Task/Project 2 งานที่ทำคืออะไร</label>
                    <textarea className="mr-2 w-64 h-20 border-b-2 border-b-orange-600 focus:outline-none pl-4 pr-4 bg-transparent  " placeholder="Your Answer" type="text" name="entry.435432244"></textarea>
                  </div>
                  <div className="flex flex-col ">
                    <label>คุณใช้เวลากับงานนี้กี่เปอร์เซ็นต์จากงานทั้งหมด</label>
                    <input className="w-64 h-20 border-b-2 border-b-orange-600 focus:outline-none pl-4 pr-4 bg-transparent  " placeholder="Your Answer" type="text" name="entry.2098581185" />
                  </div>
                </div>
              </div>
              <div className="flex flex-col">
                <div className=" flex flex-col mb-2 mt-2 ">
                  <center><p>ความพึงพอใจกับงานนี้</p></center>
                  <div className="flex justify-center  " >
                    <div className="lg:flex items-end hidden ">ไม่ถนัด-ไม่ชอบ-ใช้เวลา</div>

                    <div className="grid grid-cols-1 grid-rows-2  w-8" >
                      <div className="grid grid-cols-1 grid-rows-1"><label className="justify-self-center " >1</label></div>
                      <div className="grid grid-cols-1 grid-rows-1 p-1" ><input className="justify-self-center w-6 h-6" type="radio" name="entry.1140167113" value="1" /></div>
                    </div>

                    <div className="grid grid-cols-1 grid-rows-2  w-8" >
                      <div className="grid grid-cols-1 grid-rows-1"><label className="justify-self-center " htmlFor="2">2</label></div>
                      <div className="grid grid-cols-1 grid-rows-1 p-1"><input className="justify-self-center w-6 h-6 " type="radio" name="entry.1140167113" value="2" /></div>
                    </div>

                    <div className="grid grid-cols-1 grid-rows-2  w-8" >
                      <div className="grid grid-cols-1 grid-rows-1"><label className="justify-self-center " htmlFor="3">3</label></div>
                      <div className="grid grid-cols-1 grid-rows-1 p-1"><input className="justify-self-center w-6 h-6 " type="radio" name="entry.1140167113" value="3" /></div>
                    </div>

                    <div className="grid grid-cols-1 grid-rows-2  w-8" >
                      <div className="grid grid-cols-1 grid-rows-1"><label className="justify-self-center " htmlFor="4">4</label></div>
                      <div className="grid grid-cols-1 grid-rows-1 p-1" ><input className="justify-self-center w-6 h-6" type="radio" name="entry.1140167113" value="4" /></div>
                    </div>

                    <div className="grid grid-cols-1 grid-rows-2  w-8" >
                      <div className="grid grid-cols-1 grid-rows-1"><label className="justify-self-center " htmlFor="5">5</label></div>
                      <div className="grid grid-cols-1 grid-rows-1 p-1"><input className="justify-self-center w-6 h-6 " type="radio" name="entry.1140167113" value="5" /></div>
                    </div>

                    <div className="grid grid-cols-1 grid-rows-2  w-8" >
                      <div className="grid grid-cols-1 grid-rows-1"><label className="justify-self-center " htmlFor="6">6</label></div>
                      <div className="grid grid-cols-1 grid-rows-1 p-1"><input className="justify-self-center w-6 h-6" type="radio" name="entry.1140167113" value="6" /></div>
                    </div>

                    <div className="grid grid-cols-1 grid-rows-2  w-8" >
                      <div className="grid grid-cols-1 grid-rows-1"><label className="justify-self-center " htmlFor="7">7</label></div>
                      <div className="grid grid-cols-1 grid-rows-1 p-1" ><input className="justify-self-center w-6 h-6 " type="radio" name="entry.1140167113" value="7" /></div>
                    </div>

                    <div className="grid grid-cols-1 grid-rows-2  w-8" >
                      <div className="grid grid-cols-1 grid-rows-1"><label className="justify-self-center " htmlFor="8">8</label></div>
                      <div className="grid grid-cols-1 grid-rows-1 p-1"><input className="justify-self-center w-6 h-6 " type="radio" name="entry.1140167113" value="8" /></div>
                    </div>

                    <div className="grid grid-cols-1 grid-rows-2  w-8" >
                      <div className="grid grid-cols-1 grid-rows-1"><label className="justify-self-center " htmlFor="9">9</label></div>
                      <div className="grid grid-cols-1 grid-rows-1 p-1"><input className="justify-self-center w-6 h-6 " type="radio" name="entry.1140167113" value="9" /></div>
                    </div>

                    <div className="grid grid-cols-1 grid-rows-2  w-8" >
                      <div className="grid grid-cols-1 grid-rows-1"><label className="justify-self-center " htmlFor="10">10</label></div>
                      <div className="grid grid-cols-1 grid-rows-1 p-1"><input className="justify-self-center w-6 h-6 " type="radio" name="entry.1140167113" value="10" /></div>
                    </div>
                    <div className="lg:flex items-end hidden ">ถนัด-ชอบ-ทำได้ไว</div>
                  </div>
                </div>
              </div>


              <div className="lg:flex  flex-2col justify-center">
                <div className="flex flex-col mr-4">
                  <div><label><br />ทำไมจึงรู้สึกแบบนั้น</label></div>
                  <div><textarea className="md:w-72 w-64 border-b-2 border-b-orange-600 focus:outline-none pl-4 pr-4 bg-transparent h-24 quantumWizTextinputPapertextareaInput exportTextarea " jsname="YPqjbf" data-rows="1" aria-label="Your answer" jscontroller="gZjhIf" jsaction="input:Lg5SV;ti6hGc:XMgOHc;rcuQ6b:WYd;" dir="auto" data-initial-dir="auto" aria-labelledby="i39" aria-describedby="i40 i41" badinput="false" name="entry.625594278" placeholder="Your Answer"></textarea></div>
                </div>
                <div className="flex flex-col ">
                  <label className="w-80">ถ้าคะแนนน้อยกว่า 6 หรือรู้สึกอยากพัฒนา คิดว่าอยากปรับปรุงหรือพัฒนาให้ดีขึ้นอย่างไร</label>
                  <div><textarea className="md:w-72 w-64  border-b-2 border-b-orange-600 focus:outline-none pl-4 pr-4  bg-transparent h-24 quantumWizTextinputPapertextareaInput exportTextarea " jsname="YPqjbf" data-rows="1" aria-label="Your answer" jscontroller="gZjhIf" jsaction="input:Lg5SV;ti6hGc:XMgOHc;rcuQ6b:WYd;" dir="auto" data-initial-dir="auto" aria-labelledby="i39" aria-describedby="i40 i41" badinput="false" name="entry.1156266615" placeholder="Your Answer"></textarea></div>
                </div>
              </div>
            </div>

            <div className="mb-4 bg-white  rounded-3xl shadow-xl p-1">
              <div className="flex justify-center  h-fit">
                <div className="lg:flex flex-2col ">
                  <div className="flex flex-col ">
                    <label>Task/Project 3 งานที่ทำคืออะไร</label>
                    <textarea className="mr-2 w-64 h-20 border-b-2 border-b-orange-600 focus:outline-none pl-4 pr-4 bg-transparent  " placeholder="Your Answer" type="text" name="entry.310428063"></textarea>
                  </div>
                  <div className="flex flex-col ">
                    <label>คุณใช้เวลากับงานนี้กี่เปอร์เซ็นต์จากงานทั้งหมด</label>
                    <input className="w-64 h-20 border-b-2 border-b-orange-600 focus:outline-none pl-4 pr-4 bg-transparent  " placeholder="Your Answer" type="text" name="entry.872286154" />
                  </div>
                </div>
              </div>
              <div className="flex flex-col">
                <div className=" flex flex-col mb-2 mt-2 ">
                  <center><p>ความพึงพอใจกับงานนี้</p></center>
                  <div className="flex justify-center  " >
                    <div className="lg:flex items-end hidden ">ไม่ถนัด-ไม่ชอบ-ใช้เวลา</div>

                    <div className="grid grid-cols-1 grid-rows-2  w-8" >
                      <div className="grid grid-cols-1 grid-rows-1"><label className="justify-self-center " >1</label></div>
                      <div className="grid grid-cols-1 grid-rows-1 p-1" ><input className="justify-self-center w-6 h-6" type="radio" name="entry.1481754467" value="1" /></div>
                    </div>

                    <div className="grid grid-cols-1 grid-rows-2  w-8" >
                      <div className="grid grid-cols-1 grid-rows-1"><label className="justify-self-center " htmlFor="2">2</label></div>
                      <div className="grid grid-cols-1 grid-rows-1 p-1"><input className="justify-self-center w-6 h-6 " type="radio" name="entry.1481754467" value="2" /></div>
                    </div>

                    <div className="grid grid-cols-1 grid-rows-2  w-8" >
                      <div className="grid grid-cols-1 grid-rows-1"><label className="justify-self-center " htmlFor="3">3</label></div>
                      <div className="grid grid-cols-1 grid-rows-1 p-1"><input className="justify-self-center w-6 h-6 " type="radio" name="entry.1481754467" value="3" /></div>
                    </div>

                    <div className="grid grid-cols-1 grid-rows-2  w-8" >
                      <div className="grid grid-cols-1 grid-rows-1"><label className="justify-self-center " htmlFor="4">4</label></div>
                      <div className="grid grid-cols-1 grid-rows-1 p-1" ><input className="justify-self-center w-6 h-6" type="radio" name="entry.1481754467" value="4" /></div>
                    </div>

                    <div className="grid grid-cols-1 grid-rows-2  w-8" >
                      <div className="grid grid-cols-1 grid-rows-1"><label className="justify-self-center " htmlFor="5">5</label></div>
                      <div className="grid grid-cols-1 grid-rows-1 p-1"><input className="justify-self-center w-6 h-6 " type="radio" name="entry.1481754467" value="5" /></div>
                    </div>

                    <div className="grid grid-cols-1 grid-rows-2  w-8" >
                      <div className="grid grid-cols-1 grid-rows-1"><label className="justify-self-center " htmlFor="6">6</label></div>
                      <div className="grid grid-cols-1 grid-rows-1 p-1"><input className="justify-self-center w-6 h-6" type="radio" name="entry.1481754467" value="6" /></div>
                    </div>

                    <div className="grid grid-cols-1 grid-rows-2  w-8" >
                      <div className="grid grid-cols-1 grid-rows-1"><label className="justify-self-center " htmlFor="7">7</label></div>
                      <div className="grid grid-cols-1 grid-rows-1 p-1" ><input className="justify-self-center w-6 h-6 " type="radio" name="entry.1481754467" value="7" /></div>
                    </div>

                    <div className="grid grid-cols-1 grid-rows-2  w-8" >
                      <div className="grid grid-cols-1 grid-rows-1"><label className="justify-self-center " htmlFor="8">8</label></div>
                      <div className="grid grid-cols-1 grid-rows-1 p-1"><input className="justify-self-center w-6 h-6 " type="radio" name="entry.1481754467" value="8" /></div>
                    </div>

                    <div className="grid grid-cols-1 grid-rows-2  w-8" >
                      <div className="grid grid-cols-1 grid-rows-1"><label className="justify-self-center " htmlFor="9">9</label></div>
                      <div className="grid grid-cols-1 grid-rows-1 p-1"><input className="justify-self-center w-6 h-6 " type="radio" name="entry.1481754467" value="9" /></div>
                    </div>

                    <div className="grid grid-cols-1 grid-rows-2  w-8" >
                      <div className="grid grid-cols-1 grid-rows-1"><label className="justify-self-center " htmlFor="10">10</label></div>
                      <div className="grid grid-cols-1 grid-rows-1 p-1"><input className="justify-self-center w-6 h-6 " type="radio" name="entry.1481754467" value="10" /></div>
                    </div>
                    <div className="lg:flex items-end hidden ">ถนัด-ชอบ-ทำได้ไว</div>
                  </div>
                </div>
              </div>


              <div className="lg:flex  flex-2col justify-center">
                <div className="flex flex-col mr-4">
                  <div><label><br />ทำไมจึงรู้สึกแบบนั้น</label></div>
                  <div><textarea className="md:w-72 w-64 border-b-2 border-b-orange-600 focus:outline-none pl-4 pr-4 bg-transparent h-24 quantumWizTextinputPapertextareaInput exportTextarea " jsname="YPqjbf" data-rows="1" aria-label="Your answer" jscontroller="gZjhIf" jsaction="input:Lg5SV;ti6hGc:XMgOHc;rcuQ6b:WYd;" dir="auto" data-initial-dir="auto" aria-labelledby="i39" aria-describedby="i40 i41" badinput="false" name="entry.1450272133" placeholder="Your Answer"></textarea></div>
                </div>
                <div className="flex flex-col ">
                  <label className="w-80">ถ้าคะแนนน้อยกว่า 6 หรือรู้สึกอยากพัฒนา คิดว่าอยากปรับปรุงหรือพัฒนาให้ดีขึ้นอย่างไร</label>
                  <div><textarea className="md:w-72 w-64  border-b-2 border-b-orange-600 focus:outline-none pl-4 pr-4  bg-transparent h-24 quantumWizTextinputPapertextareaInput exportTextarea " jsname="YPqjbf" data-rows="1" aria-label="Your answer" jscontroller="gZjhIf" jsaction="input:Lg5SV;ti6hGc:XMgOHc;rcuQ6b:WYd;" dir="auto" data-initial-dir="auto" aria-labelledby="i39" aria-describedby="i40 i41" badinput="false" name="entry.660729767" placeholder="Your Answer"></textarea></div>
                </div>
              </div>
            </div>

            <div className="mb-4 bg-white  rounded-3xl shadow-xl p-1">
              <div className="flex justify-center  h-fit">
                <div className="lg:flex flex-2col ">
                  <div className="flex flex-col ">
                    <label>Task/Project 4 งานที่ทำคืออะไร</label>
                    <textarea className="mr-2 w-64 h-20 border-b-2 border-b-orange-600 focus:outline-none pl-4 pr-4 bg-transparent  " placeholder="Your Answer" type="text" name="entry.1411964664"></textarea>
                  </div>
                  <div className="flex flex-col ">
                    <label>คุณใช้เวลากับงานนี้กี่เปอร์เซ็นต์จากงานทั้งหมด</label>
                    <input className="w-64 h-20 border-b-2 border-b-orange-600 focus:outline-none pl-4 pr-4 bg-transparent  " placeholder="Your Answer" type="text" name="entry.974010564" />
                  </div>
                </div>
              </div>
              <div className="flex flex-col">
                <div className=" flex flex-col mb-2 mt-2 ">
                  <center><p>ความพึงพอใจกับงานนี้</p></center>
                  <div className="flex justify-center  " >
                    <div className="lg:flex items-end hidden ">ไม่ถนัด-ไม่ชอบ-ใช้เวลา</div>

                    <div className="grid grid-cols-1 grid-rows-2  w-8" >
                      <div className="grid grid-cols-1 grid-rows-1"><label className="justify-self-center " >1</label></div>
                      <div className="grid grid-cols-1 grid-rows-1 p-1" ><input className="justify-self-center w-6 h-6" type="radio" name="entry.971341012" value="1" /></div>
                    </div>

                    <div className="grid grid-cols-1 grid-rows-2  w-8" >
                      <div className="grid grid-cols-1 grid-rows-1"><label className="justify-self-center " htmlFor="2">2</label></div>
                      <div className="grid grid-cols-1 grid-rows-1 p-1"><input className="justify-self-center w-6 h-6 " type="radio" name="entry.971341012" value="2" /></div>
                    </div>

                    <div className="grid grid-cols-1 grid-rows-2  w-8" >
                      <div className="grid grid-cols-1 grid-rows-1"><label className="justify-self-center " htmlFor="3">3</label></div>
                      <div className="grid grid-cols-1 grid-rows-1 p-1"><input className="justify-self-center w-6 h-6 " type="radio" name="entry.971341012" value="3" /></div>
                    </div>

                    <div className="grid grid-cols-1 grid-rows-2  w-8" >
                      <div className="grid grid-cols-1 grid-rows-1"><label className="justify-self-center " htmlFor="4">4</label></div>
                      <div className="grid grid-cols-1 grid-rows-1 p-1" ><input className="justify-self-center w-6 h-6" type="radio" name="entry.971341012" value="4" /></div>
                    </div>

                    <div className="grid grid-cols-1 grid-rows-2  w-8" >
                      <div className="grid grid-cols-1 grid-rows-1"><label className="justify-self-center " htmlFor="5">5</label></div>
                      <div className="grid grid-cols-1 grid-rows-1 p-1"><input className="justify-self-center w-6 h-6 " type="radio" name="entry.971341012" value="5" /></div>
                    </div>

                    <div className="grid grid-cols-1 grid-rows-2  w-8" >
                      <div className="grid grid-cols-1 grid-rows-1"><label className="justify-self-center " htmlFor="6">6</label></div>
                      <div className="grid grid-cols-1 grid-rows-1 p-1"><input className="justify-self-center w-6 h-6" type="radio" name="entry.971341012" value="6" /></div>
                    </div>

                    <div className="grid grid-cols-1 grid-rows-2  w-8" >
                      <div className="grid grid-cols-1 grid-rows-1"><label className="justify-self-center " htmlFor="7">7</label></div>
                      <div className="grid grid-cols-1 grid-rows-1 p-1" ><input className="justify-self-center w-6 h-6 " type="radio" name="entry.971341012" value="7" /></div>
                    </div>

                    <div className="grid grid-cols-1 grid-rows-2  w-8" >
                      <div className="grid grid-cols-1 grid-rows-1"><label className="justify-self-center " htmlFor="8">8</label></div>
                      <div className="grid grid-cols-1 grid-rows-1 p-1"><input className="justify-self-center w-6 h-6 " type="radio" name="entry.971341012" value="8" /></div>
                    </div>

                    <div className="grid grid-cols-1 grid-rows-2  w-8" >
                      <div className="grid grid-cols-1 grid-rows-1"><label className="justify-self-center " htmlFor="9">9</label></div>
                      <div className="grid grid-cols-1 grid-rows-1 p-1"><input className="justify-self-center w-6 h-6 " type="radio" name="entry.971341012" value="9" /></div>
                    </div>

                    <div className="grid grid-cols-1 grid-rows-2  w-8" >
                      <div className="grid grid-cols-1 grid-rows-1"><label className="justify-self-center " htmlFor="10">10</label></div>
                      <div className="grid grid-cols-1 grid-rows-1 p-1"><input className="justify-self-center w-6 h-6 " type="radio" name="entry.971341012" value="10" /></div>
                    </div>
                    <div className="lg:flex items-end hidden ">ถนัด-ชอบ-ทำได้ไว</div>
                  </div>
                </div>
              </div>


              <div className="lg:flex  flex-2col justify-center">
                <div className="flex flex-col mr-4">
                  <div><label><br />ทำไมจึงรู้สึกแบบนั้น</label></div>
                  <div><textarea className="md:w-72 w-64 border-b-2 border-b-orange-600 focus:outline-none pl-4 pr-4 bg-transparent h-24 quantumWizTextinputPapertextareaInput exportTextarea " jsname="YPqjbf" data-rows="1" aria-label="Your answer" jscontroller="gZjhIf" jsaction="input:Lg5SV;ti6hGc:XMgOHc;rcuQ6b:WYd;" dir="auto" data-initial-dir="auto" aria-labelledby="i39" aria-describedby="i40 i41" badinput="false" name="entry.2069702110" placeholder="Your Answer"></textarea></div>
                </div>
                <div className="flex flex-col ">
                  <label className="w-80">ถ้าคะแนนน้อยกว่า 6 หรือรู้สึกอยากพัฒนา คิดว่าอยากปรับปรุงหรือพัฒนาให้ดีขึ้นอย่างไร</label>
                  <div><textarea className="md:w-72 w-64  border-b-2 border-b-orange-600 focus:outline-none pl-4 pr-4  bg-transparent h-24 quantumWizTextinputPapertextareaInput exportTextarea " jsname="YPqjbf" data-rows="1" aria-label="Your answer" jscontroller="gZjhIf" jsaction="input:Lg5SV;ti6hGc:XMgOHc;rcuQ6b:WYd;" dir="auto" data-initial-dir="auto" aria-labelledby="i39" aria-describedby="i40 i41" badinput="false" name="entry.131544969" placeholder="Your Answer"></textarea></div>
                </div>
              </div>
            </div>

            <div className="mb-4 bg-white  rounded-3xl shadow-xl p-1">
              <div className="flex justify-center  h-fit">
                <div className="lg:flex flex-2col ">
                  <div className="flex flex-col ">
                    <label>Task/Project 5 งานที่ทำคืออะไร</label>
                    <textarea className="mr-2 w-64 h-20 border-b-2 border-b-orange-600 focus:outline-none pl-4 pr-4 bg-transparent  " placeholder="Your Answer" type="text" name="entry.306035277"></textarea>
                  </div>
                  <div className="flex flex-col ">
                    <label>คุณใช้เวลากับงานนี้กี่เปอร์เซ็นต์จากงานทั้งหมด</label>
                    <input className="w-64 h-20 border-b-2 border-b-orange-600 focus:outline-none pl-4 pr-4 bg-transparent  " placeholder="Your Answer" type="text" name="entry.1465288387" />
                  </div>
                </div>
              </div>
              <div className="flex flex-col">
                <div className=" flex flex-col mb-2 mt-2 ">
                  <center><p>ความพึงพอใจกับงานนี้</p></center>
                  <div className="flex justify-center  " >
                    <div className="lg:flex items-end hidden ">ไม่ถนัด-ไม่ชอบ-ใช้เวลา</div>

                    <div className="grid grid-cols-1 grid-rows-2  w-8" >
                      <div className="grid grid-cols-1 grid-rows-1"><label className="justify-self-center " >1</label></div>
                      <div className="grid grid-cols-1 grid-rows-1 p-1" ><input className="justify-self-center w-6 h-6" type="radio" name="entry.142966751" value="1" /></div>
                    </div>

                    <div className="grid grid-cols-1 grid-rows-2  w-8" >
                      <div className="grid grid-cols-1 grid-rows-1"><label className="justify-self-center " htmlFor="2">2</label></div>
                      <div className="grid grid-cols-1 grid-rows-1 p-1"><input className="justify-self-center w-6 h-6 " type="radio" name="entry.142966751" value="2" /></div>
                    </div>

                    <div className="grid grid-cols-1 grid-rows-2  w-8" >
                      <div className="grid grid-cols-1 grid-rows-1"><label className="justify-self-center " htmlFor="3">3</label></div>
                      <div className="grid grid-cols-1 grid-rows-1 p-1"><input className="justify-self-center w-6 h-6 " type="radio" name="entry.142966751" value="3" /></div>
                    </div>

                    <div className="grid grid-cols-1 grid-rows-2  w-8" >
                      <div className="grid grid-cols-1 grid-rows-1"><label className="justify-self-center " htmlFor="4">4</label></div>
                      <div className="grid grid-cols-1 grid-rows-1 p-1" ><input className="justify-self-center w-6 h-6" type="radio" name="entry.142966751" value="4" /></div>
                    </div>

                    <div className="grid grid-cols-1 grid-rows-2  w-8" >
                      <div className="grid grid-cols-1 grid-rows-1"><label className="justify-self-center " htmlFor="5">5</label></div>
                      <div className="grid grid-cols-1 grid-rows-1 p-1"><input className="justify-self-center w-6 h-6 " type="radio" name="entry.142966751" value="5" /></div>
                    </div>

                    <div className="grid grid-cols-1 grid-rows-2  w-8" >
                      <div className="grid grid-cols-1 grid-rows-1"><label className="justify-self-center " htmlFor="6">6</label></div>
                      <div className="grid grid-cols-1 grid-rows-1 p-1"><input className="justify-self-center w-6 h-6" type="radio" name="entry.142966751" value="6" /></div>
                    </div>

                    <div className="grid grid-cols-1 grid-rows-2  w-8" >
                      <div className="grid grid-cols-1 grid-rows-1"><label className="justify-self-center " htmlFor="7">7</label></div>
                      <div className="grid grid-cols-1 grid-rows-1 p-1" ><input className="justify-self-center w-6 h-6 " type="radio" name="entry.142966751" value="7" /></div>
                    </div>

                    <div className="grid grid-cols-1 grid-rows-2  w-8" >
                      <div className="grid grid-cols-1 grid-rows-1"><label className="justify-self-center " htmlFor="8">8</label></div>
                      <div className="grid grid-cols-1 grid-rows-1 p-1"><input className="justify-self-center w-6 h-6 " type="radio" name="entry.142966751" value="8" /></div>
                    </div>

                    <div className="grid grid-cols-1 grid-rows-2  w-8" >
                      <div className="grid grid-cols-1 grid-rows-1"><label className="justify-self-center " htmlFor="9">9</label></div>
                      <div className="grid grid-cols-1 grid-rows-1 p-1"><input className="justify-self-center w-6 h-6 " type="radio" name="entry.142966751" value="9" /></div>
                    </div>

                    <div className="grid grid-cols-1 grid-rows-2  w-8" >
                      <div className="grid grid-cols-1 grid-rows-1"><label className="justify-self-center " htmlFor="10">10</label></div>
                      <div className="grid grid-cols-1 grid-rows-1 p-1"><input className="justify-self-center w-6 h-6 " type="radio" name="entry.142966751" value="10" /></div>
                    </div>
                    <div className="lg:flex items-end hidden ">ถนัด-ชอบ-ทำได้ไว</div>
                  </div>
                </div>
              </div>

              <div className="lg:flex  flex-2col justify-center">
                <div className="flex flex-col mr-4">
                  <div><label><br />ทำไมจึงรู้สึกแบบนั้น</label></div>
                  <div><textarea className="md:w-72 w-64 border-b-2 border-b-orange-600 focus:outline-none pl-4 pr-4 bg-transparent h-24 quantumWizTextinputPapertextareaInput exportTextarea " jsname="YPqjbf" data-rows="1" aria-label="Your answer" jscontroller="gZjhIf" jsaction="input:Lg5SV;ti6hGc:XMgOHc;rcuQ6b:WYd;" dir="auto" data-initial-dir="auto" aria-labelledby="i39" aria-describedby="i40 i41" badinput="false" name="entry.1127303073" placeholder="Your Answer"></textarea></div>
                </div>
                <div className="flex flex-col ">
                  <label className="w-80">ถ้าคะแนนน้อยกว่า 6 หรือรู้สึกอยากพัฒนา คิดว่าอยากปรับปรุงหรือพัฒนาให้ดีขึ้นอย่างไร</label>
                  <div><textarea className="md:w-72 w-64  border-b-2 border-b-orange-600 focus:outline-none pl-4 pr-4  bg-transparent h-24 quantumWizTextinputPapertextareaInput exportTextarea " jsname="YPqjbf" data-rows="1" aria-label="Your answer" jscontroller="gZjhIf" jsaction="input:Lg5SV;ti6hGc:XMgOHc;rcuQ6b:WYd;" dir="auto" data-initial-dir="auto" aria-labelledby="i39" aria-describedby="i40 i41" badinput="false" name="entry.1997400371" placeholder="Your Answer"></textarea></div>
                </div>
              </div>
            </div>

            <div className="mb-4 bg-white  rounded-3xl shadow-xl p-1">
              <div className="flex justify-center  h-fit">
                <div className="lg:flex flex-2col ">
                  <div className="flex flex-col ">
                    <label>Task/Project 6 งานที่ทำคืออะไร</label>
                    <textarea className="mr-2 w-64 h-20 border-b-2 border-b-orange-600 focus:outline-none pl-4 pr-4 bg-transparent  " placeholder="Your Answer" type="text" name="entry.991499567"></textarea>
                  </div>
                  <div className="flex flex-col ">
                    <label>คุณใช้เวลากับงานนี้กี่เปอร์เซ็นต์จากงานทั้งหมด</label>
                    <input className="w-64 h-20 border-b-2 border-b-orange-600 focus:outline-none pl-4 pr-4 bg-transparent  " placeholder="Your Answer" type="text" name="entry.1495638988" />
                  </div>
                </div>
              </div>
              <div className="flex flex-col">
                <div className=" flex flex-col mb-2 mt-2 ">
                  <center><p>ความพึงพอใจกับงานนี้</p></center>
                  <div className="flex justify-center  " >
                    <div className="lg:flex items-end hidden ">ไม่ถนัด-ไม่ชอบ-ใช้เวลา</div>

                    <div className="grid grid-cols-1 grid-rows-2  w-8" >
                      <div className="grid grid-cols-1 grid-rows-1"><label className="justify-self-center " >1</label></div>
                      <div className="grid grid-cols-1 grid-rows-1 p-1" ><input className="justify-self-center w-6 h-6" type="radio" name="entry.1686160970" value="1" /></div>
                    </div>

                    <div className="grid grid-cols-1 grid-rows-2  w-8" >
                      <div className="grid grid-cols-1 grid-rows-1"><label className="justify-self-center " htmlFor="2">2</label></div>
                      <div className="grid grid-cols-1 grid-rows-1 p-1"><input className="justify-self-center w-6 h-6 " type="radio" name="entry.1686160970" value="2" /></div>
                    </div>

                    <div className="grid grid-cols-1 grid-rows-2  w-8" >
                      <div className="grid grid-cols-1 grid-rows-1"><label className="justify-self-center " htmlFor="3">3</label></div>
                      <div className="grid grid-cols-1 grid-rows-1 p-1"><input className="justify-self-center w-6 h-6 " type="radio" name="entry.1686160970" value="3" /></div>
                    </div>

                    <div className="grid grid-cols-1 grid-rows-2  w-8" >
                      <div className="grid grid-cols-1 grid-rows-1"><label className="justify-self-center " htmlFor="4">4</label></div>
                      <div className="grid grid-cols-1 grid-rows-1 p-1" ><input className="justify-self-center w-6 h-6" type="radio" name="entry.1686160970" value="4" /></div>
                    </div>

                    <div className="grid grid-cols-1 grid-rows-2  w-8" >
                      <div className="grid grid-cols-1 grid-rows-1"><label className="justify-self-center " htmlFor="5">5</label></div>
                      <div className="grid grid-cols-1 grid-rows-1 p-1"><input className="justify-self-center w-6 h-6 " type="radio" name="entry.1686160970" value="5" /></div>
                    </div>

                    <div className="grid grid-cols-1 grid-rows-2  w-8" >
                      <div className="grid grid-cols-1 grid-rows-1"><label className="justify-self-center " htmlFor="6">6</label></div>
                      <div className="grid grid-cols-1 grid-rows-1 p-1"><input className="justify-self-center w-6 h-6" type="radio" name="entry.1686160970" value="6" /></div>
                    </div>

                    <div className="grid grid-cols-1 grid-rows-2  w-8" >
                      <div className="grid grid-cols-1 grid-rows-1"><label className="justify-self-center " htmlFor="7">7</label></div>
                      <div className="grid grid-cols-1 grid-rows-1 p-1" ><input className="justify-self-center w-6 h-6 " type="radio" name="entry.1686160970" value="7" /></div>
                    </div>

                    <div className="grid grid-cols-1 grid-rows-2  w-8" >
                      <div className="grid grid-cols-1 grid-rows-1"><label className="justify-self-center " htmlFor="8">8</label></div>
                      <div className="grid grid-cols-1 grid-rows-1 p-1"><input className="justify-self-center w-6 h-6 " type="radio" name="entry.1686160970" value="8" /></div>
                    </div>

                    <div className="grid grid-cols-1 grid-rows-2  w-8" >
                      <div className="grid grid-cols-1 grid-rows-1"><label className="justify-self-center " htmlFor="9">9</label></div>
                      <div className="grid grid-cols-1 grid-rows-1 p-1"><input className="justify-self-center w-6 h-6 " type="radio" name="entry.1686160970" value="9" /></div>
                    </div>

                    <div className="grid grid-cols-1 grid-rows-2  w-8" >
                      <div className="grid grid-cols-1 grid-rows-1"><label className="justify-self-center " htmlFor="10">10</label></div>
                      <div className="grid grid-cols-1 grid-rows-1 p-1"><input className="justify-self-center w-6 h-6 " type="radio" name="entry.1686160970" value="10" /></div>
                    </div>
                    <div className="lg:flex items-end hidden ">ถนัด-ชอบ-ทำได้ไว</div>
                  </div>
                </div>
              </div>

              <div className="lg:flex  flex-2col justify-center">
                <div className="flex flex-col mr-4">
                  <div><label><br />ทำไมจึงรู้สึกแบบนั้น</label></div>
                  <div><textarea className="md:w-72 w-64 border-b-2 border-b-orange-600 focus:outline-none pl-4 pr-4 bg-transparent h-24 quantumWizTextinputPapertextareaInput exportTextarea " jsname="YPqjbf" data-rows="1" aria-label="Your answer" jscontroller="gZjhIf" jsaction="input:Lg5SV;ti6hGc:XMgOHc;rcuQ6b:WYd;" dir="auto" data-initial-dir="auto" aria-labelledby="i39" aria-describedby="i40 i41" badinput="false" name="entry.720517031" placeholder="Your Answer"></textarea></div>
                </div>
                <div className="flex flex-col ">
                  <label className="w-80">ถ้าคะแนนน้อยกว่า 6 หรือรู้สึกอยากพัฒนา คิดว่าอยากปรับปรุงหรือพัฒนาให้ดีขึ้นอย่างไร</label>
                  <div><textarea className="md:w-72 w-64  border-b-2 border-b-orange-600 focus:outline-none pl-4 pr-4  bg-transparent h-24 quantumWizTextinputPapertextareaInput exportTextarea " jsname="YPqjbf" data-rows="1" aria-label="Your answer" jscontroller="gZjhIf" jsaction="input:Lg5SV;ti6hGc:XMgOHc;rcuQ6b:WYd;" dir="auto" data-initial-dir="auto" aria-labelledby="i39" aria-describedby="i40 i41" badinput="false" name="entry.53700437" placeholder="Your Answer"></textarea></div>
                </div>
              </div>
            </div>

            <div className="mb-4 bg-white  rounded-3xl shadow-xl p-1">
              <div className="flex justify-center  h-fit">
                <div className="lg:flex flex-2col ">
                  <div className="flex flex-col ">
                    <label>Task/Project 7 งานที่ทำคืออะไร</label>
                    <textarea className="mr-2 w-64 h-20 border-b-2 border-b-orange-600 focus:outline-none pl-4 pr-4 bg-transparent  " placeholder="Your Answer" type="text" name="entry.781021043"></textarea>
                  </div>
                  <div className="flex flex-col ">
                    <label>คุณใช้เวลากับงานนี้กี่เปอร์เซ็นต์จากงานทั้งหมด</label>
                    <input className="w-64 h-20 border-b-2 border-b-orange-600 focus:outline-none pl-4 pr-4 bg-transparent  " placeholder="Your Answer" type="text" name="entry.288778624" />
                  </div>
                </div>
              </div>
              <div className="flex flex-col">
                <div className=" flex flex-col mb-2 mt-2 ">
                  <center><p>ความพึงพอใจกับงานนี้</p></center>
                  <div className="flex justify-center  " >
                    <div className="lg:flex items-end hidden ">ไม่ถนัด-ไม่ชอบ-ใช้เวลา</div>

                    <div className="grid grid-cols-1 grid-rows-2  w-8" >

                      <div className="grid grid-cols-1 grid-rows-1"><label className="justify-self-center " >1</label></div>
                      <div className="grid grid-cols-1 grid-rows-1 p-1" ><input className="justify-self-center w-6 h-6" type="radio" name="entry.1151265982" value="1" /></div>


                    </div>

                    <div className="grid grid-cols-1 grid-rows-2  w-8" >
                      <div className="grid grid-cols-1 grid-rows-1"><label className="justify-self-center " htmlFor="2">2</label></div>
                      <div className="grid grid-cols-1 grid-rows-1 p-1"><input className="justify-self-center w-6 h-6 " type="radio" name="entry.1151265982" value="2" /></div>
                    </div>

                    <div className="grid grid-cols-1 grid-rows-2  w-8" >
                      <div className="grid grid-cols-1 grid-rows-1"><label className="justify-self-center " htmlFor="3">3</label></div>
                      <div className="grid grid-cols-1 grid-rows-1 p-1"><input className="justify-self-center w-6 h-6 " type="radio" name="entry.1151265982" value="3" /></div>
                    </div>

                    <div className="grid grid-cols-1 grid-rows-2  w-8" >
                      <div className="grid grid-cols-1 grid-rows-1"><label className="justify-self-center " htmlFor="4">4</label></div>
                      <div className="grid grid-cols-1 grid-rows-1 p-1" ><input className="justify-self-center w-6 h-6" type="radio" name="entry.1151265982" value="4" /></div>
                    </div>

                    <div className="grid grid-cols-1 grid-rows-2  w-8" >
                      <div className="grid grid-cols-1 grid-rows-1"><label className="justify-self-center " htmlFor="5">5</label></div>
                      <div className="grid grid-cols-1 grid-rows-1 p-1"><input className="justify-self-center w-6 h-6 " type="radio" name="entry.1151265982" value="5" /></div>
                    </div>

                    <div className="grid grid-cols-1 grid-rows-2  w-8" >
                      <div className="grid grid-cols-1 grid-rows-1"><label className="justify-self-center " htmlFor="6">6</label></div>
                      <div className="grid grid-cols-1 grid-rows-1 p-1"><input className="justify-self-center w-6 h-6" type="radio" name="entry.1151265982" value="6" /></div>
                    </div>

                    <div className="grid grid-cols-1 grid-rows-2  w-8" >
                      <div className="grid grid-cols-1 grid-rows-1"><label className="justify-self-center " htmlFor="7">7</label></div>
                      <div className="grid grid-cols-1 grid-rows-1 p-1" ><input className="justify-self-center w-6 h-6 " type="radio" name="entry.1151265982" value="7" /></div>
                    </div>

                    <div className="grid grid-cols-1 grid-rows-2  w-8" >
                      <div className="grid grid-cols-1 grid-rows-1"><label className="justify-self-center " htmlFor="8">8</label></div>
                      <div className="grid grid-cols-1 grid-rows-1 p-1"><input className="justify-self-center w-6 h-6 " type="radio" name="entry.1151265982" value="8" /></div>
                    </div>

                    <div className="grid grid-cols-1 grid-rows-2  w-8" >
                      <div className="grid grid-cols-1 grid-rows-1"><label className="justify-self-center " htmlFor="9">9</label></div>
                      <div className="grid grid-cols-1 grid-rows-1 p-1"><input className="justify-self-center w-6 h-6 " type="radio" name="entry.1151265982" value="9" /></div>
                    </div>

                    <div className="grid grid-cols-1 grid-rows-2  w-8" >
                      <div className="grid grid-cols-1 grid-rows-1"><label className="justify-self-center " htmlFor="10">10</label></div>
                      <div className="grid grid-cols-1 grid-rows-1 p-1"><input className="justify-self-center w-6 h-6 " type="radio" name="entry.1151265982" value="10" /></div>
                    </div>
                    <div className="lg:flex items-end hidden ">ถนัด-ชอบ-ทำได้ไว</div>
                  </div>
                </div>
              </div>

              <div className="lg:flex  flex-2col justify-center">
                <div className="flex flex-col mr-4">
                  <div><label><br />ทำไมจึงรู้สึกแบบนั้น</label></div>
                  <div><textarea className="md:w-72 w-64 border-b-2 border-b-orange-600 focus:outline-none pl-4 pr-4 bg-transparent h-24 quantumWizTextinputPapertextareaInput exportTextarea " jsname="YPqjbf" data-rows="1" aria-label="Your answer" jscontroller="gZjhIf" jsaction="input:Lg5SV;ti6hGc:XMgOHc;rcuQ6b:WYd;" dir="auto" data-initial-dir="auto" aria-labelledby="i39" aria-describedby="i40 i41" badinput="false" name="entry.168910948" placeholder="Your Answer"></textarea></div>
                </div>
                <div className="flex flex-col ">
                  <label className="w-80">ถ้าคะแนนน้อยกว่า 6 หรือรู้สึกอยากพัฒนา คิดว่าอยากปรับปรุงหรือพัฒนาให้ดีขึ้นอย่างไร</label>
                  <div><textarea className="md:w-72 w-64  border-b-2 border-b-orange-600 focus:outline-none pl-4 pr-4  bg-transparent h-24 quantumWizTextinputPapertextareaInput exportTextarea " jsname="YPqjbf" data-rows="1" aria-label="Your answer" jscontroller="gZjhIf" jsaction="input:Lg5SV;ti6hGc:XMgOHc;rcuQ6b:WYd;" dir="auto" data-initial-dir="auto" aria-labelledby="i39" aria-describedby="i40 i41" badinput="false" name="entry.990347673" placeholder="Your Answer"></textarea></div>
                </div>
              </div>
            </div>

            <div className="mb-4 bg-white  rounded-3xl shadow-xl p-1">
              <div className="flex justify-center  h-fit">
                <div className="lg:flex flex-2col ">
                  <div className="flex flex-col ">
                    <label>Task/Project 8 งานที่ทำคืออะไร</label>
                    <textarea className="mr-2 w-64 h-20 border-b-2 border-b-orange-600 focus:outline-none pl-4 pr-4 bg-transparent  " placeholder="Your Answer" type="text" name="entry.903266582"></textarea>
                  </div>
                  <div className="flex flex-col ">
                    <label>คุณใช้เวลากับงานนี้กี่เปอร์เซ็นต์จากงานทั้งหมด</label>
                    <input className="w-64 h-20 border-b-2 border-b-orange-600 focus:outline-none pl-4 pr-4 bg-transparent  " placeholder="Your Answer" type="text" name="entry.1097511199" />
                  </div>
                </div>
              </div>
              <div className="flex flex-col">
                <div className=" flex flex-col mb-2 mt-2 ">
                  <center><p>ความพึงพอใจกับงานนี้</p></center>
                  <div className="flex justify-center  " >
                    <div className="lg:flex items-end hidden ">ไม่ถนัด-ไม่ชอบ-ใช้เวลา</div>

                    <div className="grid grid-cols-1 grid-rows-2  w-8" >
                      <div className="grid grid-cols-1 grid-rows-1"><label className="justify-self-center " >1</label></div>
                      <div className="grid grid-cols-1 grid-rows-1 p-1" ><input className="justify-self-center w-6 h-6" type="radio" name="entry.51211010" value="1" /></div>
                    </div>

                    <div className="grid grid-cols-1 grid-rows-2  w-8" >
                      <div className="grid grid-cols-1 grid-rows-1"><label className="justify-self-center " htmlFor="2">2</label></div>
                      <div className="grid grid-cols-1 grid-rows-1 p-1"><input className="justify-self-center w-6 h-6 " type="radio" name="entry.51211010" value="2" /></div>
                    </div>

                    <div className="grid grid-cols-1 grid-rows-2  w-8" >
                      <div className="grid grid-cols-1 grid-rows-1"><label className="justify-self-center " htmlFor="3">3</label></div>
                      <div className="grid grid-cols-1 grid-rows-1 p-1"><input className="justify-self-center w-6 h-6 " type="radio" name="entry.51211010" value="3" /></div>
                    </div>

                    <div className="grid grid-cols-1 grid-rows-2  w-8" >
                      <div className="grid grid-cols-1 grid-rows-1"><label className="justify-self-center " htmlFor="4">4</label></div>
                      <div className="grid grid-cols-1 grid-rows-1 p-1" ><input className="justify-self-center w-6 h-6" type="radio" name="entry.51211010" value="4" /></div>
                    </div>

                    <div className="grid grid-cols-1 grid-rows-2  w-8" >
                      <div className="grid grid-cols-1 grid-rows-1"><label className="justify-self-center " htmlFor="5">5</label></div>
                      <div className="grid grid-cols-1 grid-rows-1 p-1"><input className="justify-self-center w-6 h-6 " type="radio" name="entry.51211010" value="5" /></div>
                    </div>

                    <div className="grid grid-cols-1 grid-rows-2  w-8" >
                      <div className="grid grid-cols-1 grid-rows-1"><label className="justify-self-center " htmlFor="6">6</label></div>
                      <div className="grid grid-cols-1 grid-rows-1 p-1"><input className="justify-self-center w-6 h-6" type="radio" name="entry.51211010" value="6" /></div>
                    </div>

                    <div className="grid grid-cols-1 grid-rows-2  w-8" >
                      <div className="grid grid-cols-1 grid-rows-1"><label className="justify-self-center " htmlFor="7">7</label></div>
                      <div className="grid grid-cols-1 grid-rows-1 p-1" ><input className="justify-self-center w-6 h-6 " type="radio" name="entry.51211010" value="7" /></div>
                    </div>

                    <div className="grid grid-cols-1 grid-rows-2  w-8" >
                      <div className="grid grid-cols-1 grid-rows-1"><label className="justify-self-center " htmlFor="8">8</label></div>
                      <div className="grid grid-cols-1 grid-rows-1 p-1"><input className="justify-self-center w-6 h-6 " type="radio" name="entry.51211010" value="8" /></div>
                    </div>

                    <div className="grid grid-cols-1 grid-rows-2  w-8" >
                      <div className="grid grid-cols-1 grid-rows-1"><label className="justify-self-center " htmlFor="9">9</label></div>
                      <div className="grid grid-cols-1 grid-rows-1 p-1"><input className="justify-self-center w-6 h-6 " type="radio" name="entry.51211010" value="9" /></div>
                    </div>

                    <div className="grid grid-cols-1 grid-rows-2  w-8" >
                      <div className="grid grid-cols-1 grid-rows-1"><label className="justify-self-center " htmlFor="10">10</label></div>
                      <div className="grid grid-cols-1 grid-rows-1 p-1"><input className="justify-self-center w-6 h-6 " type="radio" name="entry.51211010" value="10" /></div>
                    </div>
                    <div className="lg:flex items-end hidden ">ถนัด-ชอบ-ทำได้ไว</div>
                  </div>
                </div>
              </div>

              <div className="lg:flex  flex-2col justify-center">
                <div className="flex flex-col mr-4">
                  <div><label><br />ทำไมจึงรู้สึกแบบนั้น</label></div>
                  <div><textarea className="md:w-72 w-64 border-b-2 border-b-orange-600 focus:outline-none pl-4 pr-4 bg-transparent h-24 quantumWizTextinputPapertextareaInput exportTextarea " jsname="YPqjbf" data-rows="1" aria-label="Your answer" jscontroller="gZjhIf" jsaction="input:Lg5SV;ti6hGc:XMgOHc;rcuQ6b:WYd;" dir="auto" data-initial-dir="auto" aria-labelledby="i39" aria-describedby="i40 i41" badinput="false" name="entry.752701453" placeholder="Your Answer"></textarea></div>
                </div>
                <div className="flex flex-col ">
                  <label className="w-80">ถ้าคะแนนน้อยกว่า 6 หรือรู้สึกอยากพัฒนา คิดว่าอยากปรับปรุงหรือพัฒนาให้ดีขึ้นอย่างไร</label>
                  <div><textarea className="md:w-72 w-64  border-b-2 border-b-orange-600 focus:outline-none pl-4 pr-4  bg-transparent h-24 quantumWizTextinputPapertextareaInput exportTextarea " jsname="YPqjbf" data-rows="1" aria-label="Your answer" jscontroller="gZjhIf" jsaction="input:Lg5SV;ti6hGc:XMgOHc;rcuQ6b:WYd;" dir="auto" data-initial-dir="auto" aria-labelledby="i39" aria-describedby="i40 i41" badinput="false" name="entry.326166688" placeholder="Your Answer"></textarea></div>
                </div>
              </div>
            </div>

            <div className="mb-4 bg-white  rounded-3xl shadow-xl p-1">
              <div className="flex justify-center  h-fit">
                <div className="lg:flex flex-2col ">
                  <div className="flex flex-col ">
                    <label>Task/Project 9 งานที่ทำคืออะไร</label>
                    <textarea className="mr-2 w-64 h-20 border-b-2 border-b-orange-600 focus:outline-none pl-4 pr-4 bg-transparent  " placeholder="Your Answer" type="text" name="entry.1085676180"></textarea>
                  </div>
                  <div className="flex flex-col ">
                    <label>คุณใช้เวลากับงานนี้กี่เปอร์เซ็นต์จากงานทั้งหมด</label>
                    <input className="w-64 h-20 border-b-2 border-b-orange-600 focus:outline-none pl-4 pr-4 bg-transparent  " placeholder="Your Answer" type="text" name="entry.638867278" />
                  </div>
                </div>
              </div>
              <div className="flex flex-col">
                <div className=" flex flex-col mb-2 mt-2 ">
                  <center><p>ความพึงพอใจกับงานนี้</p></center>
                  <div className="flex justify-center  " >
                    <div className="lg:flex items-end hidden ">ไม่ถนัด-ไม่ชอบ-ใช้เวลา</div>

                    <div className="grid grid-cols-1 grid-rows-2  w-8" >
                      <div className="grid grid-cols-1 grid-rows-1"><label className="justify-self-center " >1</label></div>
                      <div className="grid grid-cols-1 grid-rows-1 p-1" ><input className="justify-self-center w-6 h-6" type="radio" name="entry.721058992" value="1" /></div>
                    </div>

                    <div className="grid grid-cols-1 grid-rows-2  w-8" >
                      <div className="grid grid-cols-1 grid-rows-1"><label className="justify-self-center " htmlFor="2">2</label></div>
                      <div className="grid grid-cols-1 grid-rows-1 p-1"><input className="justify-self-center w-6 h-6 " type="radio" name="entry.721058992" value="2" /></div>
                    </div>

                    <div className="grid grid-cols-1 grid-rows-2  w-8" >
                      <div className="grid grid-cols-1 grid-rows-1"><label className="justify-self-center " htmlFor="3">3</label></div>
                      <div className="grid grid-cols-1 grid-rows-1 p-1"><input className="justify-self-center w-6 h-6 " type="radio" name="entry.721058992" value="3" /></div>
                    </div>

                    <div className="grid grid-cols-1 grid-rows-2  w-8" >
                      <div className="grid grid-cols-1 grid-rows-1"><label className="justify-self-center " htmlFor="4">4</label></div>
                      <div className="grid grid-cols-1 grid-rows-1 p-1" ><input className="justify-self-center w-6 h-6" type="radio" name="entry.721058992" value="4" /></div>
                    </div>

                    <div className="grid grid-cols-1 grid-rows-2  w-8" >
                      <div className="grid grid-cols-1 grid-rows-1"><label className="justify-self-center " htmlFor="5">5</label></div>
                      <div className="grid grid-cols-1 grid-rows-1 p-1"><input className="justify-self-center w-6 h-6 " type="radio" name="entry.721058992" value="5" /></div>
                    </div>

                    <div className="grid grid-cols-1 grid-rows-2  w-8" >
                      <div className="grid grid-cols-1 grid-rows-1"><label className="justify-self-center " htmlFor="6">6</label></div>
                      <div className="grid grid-cols-1 grid-rows-1 p-1"><input className="justify-self-center w-6 h-6" type="radio" name="entry.721058992" value="6" /></div>
                    </div>

                    <div className="grid grid-cols-1 grid-rows-2  w-8" >
                      <div className="grid grid-cols-1 grid-rows-1"><label className="justify-self-center " htmlFor="7">7</label></div>
                      <div className="grid grid-cols-1 grid-rows-1 p-1" ><input className="justify-self-center w-6 h-6 " type="radio" name="entry.721058992" value="7" /></div>
                    </div>

                    <div className="grid grid-cols-1 grid-rows-2  w-8" >
                      <div className="grid grid-cols-1 grid-rows-1"><label className="justify-self-center " htmlFor="8">8</label></div>
                      <div className="grid grid-cols-1 grid-rows-1 p-1"><input className="justify-self-center w-6 h-6 " type="radio" name="entry.721058992" value="8" /></div>
                    </div>

                    <div className="grid grid-cols-1 grid-rows-2  w-8" >
                      <div className="grid grid-cols-1 grid-rows-1"><label className="justify-self-center " htmlFor="9">9</label></div>
                      <div className="grid grid-cols-1 grid-rows-1 p-1"><input className="justify-self-center w-6 h-6 " type="radio" name="entry.721058992" value="9" /></div>
                    </div>

                    <div className="grid grid-cols-1 grid-rows-2  w-8" >
                      <div className="grid grid-cols-1 grid-rows-1"><label className="justify-self-center " htmlFor="10">10</label></div>
                      <div className="grid grid-cols-1 grid-rows-1 p-1"><input className="justify-self-center w-6 h-6 " type="radio" name="entry.721058992" value="10" /></div>
                    </div>
                    <div className="lg:flex items-end hidden ">ถนัด-ชอบ-ทำได้ไว</div>
                  </div>
                </div>
              </div>

              <div className="lg:flex  flex-2col justify-center">
                <div className="flex flex-col mr-4">
                  <div><label><br />ทำไมจึงรู้สึกแบบนั้น</label></div>
                  <div><textarea className="md:w-72 w-64 border-b-2 border-b-orange-600 focus:outline-none pl-4 pr-4 bg-transparent h-24 quantumWizTextinputPapertextareaInput exportTextarea " jsname="YPqjbf" data-rows="1" aria-label="Your answer" jscontroller="gZjhIf" jsaction="input:Lg5SV;ti6hGc:XMgOHc;rcuQ6b:WYd;" dir="auto" data-initial-dir="auto" aria-labelledby="i39" aria-describedby="i40 i41" badinput="false" name="entry.1030602055" placeholder="Your Answer"></textarea></div>
                </div>
                <div className="flex flex-col ">
                  <label className="w-80">ถ้าคะแนนน้อยกว่า 6 หรือรู้สึกอยากพัฒนา คิดว่าอยากปรับปรุงหรือพัฒนาให้ดีขึ้นอย่างไร</label>
                  <div><textarea className="md:w-72 w-64  border-b-2 border-b-orange-600 focus:outline-none pl-4 pr-4  bg-transparent h-24 quantumWizTextinputPapertextareaInput exportTextarea " jsname="YPqjbf" data-rows="1" aria-label="Your answer" jscontroller="gZjhIf" jsaction="input:Lg5SV;ti6hGc:XMgOHc;rcuQ6b:WYd;" dir="auto" data-initial-dir="auto" aria-labelledby="i39" aria-describedby="i40 i41" badinput="false" name="entry.1334259990" placeholder="Your Answer"></textarea></div>
                </div>
              </div>
            </div>

            <div className="mb-4 bg-white  rounded-3xl shadow-xl p-1">
              <div className="flex justify-center  h-fit">
                <div className="lg:flex flex-2col ">
                  <div className="flex flex-col ">
                    <label>Task/Project 10 งานที่ทำคืออะไร</label>
                    <textarea className="mr-2 w-64 h-20 border-b-2 border-b-orange-600 focus:outline-none pl-4 pr-4 bg-transparent  " placeholder="Your Answer" type="text" name="entry.1954848761"></textarea>
                  </div>
                  <div className="flex flex-col ">
                    <label>คุณใช้เวลากับงานนี้กี่เปอร์เซ็นต์จากงานทั้งหมด</label>
                    <input className="w-64 h-20 border-b-2 border-b-orange-600 focus:outline-none pl-4 pr-4 bg-transparent  " placeholder="Your Answer" type="text" name="entry.1441197255" />
                  </div>
                </div>
              </div>
              <div className="flex flex-col">
                <div className=" flex flex-col mb-2 mt-2 ">
                  <center><p>ความพึงพอใจกับงานนี้</p></center>
                  <div className="flex justify-center  " >
                    <div className="lg:flex items-end hidden ">ไม่ถนัด-ไม่ชอบ-ใช้เวลา</div>

                    <div className="grid grid-cols-1 grid-rows-2  w-8" >
                      <div className="grid grid-cols-1 grid-rows-1"><label className="justify-self-center " >1</label></div>
                      <div className="grid grid-cols-1 grid-rows-1 p-1" ><input className="justify-self-center w-6 h-6" type="radio" name="entry.1122187146" value="1" /></div>
                    </div>

                    <div className="grid grid-cols-1 grid-rows-2  w-8" >
                      <div className="grid grid-cols-1 grid-rows-1"><label className="justify-self-center " htmlFor="2">2</label></div>
                      <div className="grid grid-cols-1 grid-rows-1 p-1"><input className="justify-self-center w-6 h-6 " type="radio" name="entry.1122187146" value="2" /></div>
                    </div>

                    <div className="grid grid-cols-1 grid-rows-2  w-8" >
                      <div className="grid grid-cols-1 grid-rows-1"><label className="justify-self-center " htmlFor="3">3</label></div>
                      <div className="grid grid-cols-1 grid-rows-1 p-1"><input className="justify-self-center w-6 h-6 " type="radio" name="entry.1122187146" value="3" /></div>
                    </div>

                    <div className="grid grid-cols-1 grid-rows-2  w-8" >
                      <div className="grid grid-cols-1 grid-rows-1"><label className="justify-self-center " htmlFor="4">4</label></div>
                      <div className="grid grid-cols-1 grid-rows-1 p-1" ><input className="justify-self-center w-6 h-6" type="radio" name="entry.1122187146" value="4" /></div>
                    </div>

                    <div className="grid grid-cols-1 grid-rows-2  w-8" >
                      <div className="grid grid-cols-1 grid-rows-1"><label className="justify-self-center " htmlFor="5">5</label></div>
                      <div className="grid grid-cols-1 grid-rows-1 p-1"><input className="justify-self-center w-6 h-6 " type="radio" name="entry.1122187146" value="5" /></div>
                    </div>

                    <div className="grid grid-cols-1 grid-rows-2  w-8" >
                      <div className="grid grid-cols-1 grid-rows-1"><label className="justify-self-center " htmlFor="6">6</label></div>
                      <div className="grid grid-cols-1 grid-rows-1 p-1"><input className="justify-self-center w-6 h-6" type="radio" name="entry.1122187146" value="6" /></div>
                    </div>

                    <div className="grid grid-cols-1 grid-rows-2  w-8" >
                      <div className="grid grid-cols-1 grid-rows-1"><label className="justify-self-center " htmlFor="7">7</label></div>
                      <div className="grid grid-cols-1 grid-rows-1 p-1" ><input className="justify-self-center w-6 h-6 " type="radio" name="entry.1122187146" value="7" /></div>
                    </div>

                    <div className="grid grid-cols-1 grid-rows-2  w-8" >
                      <div className="grid grid-cols-1 grid-rows-1"><label className="justify-self-center " htmlFor="8">8</label></div>
                      <div className="grid grid-cols-1 grid-rows-1 p-1"><input className="justify-self-center w-6 h-6 " type="radio" name="entry.1122187146" value="8" /></div>
                    </div>

                    <div className="grid grid-cols-1 grid-rows-2  w-8" >
                      <div className="grid grid-cols-1 grid-rows-1"><label className="justify-self-center " htmlFor="9">9</label></div>
                      <div className="grid grid-cols-1 grid-rows-1 p-1"><input className="justify-self-center w-6 h-6 " type="radio" name="entry.1122187146" value="9" /></div>
                    </div>

                    <div className="grid grid-cols-1 grid-rows-2  w-8" >
                      <div className="grid grid-cols-1 grid-rows-1"><label className="justify-self-center " htmlFor="10">10</label></div>
                      <div className="grid grid-cols-1 grid-rows-1 p-1"><input className="justify-self-center w-6 h-6 " type="radio" name="entry.1122187146" value="10" /></div>
                    </div>
                    <div className="lg:flex items-end hidden ">ถนัด-ชอบ-ทำได้ไว</div>
                  </div>
                </div>
              </div>

              <div className="lg:flex  flex-2col justify-center">
                <div className="flex flex-col mr-4">
                  <div><label><br />ทำไมจึงรู้สึกแบบนั้น</label></div>
                  <div><textarea className="md:w-72 w-64 border-b-2 border-b-orange-600 focus:outline-none pl-4 pr-4 bg-transparent h-24 quantumWizTextinputPapertextareaInput exportTextarea " jsname="YPqjbf" data-rows="1" aria-label="Your answer" jscontroller="gZjhIf" jsaction="input:Lg5SV;ti6hGc:XMgOHc;rcuQ6b:WYd;" dir="auto" data-initial-dir="auto" aria-labelledby="i39" aria-describedby="i40 i41" badinput="false" name="entry.533296297" placeholder="Your Answer"></textarea></div>
                </div>
                <div className="flex flex-col ">
                  <label className="w-80">ถ้าคะแนนน้อยกว่า 6 หรือรู้สึกอยากพัฒนา คิดว่าอยากปรับปรุงหรือพัฒนาให้ดีขึ้นอย่างไร</label>
                  <div><textarea className="md:w-72 w-64  border-b-2 border-b-orange-600 focus:outline-none pl-4 pr-4  bg-transparent h-24 quantumWizTextinputPapertextareaInput exportTextarea " jsname="YPqjbf" data-rows="1" aria-label="Your answer" jscontroller="gZjhIf" jsaction="input:Lg5SV;ti6hGc:XMgOHc;rcuQ6b:WYd;" dir="auto" data-initial-dir="auto" aria-labelledby="i39" aria-describedby="i40 i41" badinput="false" name="entry.1547469854" placeholder="Your Answer"></textarea></div>
                </div>
              </div>
            </div>

            <div className=" mb-10 mt-10 ">
              <p>จากเกณฑ์ต่อไปนี้คุณให้คะแนนตัวเองระดับใด</p>
              <p className="text-red-600">*</p>
              <p>
                0 = ทำไม่ได้เลย<br />
                1 = ทำได้น้อยมาก<br />
                2 = ทำได้บ้างเป็นบางครั้ง<br />
                3 = ทำได้บ่อยครั้ง<br />
                4 = ทำได้ดีมาก
              </p>

              <div className="flex bg-gray-100 p-2">
                <div className="flex-none  items-center w-32"></div>
                <div className="grid grid-cols-1 grid-rows-2  w-16 ml-4 " >
                  <div className="flex justify-center items-end" >0</div>
                </div>
                <div className="grid grid-cols-1 grid-rows-2  w-16 ml-4 " >
                  <div className="flex justify-center items-end" >1</div>
                </div>
                <div className="grid grid-cols-1 grid-rows-2  w-16 ml-4 " >
                  <div className="flex justify-center items-end" >2</div>
                </div>
                <div className="grid grid-cols-1 grid-rows-2  w-16 ml-4 " >
                  <div className="flex justify-center items-end" >3</div>
                </div>
                <div className="grid grid-cols-1 grid-rows-2  w-16 ml-4 " >
                  <div className="flex justify-center items-end" >4</div>
                </div>
              </div>

              <div className="flex bg-gray-100 p-2">
                <div className="flex-none  items-center w-32">Achieve Result: ความสามารถในการทำงานให้สำเร็จ โดยเน้นไปที่ Output ของงาน</div>
                <div className="grid grid-cols-1 grid-rows-2  w-16 ml-4 " >
                  <div className="flex justify-center items-end" ><input type="radio" className="w-6 h-6 " name="entry.1141969149" value="0 = ทำไม่ได้เลย" /></div>
                </div>
                <div className="grid grid-cols-1 grid-rows-2  w-16 ml-4 " >
                  <div className="flex justify-center items-end" ><input type="radio" className="w-6 h-6 " name="entry.1141969149" value="1 = ทำได้น้อยมาก" /></div>
                </div>
                <div className="grid grid-cols-1 grid-rows-2  w-16 ml-4 " >
                  <div className="flex justify-center items-end" ><input type="radio" className="w-6 h-6 " name="entry.1141969149" value="2 = ทำได้บ้างเป็นบางครั้ง" /></div>
                </div>
                <div className="grid grid-cols-1 grid-rows-2  w-16 ml-4 " >
                  <div className="flex justify-center items-end" ><input type="radio" className="w-6 h-6 " name="entry.1141969149" value="3 = ทำได้บ่อยครั้ง" /></div>
                </div>
                <div className="grid grid-cols-1 grid-rows-2  w-16 ml-4 " >
                  <div className="flex justify-center items-end" ><input type="radio" className="w-6 h-6 " name="entry.1141969149" value="4 = ทำได้ดีมาก" /></div>
                </div>
              </div>


              <div className="flex  mt-2 bg-gray-100 p-2">
                <div className="flex-none  items-center w-32">Communications: ความถูกต้อง ความเร็ว และความยากง่ายในการสื่อสารกันของบุคคล ทั้งภายในและภายนอก</div>
                <div className="grid grid-cols-1 grid-rows-2  w-16 ml-4 " >
                  <div className="flex justify-center items-end" ><input type="radio" className="w-6 h-6 " name="entry.462727238" value="0 = ทำไม่ได้เลย" /></div>
                </div>
                <div className="grid grid-cols-1 grid-rows-2  w-16 ml-4 " >
                  <div className="flex justify-center items-end" ><input type="radio" className="w-6 h-6 " name="entry.462727238" value="1 = ทำได้น้อยมาก" /></div>
                </div>
                <div className="grid grid-cols-1 grid-rows-2  w-16 ml-4 " >
                  <div className="flex justify-center items-end" ><input type="radio" className="w-6 h-6 " name="entry.462727238" value="2 = ทำได้บ้างเป็นบางครั้ง" /></div>
                </div>
                <div className="grid grid-cols-1 grid-rows-2  w-16 ml-4 " >
                  <div className="flex justify-center items-end" ><input type="radio" className="w-6 h-6 " name="entry.462727238" value="3 = ทำได้บ่อยครั้ง" /></div>
                </div>
                <div className="grid grid-cols-1 grid-rows-2  w-16 ml-4 " >
                  <div className="flex justify-center items-end" ><input type="radio" className="w-6 h-6 " name="entry.462727238" value="4 = ทำได้ดีมาก" /></div>
                </div>
              </div>

              <div className="flex  mt-2 bg-gray-100 p-2">
                <div className="flex-none items-center w-32">Ownership: ความเป็นเจ้าของและรับผิดชอบกับงานของตัวเอง</div>
                <div className="grid grid-cols-1 grid-rows-2  w-16 ml-4 " >
                  <div className="flex justify-center items-end" ><input type="radio" className="w-6 h-6 " name="entry.1408296617" value="0 = ทำไม่ได้เลย" /></div>
                </div>
                <div className="grid grid-cols-1 grid-rows-2  w-16 ml-4 " >
                  <div className="flex justify-center items-end" ><input type="radio" className="w-6 h-6 " name="entry.1408296617" value="1 = ทำได้น้อยมาก" /></div>
                </div>
                <div className="grid grid-cols-1 grid-rows-2  w-16 ml-4 " >
                  <div className="flex justify-center items-end" ><input type="radio" className="w-6 h-6 " name="entry.1408296617" value="2 = ทำได้บ้างเป็นบางครั้ง" /></div>
                </div>
                <div className="grid grid-cols-1 grid-rows-2  w-16 ml-4 " >
                  <div className="flex justify-center items-end" ><input type="radio" className="w-6 h-6 " name="entry.1408296617" value="3 = ทำได้บ่อยครั้ง" /></div>
                </div>
                <div className="grid grid-cols-1 grid-rows-2  w-16 ml-4 " >
                  <div className="flex justify-center items-end" ><input type="radio" className="w-6 h-6 " name="entry.1408296617" value="4 = ทำได้ดีมาก" /></div>
                </div>
              </div>

              <div className="flex  mt-2 bg-gray-100 p-2">
                <div className="flex-none  items-center w-32">Dependable: ความเชื่อใจ เมื่อมีการมอบหมายงานให้ สามารถเชื่อได้ว่างานจะเสร็จด้วยคุณภาพและเวลาที่ตกลงกันไว้</div>
                <div className="grid grid-cols-1 grid-rows-2  w-16 ml-4 " >
                  <div className="flex justify-center items-end" ><input type="radio" className="w-6 h-6 " name="entry.1062325162" value="0 = ทำไม่ได้เลย" /></div>
                </div>
                <div className="grid grid-cols-1 grid-rows-2  w-16 ml-4 " >
                  <div className="flex justify-center items-end" ><input type="radio" className="w-6 h-6 " name="entry.1062325162" value="1 = ทำได้น้อยมาก" /></div>
                </div>
                <div className="grid grid-cols-1 grid-rows-2  w-16 ml-4 " >
                  <div className="flex justify-center items-end" ><input type="radio" className="w-6 h-6 " name="entry.1062325162" value="2 = ทำได้บ้างเป็นบางครั้ง" /></div>
                </div>
                <div className="grid grid-cols-1 grid-rows-2  w-16 ml-4 " >
                  <div className="flex justify-center items-end" ><input type="radio" className="w-6 h-6 " name="entry.1062325162" value="3 = ทำได้บ่อยครั้ง" /></div>
                </div>
                <div className="grid grid-cols-1 grid-rows-2  w-16 ml-4 " >
                  <div className="flex justify-center items-end" ><input type="radio" className="w-6 h-6 " name="entry.1062325162" value="4 = ทำได้ดีมาก" /></div>
                </div>
              </div>

              <div className="flex  mt-2 bg-gray-100 p-2">
                <div className="flex-none  items-center w-32">Team Work: ความสามารถทำงานร่วมกับผู้อื่น สามารถดึงเอาศักยภาพของผู้ร่วมทีมออกมา โดยคงบรรยากาศการทำงานที่ดีไว้</div>
                <div className="grid grid-cols-1 grid-rows-2  w-16 ml-4 " >
                  <div className="flex justify-center items-end" ><input type="radio" className="w-6 h-6 " name="entry.107576699" value="0 = ทำไม่ได้เลย" /></div>
                </div>
                <div className="grid grid-cols-1 grid-rows-2  w-16 ml-4 " >
                  <div className="flex justify-center items-end" ><input type="radio" className="w-6 h-6 " name="entry.107576699" value="1 = ทำได้น้อยมาก" /></div>
                </div>
                <div className="grid grid-cols-1 grid-rows-2  w-16 ml-4 " >
                  <div className="flex justify-center items-end" ><input type="radio" className="w-6 h-6 " name="entry.107576699" value="2 = ทำได้บ้างเป็นบางครั้ง" /></div>
                </div>
                <div className="grid grid-cols-1 grid-rows-2  w-16 ml-4 " >
                  <div className="flex justify-center items-end" ><input type="radio" className="w-6 h-6 " name="entry.107576699" value="3 = ทำได้บ่อยครั้ง" /></div>
                </div>
                <div className="grid grid-cols-1 grid-rows-2  w-16 ml-4 " >
                  <div className="flex justify-center items-end" ><input type="radio" className="w-6 h-6 " name="entry.107576699" value="4 = ทำได้ดีมาก" /></div>
                </div>
              </div>

              <div className="flex  mt-2 bg-gray-100 p-2">
                <div className="flex-none  items-center w-32">Leadership: คุณสมบัติการเป็นผู้นำ ได้แก่ มีความคิดริเริ่ม กล้าตัดสินใจ วางแผนดี มีวิสัยทัศน์ และรักษาคำพูด</div>
                <div className="grid grid-cols-1 grid-rows-2  w-16 ml-4 " >
                  <div className="flex justify-center items-end" ><input type="radio" className="w-6 h-6 " name="entry.1795713687" value="0 = ทำไม่ได้เลย" /></div>
                </div>
                <div className="grid grid-cols-1 grid-rows-2  w-16 ml-4 " >
                  <div className="flex justify-center items-end" ><input type="radio" className="w-6 h-6 " name="entry.1795713687" value="1 = ทำได้น้อยมาก" /></div>
                </div>
                <div className="grid grid-cols-1 grid-rows-2  w-16 ml-4 " >
                  <div className="flex justify-center items-end" ><input type="radio" className="w-6 h-6 " name="entry.1795713687" value="2 = ทำได้บ้างเป็นบางครั้ง" /></div>
                </div>
                <div className="grid grid-cols-1 grid-rows-2  w-16 ml-4 " >
                  <div className="flex justify-center items-end" ><input type="radio" className="w-6 h-6 " name="entry.1795713687" value="3 = ทำได้บ่อยครั้ง" /></div>
                </div>
                <div className="grid grid-cols-1 grid-rows-2  w-16 ml-4 " >
                  <div className="flex justify-center items-end" ><input type="radio" className="w-6 h-6 " name="entry.1795713687" value="4 = ทำได้ดีมาก" /></div>
                </div>
              </div>
            </div>

            <div className="bg-transparent">
              <p>ช่วยยกตัวอย่างประกอบการให้คะแนนตัวเองในหัวข้อต่างๆ เพื่อให้เราเห็นภาพมากขึ้นหน่อย</p><p className="text-red-600">*</p>
              <textarea className="w-3/4  border-b-2 border-b-orange-600 focus:outline-none pl-4 pr-4  bg-transparent h-20 quantumWizTextinputPapertextareaInput exportTextarea " placeholder="Your Answer" jsname="YPqjbf" data-rows="1" aria-label="Your answer" jscontroller="gZjhIf" jsaction="input:Lg5SV;ti6hGc:XMgOHc;rcuQ6b:WYd;" required dir="auto" data-initial-dir="auto" aria-labelledby="i39" aria-describedby="i40 i41" badinput="false" name="entry.1786056676"></textarea>
            </div>

            <h1>ส่วนที่ 2 : วิเคราะห์ตัวเอง &quot;เพื่อให้ทำงานได้อย่างมีความสุข/สนุก และได้ผลที่ดีขึ้น&quot; ในปีนี้ </h1>
            <div className="bg-transparent">
              <p>ในปีนี้ คุณยังอยากทำงานในบทบาทเดิมมั้ย ? ถ้าอยากปรับบทบาท อยากปรับอย่างไร ? เพิ่มหรือลดอะไร ?</p><p className="text-red-600">*</p>
              <textarea className="w-3/4  border-b-2 border-b-orange-600 focus:outline-none pl-4 pr-4  bg-transparent h-20 quantumWizTextinputPapertextareaInput exportTextarea " placeholder="Your Answer" jsname="YPqjbf" data-rows="1" aria-label="Your answer" jscontroller="gZjhIf" jsaction="input:Lg5SV;ti6hGc:XMgOHc;rcuQ6b:WYd;" required dir="auto" data-initial-dir="auto" aria-labelledby="i39" aria-describedby="i40 i41" badinput="false" name="entry.1799784177"></textarea>
            </div>

            <div className="bg-transparent">
              <p>มีอะไรที่คุณอยากเรียนรู้ หรืออยากลองทำเพิ่มเติมมั้ย ?</p><p className="text-red-600">*</p>
              <textarea className="w-3/4  border-b-2 border-b-orange-600 focus:outline-none pl-4 pr-4  bg-transparent h-20 quantumWizTextinputPapertextareaInput exportTextarea " placeholder="Your Answer" jsname="YPqjbf" data-rows="1" aria-label="Your answer" jscontroller="gZjhIf" jsaction="input:Lg5SV;ti6hGc:XMgOHc;rcuQ6b:WYd;" required dir="auto" data-initial-dir="auto" aria-labelledby="i39" aria-describedby="i40 i41" badinput="false" name="entry.2029885449"></textarea>
            </div>

            <div className="bg-transparent h-min">
              <p>คุณคิดว่า มีอะไรที่บริษัทสามารถช่วย support คุณ/ทีม เพื่อให้ทำงานได้อย่างสนุก/สบายใจ และได้ผลดีขึ้นได้อีกบ้าง ?</p><p className="text-red-600">*</p>
              <textarea className="w-3/4  border-b-2 border-b-orange-600 focus:outline-none pl-4 pr-4  bg-transparent h-20 quantumWizTextinputPapertextareaInput exportTextarea " placeholder="Your Answer" jsname="YPqjbf" data-rows="1" aria-label="Your answer" jscontroller="gZjhIf" jsaction="input:Lg5SV;ti6hGc:XMgOHc;rcuQ6b:WYd;" required dir="auto" data-initial-dir="auto" aria-labelledby="i39" aria-describedby="i40 i41" badinput="false" name="entry.497705480"></textarea>
            </div>
            <center><button className="mt-8 hover:bg-blue-900 h-12 w-32 bg-orange-600 text-gray-100 border-2 border-orange-600  rounded-3xl" type="submit">Submit</button></center>
          </form>

        </div>
      </div>
    </div>
  )
}
export default index

