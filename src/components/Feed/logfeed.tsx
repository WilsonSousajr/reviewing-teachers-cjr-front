import React, { useState} from 'react'
import TeacherBox from './Teacher-box/TeacherBox'
import MyButton from '../Button/MyButton'
import Link from 'next/link'


function LogFeed() {
    const [dropdownAberto, setDropdownAberto] = useState(false);

    const toggleDropdown = () => {
    setDropdownAberto(!dropdownAberto);
    };

    const onclose = () =>{
        window.close();
    };

function openmodal(){
    const modal = document.getElementById('comment');
    modal?.classList.add('open');
}



    return (
        <>
            <div id="feed">
                <div className="flex justify-end mr-28">
                    <input placeholder="Buscar Professor(a)" className="placeholder:flex placeholder:justify-center text-xl pr-40 pl-4 py-2 rounded-xl"></input>
                </div>
                <div id="new-teachers" className="mt-[-1rem]">
                    <h2 className="text-3xl mb-4 pl-40">Novos Professores</h2>
                    <div className='flex flex-col items-center'>
                        <div className='justify-start grid grid-cols-6 gap-y-6 overflow-hidden mb-8'>
                            {/* Usage: <TeacherBox name='-name-' ocuppation='-ocuppation-' picture='-url-'/> */}
                            <TeacherBox name='Nome' ocuppation='Disciplina' picture='https://s3-alpha-sig.figma.com/img/e698/2e6c/845dc909c50d919bd3b40deeb417a8bb?Expires=1716768000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=FZiqoDb4kpkf8y1Rb0h1gSXcj~3tuSrBKatmqFBB~rM5qtetn6EzBst4kViv6~3B7Cobb9vkzQlQ0hqub1U-aREGatSK9wNxj3SuB20fHnwpAtzoo9cY8v60JfJSUHlnrPnJx3I5smNSa-ZSpkT~c~n7vB60EFPDZ2ECkDAxzVsIGEhxF67vSwmvPjw8htnS83MxzoMqY4nniUng8PkHwncTIgwU2hZx7lDiNMjl6pLDPMTQ3D-0eFZ-b9OKFI-nFgPvDx0KusBaq9s0F~g4JyQIlETI-ogtyBL1GJ-LobiSSDvXcM8Qea7m0P79KGjyo7ueVqHRKZk9MBx0Ouy2yw__'/>
                            <TeacherBox name='Nome' ocuppation='Disciplina' picture='https://s3-alpha-sig.figma.com/img/e698/2e6c/845dc909c50d919bd3b40deeb417a8bb?Expires=1716768000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=FZiqoDb4kpkf8y1Rb0h1gSXcj~3tuSrBKatmqFBB~rM5qtetn6EzBst4kViv6~3B7Cobb9vkzQlQ0hqub1U-aREGatSK9wNxj3SuB20fHnwpAtzoo9cY8v60JfJSUHlnrPnJx3I5smNSa-ZSpkT~c~n7vB60EFPDZ2ECkDAxzVsIGEhxF67vSwmvPjw8htnS83MxzoMqY4nniUng8PkHwncTIgwU2hZx7lDiNMjl6pLDPMTQ3D-0eFZ-b9OKFI-nFgPvDx0KusBaq9s0F~g4JyQIlETI-ogtyBL1GJ-LobiSSDvXcM8Qea7m0P79KGjyo7ueVqHRKZk9MBx0Ouy2yw__'/>
                            <TeacherBox name='Nome' ocuppation='Disciplina' picture='https://s3-alpha-sig.figma.com/img/e698/2e6c/845dc909c50d919bd3b40deeb417a8bb?Expires=1716768000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=FZiqoDb4kpkf8y1Rb0h1gSXcj~3tuSrBKatmqFBB~rM5qtetn6EzBst4kViv6~3B7Cobb9vkzQlQ0hqub1U-aREGatSK9wNxj3SuB20fHnwpAtzoo9cY8v60JfJSUHlnrPnJx3I5smNSa-ZSpkT~c~n7vB60EFPDZ2ECkDAxzVsIGEhxF67vSwmvPjw8htnS83MxzoMqY4nniUng8PkHwncTIgwU2hZx7lDiNMjl6pLDPMTQ3D-0eFZ-b9OKFI-nFgPvDx0KusBaq9s0F~g4JyQIlETI-ogtyBL1GJ-LobiSSDvXcM8Qea7m0P79KGjyo7ueVqHRKZk9MBx0Ouy2yw__'/>
                            <TeacherBox name='Nome' ocuppation='Disciplina' picture='https://s3-alpha-sig.figma.com/img/e698/2e6c/845dc909c50d919bd3b40deeb417a8bb?Expires=1716768000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=FZiqoDb4kpkf8y1Rb0h1gSXcj~3tuSrBKatmqFBB~rM5qtetn6EzBst4kViv6~3B7Cobb9vkzQlQ0hqub1U-aREGatSK9wNxj3SuB20fHnwpAtzoo9cY8v60JfJSUHlnrPnJx3I5smNSa-ZSpkT~c~n7vB60EFPDZ2ECkDAxzVsIGEhxF67vSwmvPjw8htnS83MxzoMqY4nniUng8PkHwncTIgwU2hZx7lDiNMjl6pLDPMTQ3D-0eFZ-b9OKFI-nFgPvDx0KusBaq9s0F~g4JyQIlETI-ogtyBL1GJ-LobiSSDvXcM8Qea7m0P79KGjyo7ueVqHRKZk9MBx0Ouy2yw__'/>
                            <TeacherBox name='Nome' ocuppation='Disciplina' picture='https://s3-alpha-sig.figma.com/img/e698/2e6c/845dc909c50d919bd3b40deeb417a8bb?Expires=1716768000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=FZiqoDb4kpkf8y1Rb0h1gSXcj~3tuSrBKatmqFBB~rM5qtetn6EzBst4kViv6~3B7Cobb9vkzQlQ0hqub1U-aREGatSK9wNxj3SuB20fHnwpAtzoo9cY8v60JfJSUHlnrPnJx3I5smNSa-ZSpkT~c~n7vB60EFPDZ2ECkDAxzVsIGEhxF67vSwmvPjw8htnS83MxzoMqY4nniUng8PkHwncTIgwU2hZx7lDiNMjl6pLDPMTQ3D-0eFZ-b9OKFI-nFgPvDx0KusBaq9s0F~g4JyQIlETI-ogtyBL1GJ-LobiSSDvXcM8Qea7m0P79KGjyo7ueVqHRKZk9MBx0Ouy2yw__'/>
                            <TeacherBox name='Nome' ocuppation='Disciplina' picture='https://s3-alpha-sig.figma.com/img/e698/2e6c/845dc909c50d919bd3b40deeb417a8bb?Expires=1716768000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=FZiqoDb4kpkf8y1Rb0h1gSXcj~3tuSrBKatmqFBB~rM5qtetn6EzBst4kViv6~3B7Cobb9vkzQlQ0hqub1U-aREGatSK9wNxj3SuB20fHnwpAtzoo9cY8v60JfJSUHlnrPnJx3I5smNSa-ZSpkT~c~n7vB60EFPDZ2ECkDAxzVsIGEhxF67vSwmvPjw8htnS83MxzoMqY4nniUng8PkHwncTIgwU2hZx7lDiNMjl6pLDPMTQ3D-0eFZ-b9OKFI-nFgPvDx0KusBaq9s0F~g4JyQIlETI-ogtyBL1GJ-LobiSSDvXcM8Qea7m0P79KGjyo7ueVqHRKZk9MBx0Ouy2yw__'/>
                        </div>
                        <hr className='border-black leading-3 w-[90%] mb-8' />
                    </div>   
                </div>
                <div id='DropDown' className="flex justify-end mr-28 relative space-x-3">
                        <button type="button"
                        className='bg-lightblue text-white text-xl py-1 px-8 rounded-xl outline outline-white outline-2 shadow-black shadow-md'> Nova Publicação

                        </button>

                    <div className='block'>
                        <button onClick={toggleDropdown} id="dropdownHoverButton" data-dropdown-toggle="dropdownHover" data-dropdown-trigger="hover" type="button"
                        className='bg-lightblue text-white text-xl py-1 px-8 rounded-xl outline outline-white outline-2 shadow-black shadow-md'>Ordenar</button>{dropdownAberto &&(
                            <div id="dropdownHover" className='z-10 bg-slate-300 px-2 divide-y divide-black rounded-lg shadow w-60 ml-[-7rem] mb-[-6rem] overflow-visible mt-[3px]'>
                                <a className='text-black py-1 px-3 block' href=''>Link1</a>
                                <a className='text-black py-1 px-3 block' href=''>Link2</a>
                                <a className='text-black py-1 px-3 block' href=''>Link3</a>
                            </div>
                        )}

                    </div>

                </div>
                <div id='every-teacher' className='mt-[-1rem]'>
                    <h2 className='text-3xl mb-4 pl-40'>Todos os Professores</h2>
                    <div className='flex flex-col items-center'>
                        <div className='justify-start grid grid-cols-6 gap-y-6 overflow-hidden mb-8'>
                            {/* Usage: <TeacherBox name='-name-' ocuppation='-ocuppation-' picture='-url-'/> */}
                            <TeacherBox name='Nome' ocuppation='Disciplina' picture='https://s3-alpha-sig.figma.com/img/e698/2e6c/845dc909c50d919bd3b40deeb417a8bb?Expires=1716768000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=FZiqoDb4kpkf8y1Rb0h1gSXcj~3tuSrBKatmqFBB~rM5qtetn6EzBst4kViv6~3B7Cobb9vkzQlQ0hqub1U-aREGatSK9wNxj3SuB20fHnwpAtzoo9cY8v60JfJSUHlnrPnJx3I5smNSa-ZSpkT~c~n7vB60EFPDZ2ECkDAxzVsIGEhxF67vSwmvPjw8htnS83MxzoMqY4nniUng8PkHwncTIgwU2hZx7lDiNMjl6pLDPMTQ3D-0eFZ-b9OKFI-nFgPvDx0KusBaq9s0F~g4JyQIlETI-ogtyBL1GJ-LobiSSDvXcM8Qea7m0P79KGjyo7ueVqHRKZk9MBx0Ouy2yw__'/>
                            <TeacherBox name='Nome' ocuppation='Disciplina' picture='https://s3-alpha-sig.figma.com/img/e698/2e6c/845dc909c50d919bd3b40deeb417a8bb?Expires=1716768000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=FZiqoDb4kpkf8y1Rb0h1gSXcj~3tuSrBKatmqFBB~rM5qtetn6EzBst4kViv6~3B7Cobb9vkzQlQ0hqub1U-aREGatSK9wNxj3SuB20fHnwpAtzoo9cY8v60JfJSUHlnrPnJx3I5smNSa-ZSpkT~c~n7vB60EFPDZ2ECkDAxzVsIGEhxF67vSwmvPjw8htnS83MxzoMqY4nniUng8PkHwncTIgwU2hZx7lDiNMjl6pLDPMTQ3D-0eFZ-b9OKFI-nFgPvDx0KusBaq9s0F~g4JyQIlETI-ogtyBL1GJ-LobiSSDvXcM8Qea7m0P79KGjyo7ueVqHRKZk9MBx0Ouy2yw__'/>
                            <TeacherBox name='Nome' ocuppation='Disciplina' picture='https://s3-alpha-sig.figma.com/img/e698/2e6c/845dc909c50d919bd3b40deeb417a8bb?Expires=1716768000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=FZiqoDb4kpkf8y1Rb0h1gSXcj~3tuSrBKatmqFBB~rM5qtetn6EzBst4kViv6~3B7Cobb9vkzQlQ0hqub1U-aREGatSK9wNxj3SuB20fHnwpAtzoo9cY8v60JfJSUHlnrPnJx3I5smNSa-ZSpkT~c~n7vB60EFPDZ2ECkDAxzVsIGEhxF67vSwmvPjw8htnS83MxzoMqY4nniUng8PkHwncTIgwU2hZx7lDiNMjl6pLDPMTQ3D-0eFZ-b9OKFI-nFgPvDx0KusBaq9s0F~g4JyQIlETI-ogtyBL1GJ-LobiSSDvXcM8Qea7m0P79KGjyo7ueVqHRKZk9MBx0Ouy2yw__'/>
                            <TeacherBox name='Nome' ocuppation='Disciplina' picture='https://s3-alpha-sig.figma.com/img/e698/2e6c/845dc909c50d919bd3b40deeb417a8bb?Expires=1716768000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=FZiqoDb4kpkf8y1Rb0h1gSXcj~3tuSrBKatmqFBB~rM5qtetn6EzBst4kViv6~3B7Cobb9vkzQlQ0hqub1U-aREGatSK9wNxj3SuB20fHnwpAtzoo9cY8v60JfJSUHlnrPnJx3I5smNSa-ZSpkT~c~n7vB60EFPDZ2ECkDAxzVsIGEhxF67vSwmvPjw8htnS83MxzoMqY4nniUng8PkHwncTIgwU2hZx7lDiNMjl6pLDPMTQ3D-0eFZ-b9OKFI-nFgPvDx0KusBaq9s0F~g4JyQIlETI-ogtyBL1GJ-LobiSSDvXcM8Qea7m0P79KGjyo7ueVqHRKZk9MBx0Ouy2yw__'/>
                            <TeacherBox name='Nome' ocuppation='Disciplina' picture='https://s3-alpha-sig.figma.com/img/e698/2e6c/845dc909c50d919bd3b40deeb417a8bb?Expires=1716768000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=FZiqoDb4kpkf8y1Rb0h1gSXcj~3tuSrBKatmqFBB~rM5qtetn6EzBst4kViv6~3B7Cobb9vkzQlQ0hqub1U-aREGatSK9wNxj3SuB20fHnwpAtzoo9cY8v60JfJSUHlnrPnJx3I5smNSa-ZSpkT~c~n7vB60EFPDZ2ECkDAxzVsIGEhxF67vSwmvPjw8htnS83MxzoMqY4nniUng8PkHwncTIgwU2hZx7lDiNMjl6pLDPMTQ3D-0eFZ-b9OKFI-nFgPvDx0KusBaq9s0F~g4JyQIlETI-ogtyBL1GJ-LobiSSDvXcM8Qea7m0P79KGjyo7ueVqHRKZk9MBx0Ouy2yw__'/>
                            <TeacherBox name='Nome' ocuppation='Disciplina' picture='https://s3-alpha-sig.figma.com/img/e698/2e6c/845dc909c50d919bd3b40deeb417a8bb?Expires=1716768000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=FZiqoDb4kpkf8y1Rb0h1gSXcj~3tuSrBKatmqFBB~rM5qtetn6EzBst4kViv6~3B7Cobb9vkzQlQ0hqub1U-aREGatSK9wNxj3SuB20fHnwpAtzoo9cY8v60JfJSUHlnrPnJx3I5smNSa-ZSpkT~c~n7vB60EFPDZ2ECkDAxzVsIGEhxF67vSwmvPjw8htnS83MxzoMqY4nniUng8PkHwncTIgwU2hZx7lDiNMjl6pLDPMTQ3D-0eFZ-b9OKFI-nFgPvDx0KusBaq9s0F~g4JyQIlETI-ogtyBL1GJ-LobiSSDvXcM8Qea7m0P79KGjyo7ueVqHRKZk9MBx0Ouy2yw__'/>
                        </div>
                    </div>
                </div>
            </div> 
        </>
      )
};

export default LogFeed;