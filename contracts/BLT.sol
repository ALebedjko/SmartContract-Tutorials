pragma solidity ^0.4.0;


import "zeppelin-solidity/contracts/token/MintableToken.sol";


contract BLT is MintableToken {

    string public name = "Banja-Live";

    string public symbol = "BLT";

    uint public decimals = 18;

    function BLT(uint256 _amount){
        owner = msg.sender;
        mint(owner, _amount);
    }

}
